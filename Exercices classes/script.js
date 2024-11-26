console.log("Exercice1");

class IMC {
    constructor(unNom, unPoids, uneTaille) {
    this.unNom = unNom;
    this.unPoids = unPoids;
    this.uneTaille = uneTaille;
    }

//Créer une classe IMC avec un constructeur qui recoit un nom, un poids, une taille et un résultat d'IMC (faisant référence à une fonction)

    calculIMC () {
        return (this.unPoids / (this.uneTaille**2)).toFixed(2);
    };

//Créer une fonction de calcul d'IMC qui retourne le résultat du calcul (à 2 nombres après la virgule)

    displayInfo () {
        console.log (`${this.unNom} : (${this.unPoids} kg, ${this.uneTaille} m) a un IMC de : ${this.resultatIMC}`);
    };

//Créer une fonction d'affichage display qui affiche en console une phrase avec le nom de la personne, son poids, sa taille et son IMC.

};

let list = [
    new IMC("Isabelle", 75, 1.74),
    new IMC("Jean-Claude", 82, 1.69),
    new IMC("Giselle", 52, 1.61),
];

//En dehors de la classe, récupérer une variable liste (un tableau de nouvelles instances de la classe)

for (let i = 0 ; i < list.length ; i++){
    list[i].displayInfo();
};

//Trouver un moyen de parcourir les éléments dans la variable list, sur chaque élément utiliser la fonction display.












console.log("Exercice2");


// Je créé la classe Salarié
class Employee {
    constructor(nom, prenom, age, salaireMensuel) {
      this.nom = nom;
      this.prenom = prenom;
      this.age = age;
      this.salaireMensuel = salaireMensuel;
    }
  
    // Fonction pour calculer le coût annuel total pour l'employeur avec 90% de charges
    coutAnnuel() {
      return (this.salaireMensuel * 12) * 1.9; // Salaire sur 12 mois avec 90% de charges
    }
  }
  
  // Je créé la classe PME
  class PME {
    constructor(nom, equipe, revenu, fraisFixes, fraisAchats) {
      this.nom = nom;
      this.equipe = equipe; // Qui fera référence au tableau de salariés (instances de Employee)
      this.revenu = revenu;
      this.fraisFixes = fraisFixes;
      this.fraisAchats = fraisAchats;
    }
  
    // Fonction fléchée pour calculer le coût total des salaires de l'équipe
    // A chaque fois que l'on parcoure un employé du tableau, on applique la fonction coutAnnuel() et on incrémente la variable totalSalaires
    coutSalaries() {
      let totalSalaires = 0;
      
      this.equipe.forEach(employee => {
        totalSalaires += employee.coutAnnuel();
      });
      return totalSalaires;
    }
    
  
    // Fonction pour calculer le bilan de l'entreprise
    bilanCalcul() {
      const totalSalaires = this.coutSalaries();
      const totalDepenses = this.fraisFixes + this.fraisAchats;
      const profit = this.revenu - totalDepenses - totalSalaires;
  
        console.log(`Bilan de l'entreprise ${this.nom} :
            Cout initial : ${totalDepenses} euros
            Coût total équipe : ${totalSalaires} euros
            Ventes : ${this.revenu} euros
            Bilan : ${profit} euros`)
    }
  };
  
  // Scénario initial
  const pme = new PME(
    'Brico Privé',
    [
      new Employee('Duval', 'Paul', 30, 2000),
      new Employee('Durand', 'Alain', 40, 3000),
      new Employee('Dois', 'Sylvia', 50, 4000),
    ],
    300000,
    20000,
    50000
  );
  
  pme.bilanCalcul();