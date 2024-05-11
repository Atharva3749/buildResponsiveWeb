const URLS = [
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
  }),
];
const photoFromGitHub = fetch(WebURL.GitHub)
  .then((Response) => {
    return Response.json();
  })
  .then((data) => {
    document.querySelectorAll("#avatar").forEach((item) => {
      item.children[0].src = data.avatar_url;
    });
  });
const MainImage = document.querySelectorAll(".RoadMap").forEach((item)=>{
item.children[0].src=ImageURL.RoadMap;
item.addEventListener("click",()=>(window.open(WebURL.RoadMap)))
});
const footer = document.querySelectorAll(".footer");
footer[0].firstChild.href = WebURL.Linkdin;
footer[1].firstChild.href = WebURL.Instagram;
footer[2].firstChild.href = WebURL.Whatsapp;
footer[3].firstChild.href = "#";

   const TechnicalSkills=document.querySelectorAll(".Tech");
        // DeskTopView
   TechnicalSkills.item(0).addEventListener("click", () => window.open(WebURL.JavaScript))
   TechnicalSkills.item(1).addEventListener("click", () => window.open(WebURL.React))
   TechnicalSkills.item(2).addEventListener("click", () => window.open(WebURL.Express))
   TechnicalSkills.item(3).addEventListener("click", () => window.open(WebURL.Node))
   TechnicalSkills.item(4).addEventListener("click", () => window.open(WebURL.Mongo))
   TechnicalSkills.item(5).addEventListener("click", () => window.open(WebURL.Sql))
   TechnicalSkills.item(6).addEventListener("click", () => window.open(WebURL.Aws))
   TechnicalSkills.item(7).addEventListener("click", () => window.open(WebURL.Java))
        // Mobile View
   TechnicalSkills.item(8).addEventListener("click", () => window.open(WebURL.JavaScript))
   TechnicalSkills.item(9).addEventListener("click", () => window.open(WebURL.React))
   TechnicalSkills.item(10).addEventListener("click", () => window.open(WebURL.Express))
   TechnicalSkills.item(11).addEventListener("click", () => window.open(WebURL.Node))
   TechnicalSkills.item(12).addEventListener("click", () => window.open(WebURL.Mongo))
   TechnicalSkills.item(13).addEventListener("click", () => window.open(WebURL.Sql))
   TechnicalSkills.item(14).addEventListener("click", () => window.open(WebURL.Aws))
   TechnicalSkills.item(15).addEventListener("click", () => window.open(WebURL.Java))
   