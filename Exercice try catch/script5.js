
// let prenom = "Apolline";                                    // Code exécuté correctement


// try{
//     alert('Bonjour ' + prenom);  
// }catch(err){
//   console.log(err);
//     alert(`Erreur Détectée ALERTE STOPPEZ TOUT: 
//         -----------
//         Le Nom de l'erreur 
//         ${err.name}
//         -----------
//         Le Message de l'erreur  :
//         ${err.message}
//         ----------
//         L'emplacement de l'erreur:
//         ${err.stack}`);
// }
// alert(`Ce message s'affiche correctement`);


try{                                                            // Code affichant une erreur (la variable prénom ici n'est pas définie)
    alert('Bonjour ' + prenom);  
}catch(err){
  console.log(err);
    alert(`Erreur Détectée ALERTE STOPPEZ TOUT: 
        -----------
        Le Nom de l'erreur 
        ${err.name}
        -----------
        Le Message de l'erreur  :
        ${err.message}
        ----------
        L'emplacement de l'erreur:
        ${err.stack}`);
}
alert(`Ce message s'affiche correctement`);