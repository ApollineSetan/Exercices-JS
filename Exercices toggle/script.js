let monTitre = document.getElementById("mainTitle");             // déclarer une variable faisant référence au titre h1
let original = monTitre.textContent;                             // déclarer une variable faisant référence au contenu du titre h1

let ajouterClasse = document.getElementById("lien1");            // déclarer une variable faisant référene à l'id lien1
ajouterClasse.addEventListener("click",function(){               // créer une fonction qui exécute quelque chose lorsqu'on clique sur l'id lien1
    monTitre.classList.add("chart");                             // ajouter la classe chartreuse au clic
})

let supprimerClasse = document.getElementById("lien2");          // déclarer une variable faisant référene à l'id lien2
supprimerClasse.addEventListener("click",function(){             // créer une fonction qui exécute quelque chose lorsqu'on clique sur l'id lien2
    monTitre.classList.remove("chart");                          // enlever la classe chartreuse au clic

})

let toggleClasse = document.getElementById("lien3");             // déclarer une variable faisant référene à l'id lien3
toggleClasse.addEventListener("click",function(){                // créer une fonction qui exécute quelque chose lorsqu'on clique sur l'id lien3
     monTitre.classList.toggle("chart");                         // toggle sur la classe chartreuse au clic
})

