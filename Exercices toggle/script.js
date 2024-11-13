let monTitre = document.getElementById("mainTitle");
let original = monTitre.textContent;

let ajouterClasse = document.getElementById("lien1");
let etat = false;

ajouterClasse.addEventListener("click",function(){

    monTitre.classList.add("chart");
})

let supprimerClasse = document.getElementById("lien2");

supprimerClasse.addEventListener("click",function(){
    monTitre.classList.remove("chart");

})

let toggleClasse = document.getElementById("lien3");

toggleClasse.addEventListener("click",function(){
     monTitre.classList.toggle("chart");  
})

