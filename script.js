let heart=document.querySelector(".heart");
let count=true;
let back=document.querySelector(".back");

heart.addEventListener("click",()=>{
   if(count){
       back.classList.add("lpview");
       count=false;
    }
    else{
        back.classList.add("flview");
        count=true;
    }
    
});



let menu=document.getElementById("menu");
let crose=document.querySelector(".menuslide >i");
let element=document.querySelector(".nav").innerHTML;
 
let menuslider=document.querySelector(".menuslide").innerHTML=element;

menuslider.style.display="inline";
menuslider.style.color="white"; 

menu.addEventListener("click",()=>{
    // menuslider.style.display="inline";
    // menuslider.style.color="white"; 
});



