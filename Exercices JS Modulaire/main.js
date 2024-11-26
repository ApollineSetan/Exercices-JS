import { blaguesLolilol } from './welcomeService.js';
// Importer la fonction tirée du fichier (inscrire chemin)

console.log(window.location.pathname);

if (window.location.pathname === '/' || window.location.pathname === '/Exercices%20JS%20Modulaire/index.html'){
    blaguesLolilol();
};
// Exécuter la fonction si le chemin est égal à '/' ou se termine par 'index.html"