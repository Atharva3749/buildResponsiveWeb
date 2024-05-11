
const ham=document.querySelector("#hamburger")

ham.addEventListener('click',(event)=>{
    if(ham.nextElementSibling.children[0].children[0].classList.contains("hidden")){
        ham.nextElementSibling.children[0].children[0].classList.remove("hidden","w-0");
    }
    else{
        ham.nextElementSibling.children[0].children[0].classList.add("hidden","w-0");

    }
    console.log()
    
})