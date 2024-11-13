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


/*

Exercice d'avant
if (etat) {
    monTitre.innerText = original;
} else {
    monTitre.innerText = "serious";
}
etat = !etat;


 let monTitre = document.querySelector("h1");
let etat = true;
console.log(monTitre)
monTitre.addEventListener("click",function(){
  console.log("ca marche")
  if(etat){
    monTitre.innerHTML = "PIPI";
  }
  else{
    monTitre.innerHTML = "CACA";
  }
  etat = !etat;
});   
*/