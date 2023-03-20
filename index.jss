const bar= document.querySelector('#nav');
const navba= document.querySelector('#navbar');
const close= document.getElementById('close');

if(bar){
    bar.addEventListener('click', () => {
        navba.classList.add("show");
    })
}
if(close){
    close.addEventListener('click', () => {
        navba.classList.remove("show");
    })
}
