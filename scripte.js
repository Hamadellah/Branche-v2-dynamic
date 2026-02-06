const form = document.getElementById("Destination_page");
const modal = document.getElementById("modal")
let tab = [
  {
    id: 1,
    title: "Yellow Rever",
    destination: "china ",
    Date: "10-10-2004",
    categorie: "forest",
    Image: "images/imagre 3.png",
  },
];
const section = document.getElementById("section");
function afficher(tab) {
  section.innerHTML = "";
  tab.forEach((e) => {
    section.innerHTML += `
              <div class="flex justify-center mt-[14px]">
                   <div class="  w-[350px] h-[230px] rounded-[22px] shadow-xl md:w-[600px] md:h-[300px] ">
                     <div
                       class="image w-[350px] h-[160px] rounded-[12px] flex md:w-full md:h-[220px] bg-black"
                       style="background-image:url(${e.Image})"
                     > 
                     <div class="flex flex-col items-end gap-[5px] mt-[3px]  h-[50px] w-full">
                    <button class="text-sm w-[80px] rounded-lg bg-white">modifier</button>
                    <button class="text-sm w-[80px] rounded-lg bg-white"onclick="supprimer(${e.id})">supprimer</button>
                     </div>
                    </div>


                     <div class="w-[300px] h-[65px] flex flex-row md:w-[600px]">
                       <div class="w-[150px] h-[65px] ml-[12px] ">
                         <p>${e.title}</p>
                         <p class="ml-[2px] text-sm">
                           <a href="details.html">${e.destination}</a>
                         </p>
                       </div>
                       <div class="flex flex-row  w-full justify-end  w-[300px] md:justify-between">
                         <p class="ml-[13px]">${e.Date}</p>
                         <p class="ml-[10px]"> ${e.categorie}</p>
                       </div>
                     </div>
                   </div>
                 </div>`;
  });
}
afficher(tab);
function ajouter() {
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    let newelm = {
      id: tab.length + 1,
      title: e.target.Titre.value,
      destination: e.target.des.value,
      Date: e.target.date.value,
      categorie: e.target.cat.value,
      Image: e.target.img.value,
    };
    tab.push(newelm);
    afficher(tab);
    e.target.reset();
    modal.classList.add("hidden")
    
  });
}
ajouter();
function supprimer(id) {
  tab = tab.filtere((el) => el.id !== id)
  afficher(tab)
}
