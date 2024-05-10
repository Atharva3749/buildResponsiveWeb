
const ham=document.querySelector("#hamburger")

ham.addEventListener('click',(event)=>{
    if(ham.nextElementSibling.classList.contains("hidden")){
        ham.nextElementSibling.classList.remove("hidden","w-0");
    }
    else{
        ham.nextElementSibling.classList.add("hidden","w-0");

    }
    
})