const proprietePokemon = document.querySelector('.fichePokemon');                                  // Créer une variable qui récupère la div de la page html

const contactApi =  async () => {

    const response = await fetch('https://tyradex.vercel.app/api/v1/gen/9');            // Je lance la fonction d'appel à l'API
    console.log(response);
    console.log(response.ok);
    console.log(response.status);

    const dataTransformed = await response.json();                                      // Convertir les données en json et les placer dans une constante dataTransformed
    console.log(dataTransformed);                                                       // Retourne 122 objets dans un tableau (122 pokemons)
    console.log(dataTransformed[0]);                                                    // Retourne un objet précis du tableau (le Pokémon et toutes ses données)
    console.log(dataTransformed[0].name);                                               // Retourne le nom du Pokémon en question
    console.log(dataTransformed[0].name.fr);                                            // Retourne le nom français du Pokémon en question

    for (let i = 0 ; dataTransformed.length ; i++){
    proprietePokemon.innerHTML +=
    `<img src = "${dataTransformed[i].sprites.regular}">
     <p>Nom : ${dataTransformed[i].name.fr}</p>
     <p>Type : ${dataTransformed[i].types[0].name}</p>
     <p>Numéro Pokedex : ${dataTransformed[i].pokedex_id}</p>
     <p>Taille : ${dataTransformed[i].height}</p>
     <p>Poids : ${dataTransformed[i].weight}</p>`
    }
};

contactApi();
