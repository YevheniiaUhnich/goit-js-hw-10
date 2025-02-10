import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css"; 

const form = document.querySelector('.form');
form.addEventListener('submit', onSubmit);

function onSubmit(evt) {
evt.preventDefault();

const { delay, state } = evt.currentTarget.elements;
const delayValue = parseInt(delay.value, 10);
const stateValue = state.value;

createPromise(delayValue, stateValue)
.then(() =>
    iziToast.success({
        message: `✅ Fulfilled promise in ${delay}ms`, 
        position: 'topRight'
    })
)
.catch(() => 
    iziToast.error({
        message: `❌ Rejected promise in ${delay}ms`, 
        position: 'topRight'
    })
);

form.reset();
}

function createPromise(delay, state) {
    return new Promise((resolve, reject) => {
    setTimeout(() => {
        if(state === 'fulfilled') {
            resolve ()
        } else {
            reject();
        }
    }, delay);
});
}
