var myButton = document.getElementById('btn-back-to-top');
const submit=document.getElementById('submit');
const socialSubmit=document.getElementById('socialSubmit');
window.onscroll = ()=>{
    scrollFunction();
    
}

function scrollFunction(){
    if(document.body.scrollTop > 20 || document.documentElement.scrollTop > 20){
        myButton.style.display = "block";
    } else {
        myButton.style.display = "none";
    }
}

myButton.addEventListener('click', backToTop);

function backToTop(){
   document.body.scrollTop = 0;
   document.documentElement.scrollTop = 0;
}

submit.addEventListener('click',siteBuy);
