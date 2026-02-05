const form = document.getElementById("Destination_page");
let list1 = [
  {
    id: 1,
    title: "hotman",
    author: "lucka modrich",
    image: "images/image 2 (2).png",
  },
];


let secard = document.getElementById("secCard");

function afficher(pr) {
    secard.innerHTML = "";
    pr.forEach(elm => {
        secard.innerHTML += `<div class=" mx-6 mt-12 h-[260px]"> 
        <div class=" w-full h-full bg-cover bg-center " style="background-image:url('${elm.image}')"> </div>
        <h5>${elm.title}</h5>
        <p>${elm.author }</p>
         </div> `;
    })
    
    
}

afficher(list1);
function ajouter() {
  form.addEventListener("submit", function (e) {
      
        e.preventDefault();
        let newelm = {
          id: list1.length + 1,
          title: e.target.Titre.value,
          author: e.target.des.value,
          image: e.target.img.value
        };
        list1.push(newelm);
        afficher(list1);
        e.target.reset()
        
    })
     
 }
ajouter();


