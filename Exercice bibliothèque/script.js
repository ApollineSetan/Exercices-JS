// Créer une classe Livre avec les attributs titre, auteur et disponible

class Livre {
    constructor (titre, auteur) {
        this.titre = titre;
        this.auteur = auteur;
        this.disponible = true;
    }

// Créer la méthode emprunter() qui change l'état de disponible à false si le livre est disponible
// Sinon lance une exception

    emprunter() {
        try {
            if (!this.disponible) {
                throw new Error(`Le livre "${this.titre}" n'est pas disponible.`);
            }
            this.disponible = false;
        } catch (error) {
            console.error(error.message);
        }
    }

// Créer le méthode retourner() qui change l'état de disponible à true

    retourner() {
        this.disponible = true;
    }
};

// Créer une classe Bibliothèque avec les attributs nom et livres (tableau d'objets livre)

class Bibliotheque {
    constructor (nom, livres) {
        this.nom = nom;
        this.livres = [];
    }

// Méthode ajouterLivre(livre) qui ajoute un livre à la bibliothèque

    ajouterLivre(livre) {
        this.livres.push(livre);
    }

// Méthode emprunterLivre(titre) cherche un livre par son titre et appelle la méthode emprunter()
// Sinon lance une exception

    emprunterLivre(titre) {
        try {
            const livre = this.livres.find(unLivre => unLivre.titre === titre);
            // console.log(livre);
            // Si on a pas trouvé le livre, si le find nous a retourné undefined,
            // alors on lève une erreur custom
            if (!livre) {
                throw new Error(`Le livre "${titre}" n'existe pas dans la bibliothèque.`);
            }
            livre.emprunter();
        } catch (error) {
            console.error(error.message);
        }
    }

// Cherche un livre par son titre et appelle la méthode retourner().
// Lance une exception sinon

    retournerLivre(titre) {
        try {
            const livre = this.livres.find(unLivre => unLivre.titre === titre);
            if (!livre) {
                throw new Error(`Le livre "${titre}" n'a jamais été les stocks de la bibliothèque.`);
            }
            livre.retourner();
        } catch (error) {
            console.error(error.message);
        }
    }

};


// Exemple d'utilisation scénario
const maBibliotheque = new Bibliotheque("Ma Bibliothèque");
const livre1 = new Livre("1984", "George Orwell");
const livre2 = new Livre("Le Gros Petit Prince", "Steven Seagal");
const livre3 = new Livre("Paslalaland", "LePtitGreg");


maBibliotheque.ajouterLivre(livre1);
maBibliotheque.ajouterLivre(livre2);

maBibliotheque.emprunterLivre("1984"); // Livre emprunté avec succès.
maBibliotheque.emprunterLivre("1984"); // Déclenche exception livre n'est plus disponible.
maBibliotheque.retournerLivre("egegege"); // Livre retourné avec succès.
maBibliotheque.retournerLivre("1984"); // Livre retourné avec succès.
maBibliotheque.emprunterLivre("198999"); // Déclenche exception livre n'existe pas.