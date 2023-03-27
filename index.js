
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



 var sunn = document.getElementById('sun');

sunn.onclick = function (){
    document.body.classList.toggle("dark-them");
    if(document.body.classList.contains("dark-them"))
    {
        
        sunn.src="icon/sun-xxl.png";
        
    }else{
        sunn.src="./icon/moon-icon.png";
    }
}
    

    // }



