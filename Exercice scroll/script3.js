document.addEventListener('scroll', (event) => {                        // Je crée un évènement au scroll
                                                                        // J'affiche dans la console la hauteur de la page, la hauteur d'affichage et la position de scroll
    console.log(`
        Hauteur page : ${document.body.scrollHeight}
        Hauteur affichage : ${window.innerHeight}
        Scroll position : ${window.scrollY}`);

        let scrollMax = document.body.scrollHeight - innerHeight;       // Hauteur de la page - hauteur de l'affichage
        let onEstOu = (window.scrollY / scrollMax) * 100;               // Faire un ratio pour avoir un pourcentage et savoir où on en est du scroll
        
        let selectedBar = document.querySelector(".bar");
        console.log(selectedBar);

       selectedBar.style.width = onEstOu + "%";                         // Enfin on assigne ce pourcentage de scroll à la width(%) du style de la bar
});