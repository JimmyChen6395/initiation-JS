/******************
**** PARTIE 1  ****
/******************/

var nom = "Vilain"; //variable globale, peut être utilisée dans tout mon code.
let prénom = 'Guy'; //Variable globale, n'est accessible qu'à certain endroit de mon code
console.log(nom);
console.log(prénom);


const registreNational = "871022-554-32";//Variable locale dont la valeur ne changera pas.
console.log(registreNational);//Je peux lire ma variable
// registreNational = "123254-244-21";//Si je réaffecte une nouvelle valeur à cette constante --> error
// console.log(registreNational);

console.log("*******************************************************************")

/******************
**** PARTIE 2  ****
/******************/

let rue = "Place de la concorde";//Chaîne de caractère
console.log(rue);

let âge = 18; // Number
console.log(âge);

let majeur = true;//Boolean
console.log(majeur);

let personne = {//objet
    nom: "Vilain",
    prénom: "Guy",
    âge: "41"
}

console.log(personne);

console.log(personne.nom + " " + personne.prénom + " " + personne.âge);

function direBonjour(){console.log("Bonjour");}//déclarer une Fonction

direBonjour();//Appel de ma fonction

