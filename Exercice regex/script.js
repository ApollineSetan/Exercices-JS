addEventListener("keyup", (event) => {

    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const emailError = emailInput.nextElementSibling;
    const passwordError = passwordInput.nextElementSibling;

    // Regex pour l'email et le mot de passe
    const emailRegex = /^[a-z0-9._-]+@[a-z0-9._-]+\.[a-z]{2,6}$/;
    const charDecimal = /\d/;
    const charSpecial = /[$&@!]/;


    // Validation de l'email
    if (!emailRegex.test(emailInput.value)) {
        emailError.classList.remove('invisible');
        emailInput.classList.add('invalid');
    } else {
        emailError.classList.add('invisible');
        emailInput.classList.remove('invalid');
    }

    // Validation du mot de passe avec match()
    if (!passwordInput.value.match(charDecimal)) {
        passwordError.classList.remove('invisible');
        passwordInput.classList.add('invalid');
    } else {
        passwordError.classList.add('invisible');
        passwordInput.classList.remove('invalid');
    }

    if (!passwordInput.value.match(charSpecial)) {
        passwordError.classList.remove('invisible');
        passwordInput.classList.add('invalid');
    } else {
        passwordError.classList.add('invisible');
        passwordInput.classList.remove('invalid');
    }
});

const checkMeOut = document.getElementById('check');

checkMeOut.addEventListener("click", () => {
    console.log("C'est cliqué !");
    
});