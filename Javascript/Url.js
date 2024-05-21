const Data =[
  (WebURL = {
    GitHub: "https://api.github.com/users/Atharva3749",
    Linkdin: "https://www.linkedin.com/in/atharv-shinde-a456b2152/",
    Instagram: "https://www.instagram.com/athu_3749/",
    Whatsapp: "https://wa.me/8446848504",
    RoadMap: "https://www.geeksforgeeks.org/mern-stack-development-roadmap/",
    JavaScript:"https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    React:"https://react.dev/learn",
    Express:"https://expressjs.com/en/guide/routing.html",
    Node:"https://nodejs.org/docs/latest/api/",
    Mongo:"https://www.mongodb.com/docs/",
    Sql:"https://dev.mysql.com/doc/",
    Aws:"https://docs.aws.amazon.com/",
    Java:"https://docs.oracle.com/en/java/"
  }),
  (ImageURL = {
    RoadMap:
      "https://media.geeksforgeeks.org/wp-content/uploads/20240305101528/Roadmap-to-Mern-stack-developer-copy-(3).webp",
      HamBurger:
      "../../img/burger-menu-svgrepo-com.svg"
  })
];
const ham=document.querySelector("#hamburger")
ham.children[0].src=ImageURL.HamBurger
const hamFunctionality =ham.nextElementSibling.children[0].children[0];

ham.addEventListener('click',()=>{
    if(hamFunctionality.classList.contains("hidden")){
        hamFunctionality.classList.remove("hidden","w-0");
    }
    else{
        hamFunctionality.classList.add("hidden","w-0");
    }
})

 fetch(WebURL.GitHub)
  .then((Response) => {
    return Response.json();
  })
  .then((data) => {
    document.querySelectorAll("#avatar").forEach((item) => {
      item.children[0].src = data.avatar_url;
    });
  });
// GitHUb
  const MainImage = document.querySelectorAll(".RoadMap").forEach((item)=>{
    item.children[0].src=ImageURL.RoadMap;
    item.addEventListener("click",()=>(window.open(WebURL.RoadMap)))
    });
    const footer = document.querySelectorAll(".footer");

    footer.forEach((item)=>{
      item.children[1].children[0].href=WebURL.Linkdin
      item.children[2].children[0].href=WebURL.Instagram
      item.children[3].children[0].href=WebURL.Whatsapp
      item.children[4].children[0].href="#"
    })
  
       const TechnicalSkills=document.querySelectorAll(".Buttons");
       TechnicalSkills.forEach((item)=>{
        item.children[0].onclick=()=>window.open(WebURL.JavaScript)
        item.children[1].onclick=()=>window.open(WebURL.React)
        item.children[2].onclick=()=>window.open(WebURL.Express)
        item.children[3].onclick=()=>window.open(WebURL.Node)
        item.children[4].onclick=()=>window.open(WebURL.Mongo)
        item.children[5].onclick=()=>window.open(WebURL.Sql)
        item.children[6].onclick=()=>window.open(WebURL.Aws)
        item.children[7].onclick=()=>window.open(WebURL.Java)
       })