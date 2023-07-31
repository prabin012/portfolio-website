
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
       
        sunn.src="./icon/moon-icon.png";
        
    }else{
        sunn.src="icon/sun-xxl.png";
    
    }
}

let slideIndex=0;
function slideShow(){
    try{
        let i;
        let blogss=document.getElementsByClassName("blog-box");
        for(i=0; i< blogss.length; i++){
            blogss[i].style.display="none";
        }
        slideIndex ++;
    
        if(slideIndex > blogss.length){
            slideIndex =1;
        }
        blogss[slideIndex-1].style.display="block";
        setTimeout(slideShow, 3000);
        
    }
    catch{
        console.error();
    }
    
}
slideShow();
  
let slideIndex1=0;
function slideShows(){
    try{
        let i;
        let blogss=document.getElementsByClassName("blog-box-1");
        for(i=0; i< blogss.length; i++){
            blogss[i].style.display="none";
        }
        slideIndex1 ++;
    
        if(slideIndex1 > blogss.length){
            slideIndex1 =1;
        }
        blogss[slideIndex1-1].style.display="block";
        setTimeout(slideShows, 3000);
       
    }
    catch{
        console.error();
    }
    
}
slideShows();




    

    // }






