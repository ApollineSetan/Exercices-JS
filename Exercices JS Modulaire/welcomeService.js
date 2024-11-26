export function blaguesLolilol(){
    // La fonction à exporter dans main.js

    async function chuckNorrisJokes() {
        try {
        const responseJSON = await fetch('https://api.chucknorris.io/jokes/random');            // Promesse (réponse en attente) que l'on stocke dans une variable
        const dataJS = await responseJSON.json();                                               // Conversion de la réponse au format JS que l'on stocke dans une variable
        console.log(dataJS, 'objet Javascript');                                                // Affiche en console le type de données de l'API
        let blague = document.getElementById('titre');                                          // On créé une variable qui stockera le contenu de 'titre'
        blague.innerText = dataJS.value;                                                        // On affiche la blague dans le titre
        } catch (error) {
            console.warn("Erreur d'appel à l'API");
        }                                                    
    }
    chuckNorrisJokes();                                                                         // On appelle la fonction
}