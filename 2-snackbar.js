import"./assets/styles-0QKoreTA.js";import{i as o}from"./assets/vendor-BbbuE1sJ.js";const r=document.querySelector(".form");r.addEventListener("submit",n);function n(e){e.preventDefault();const{delay:t,state:i}=e.currentTarget.elements;m(t.value,i.value).then(s=>o.success({message:`✅ Fulfilled promise in ${t}ms`,position:"topRight"})).catch(s=>o.error({message:`❌ Rejected promise in ${t}ms`,position:"topRight"})),r.reset()}function m(e,t){return new Promise((i,s)=>{setTimeout(()=>{t==="fulfilled"?i(e):s(e)},e)})}
//# sourceMappingURL=2-snackbar.js.map
