

document.addEventListener('keyup', (event) => {                     // créer un évènement lorsqu'une touche du clavier est relevée
    let userText = document.getElementById("demo").value;           // déclarer une variable de ce que tape l'utilisateur et la placer dans l'id demo de l'input
    log.textContent = userText;                                     // récupérer ce que l'utilisateur a tapé et l'assigner au paragraphe à l'id log

    if (userText.length >= 5){                                      // Si l'utilisateur a tapé plus de 5 caractères, le bouton se désactive
        document.getElementById("btn").disabled = true;
    } else {
        document.getElementById("btn").disabled = false;
    }

    localStorage.setItem('userText', userText);   
    log.textContent = localStorage.getItem('userText');
})