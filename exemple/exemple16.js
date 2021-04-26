/******************
**** PARTIE 1  ****
/******************/
let quatre = 4;

//Déclarer un tableau
let tableau = new Array('un', 'deux', 'trois'); //Inutilisé actuellement
let monTableau = ['un', 'deux', 'trois', quatre];

console.log(monTableau[0]);//un
console.log(monTableau[1]);//deux
console.log(monTableau[2]);//trois
console.log(monTableau[3]);//4

console.log("***********************************************\n\n\n");

/******************
**** PARTIE 2  ****
/******************/

let langage = ['html', '', 'javascript', '', 'php', 'sql', '', 'Python'];
console.log(` le tableau contient ${langage.length} données`);

console.log("***********************************************\n\n\n");


/******************
**** PARTIE 3  ****
/******************/

let tableauMd = [
    ['Mark', 'Jeff', 'Bill'],//index 0
    ['Zuckerberg', 'Bezos', 'Gates']//index1
]

console.log(`Ma première personnalité est ${tableauMd[0][0]} ${tableauMd[1][0]}`);
console.log(`Ma seconde personnalité est ${tableauMd[0][1]} ${tableauMd[1][1]}`);
console.log(`Ma troisième personnalité est ${tableauMd[0][2]} ${tableauMd[1][2]}`);

console.log("***********************************************\n\n\n");

/******************
**** PARTIE 4  ****
/******************/

 let monTableauAssociatif = {
    'prenom' : 'Guy',
    'nom' : 'Vilain',
    'profession' : 'Front-end integrateur'
};

//Accéder aux éléments de mon tableau associatif
console.log(`Je vous présente Monsieur ${monTableauAssociatif.prenom} ${monTableauAssociatif.nom},\n qui est ${monTableauAssociatif.profession}`);
//Autre manière d'accéder aux élément de mon tableau associatif
console.log(monTableauAssociatif['nom']);

//Ajouter une nouvelle entrée à mon tableau
monTableauAssociatif['nationalite'] = 'Belge';
console.log(monTableauAssociatif);

console.log("***********************************************\n\n\n");