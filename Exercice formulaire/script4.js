

let userText = document.getElementById("demo");             // On crée une variable userText qui récupère le contenu de l'input (ID 'demo')
userText.value = localStorage.getItem('userText');          // On récupère ce est enregistrée dans le localstorage et on lui met la valeur de cet input (userText)
let monSuperTexte = userText.value;                         // On crée une variable monSuperTexte qui prend la valeur de ce que tape l'utilisateur
log.textContent = monSuperTexte;                            // On prend l'id du paragraphe random (ID 'log') et on lui met la valeur monSuperTexte pour que ça s'écrive plus loin



document.addEventListener('keyup', (event) => {             // On crée un évènement qui va enregistrer à chaque fois que l'utilisateur va relever une touche du clavier     

    if (userText.length >= 5){                              // Au delà de 5 caractères, le bouton submit se désactive
        document.getElementById("btn").disabled = true;
    } else {
        document.getElementById("btn").disabled = false;
    }
    localStorage.setItem('userText', userText.value);       // On utilise le setItem pour placer ce que l'utilisateur écrit dans le Local Storage
});

