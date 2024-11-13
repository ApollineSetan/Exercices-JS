let monTitre = document.getElementById("mainTitle");            // déclarer une variable faisant référence au titre h1
let original = monTitre.textContent;                            // déclarer une variable faisant référence au contenu du titre h1

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

