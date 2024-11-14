function division(){
  let x = prompt('Entrez un premier nombre (numérateur)');
  let y = prompt('Entrez un deuxième nombre (dénominateur)');
  
  if(isNaN(x) || isNaN(y) || x == '' || y == ''){                 // Si l'utilisateur rentre H / H, ça affichera "merci de rentrer deux nombres"
      throw new Error('Merci de rentrer deux nombres');
  }else if(y == 0){
      // throw new Error('Division par 0 impossible')
      throw console.warn('Division par 0 impossible');            // Si l'utilisateur rentre un nombre divisé par 0, ça affichera "Division par 0 impossible" en console
  }else{
      alert(x / y);                                               // Si l'utilisateur rentre bien un nombre divisé par autre que 0, ça affichera le résultat
  }
}

division();

// try{
//   division();
// }catch(err){
//   alert(err.message);
// }finally{
//   alert(`Ce message s'affichera quoiqu'il arrive`);
// }