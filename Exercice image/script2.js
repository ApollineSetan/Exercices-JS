document.addEventListener('click', (event) => {                 //Je crée un évènement de clic avec la variable event qui contient les informations du clic

    console.log(`Les coordonnées X sont : ${event.clientX}, les coordonnées Y sont : ${event.clientY}`);        //J'affiche dans la console les coodonnées X et Y du clic

    const image = document.createElement("img");                // Je crée un élèment image dans une constante image

    image.src = "https://picsum.photos/200/300";                // Je donne dans l'attribut source le lien de l'image dans la variable image

    image.style.position = "absolute";                          // Je donne la position absolute à l'image
    image.style.top = event.clientY - 150 + "px";               // Je donne à l'image la position Y du clic (je précise pixels)   (-150 pour être pile au centre de l'image)
    image.style.left = event.clientX - 100 + "px";              // Je donne à l'image la position X du clic (je précise pixels)   (-100 pour être pile au centre de l'image)

    document.body.appendChild(image);                           // Je donne au parent document l'enfant image 
})

