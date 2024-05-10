const avatar=document.getElementById("avatar");
const photoFromGitHub=fetch("https://api.github.com/users/Atharva3749").then((Response)=>{return Response.json()}).then((data)=>{
const Imagesource=avatar.children[0];
const SecondImage=document.querySelectorAll("img");
SecondImage[2].src=`${data.avatar_url}`;
const source=Imagesource.src=`${data.avatar_url}`
})