/******************
**** PARTIE 1  ****
/******************/
/*****************************
//       tableau simple     **
*****************************/

let monTableau = ['première donnée', 'deuxième donnée', 'troisième données'];
console.log(monTableau[1]);
console.log("***********************************************\n\n\n");
console.log("***********************************************\n\n\n");
console.log("***********************************************\n\n\n");

//length pour connaître la taille d'un tableau
let entréeDuTableau = monTableau.length;
console.log(`Mon tableau contient ${entréeDuTableau} entrées.`);

console.log("***********************************************\n\n\n");

//lAjouter une entrée grâce à la taille de mon tableau
let finDeTableau = monTableau.length - 1;
console.log(monTableau[finDeTableau]);
console.log("***********************************************\n\n\n");

//Ajouter des éléments à mon tableau
monTableau.push('données quatre');
monTableau.push('données cinq', 'données six');
console.log(monTableau);
console.log("***********************************************\n\n\n");


//Ajouter des éléments au début du tableau
monTableau.unshift('zero'); 
console.log(monTableau);
console.log("***********************************************\n\n\n");

//Supprimer le dernier élément:
monTableau.pop();
console.log(monTableau);
console.log("***********************************************\n\n\n");

//Supprimer le premier élément
monTableau.shift();
console.log(monTableau);
console.log("***********************************************\n\n\n");

//retrouver l'index d'un élément (uniqument pour tableau simple)
console.log(monTableau.indexOf('deuxième donnée'));
console.log("***********************************************\n\n\n");

//Concaténer tout les élément d'un tableau dans une chaine de caractère
let concatenation = monTableau.join();
console.log('le contenu de mon tableau est: \'' + concatenation + '\'');
console.log("***********************************************\n\n\n");

//Je peux aussi ajouter des caractère en chaque entrée de mon tableau
let concatenationDeux = monTableau.join(' / ');
console.log('le contenu de mon tableau est: \'' + concatenationDeux + '\'');
console.log("***********************************************\n\n\n");

//Effacer des éléments de mon tableau
// Je commence à effacer les élément à l'index '2', et j'efface 2 élements
monTableau.splice(2, 2);
console.log(monTableau);
console.log("***********************************************\n\n\n");

//Avec un '0' en deuxième éléments, je peux rajouter de nouvelles entrée dans mon tableau
monTableau.splice(2, 0, '3', '4');
console.log(monTableau);
console.log("***********************************************\n\n\n");

/*****************************
//tableau multidimensionnel **
*****************************/
let monTableau2D = [
    ['Guy', 'Delphine', 'Geisha', 'Louise'],//index0
    ['Vilain', 'Terzakis', 'Vandemachin', 'Minibee']//index 1
];

console.log(monTableau2D[0][2]);
console.log(monTableau2D[1][2]);

//Ajouter un nouveau tableau
monTableau2D.push(['Développeur', 'Super Chapin', 'Pitch', 'Loulou']);
console.log(monTableau2D);

let finDeTableau2D = monTableau2D.length - 1;//opération 3-1
console.log(monTableau2D[finDeTableau2D]);//
console.log(monTableau2D[2]);

//Ajouter un entrée dans un des tableau:

monTableau2D[0].push('Mel');
console.log(monTableau2D[0]);

//Supprimer un élément

monTableau2D[0].pop();
console.log(monTableau2D[0]);

//fonction join avec un tableau 2D

let conca2D = monTableau2D.join(' / ');
console.log('le contenu de mon tableau est: \'' + conca2D + '\'');

//rajouter un élément dans un tableau2d avec splice:

monTableau2D.splice(3, 0, ['42', '39', '10', '4']);
console.log(monTableau2D);


/*****************************
 *      Tableau associatif  **
 ****************************/

let monTableauAssociatif = {
    'prenom' : 'Guy',
    'nom' : 'Vilain',
    'Profession' : 'Front-end integrateur'
};

console.log(monTableauAssociatif.prenom + " " +  monTableauAssociatif.Profession);
console.log(monTableauAssociatif['nom']);

//Ajouter une nouvelle entrée à mon tableau

monTableauAssociatif['Nationalite'] = 'Belge';
console.log(monTableauAssociatif.Nationalite);

//Effacer un élément:

delete(monTableauAssociatif['Nationalite']);
console.log(`mon tableau est ${monTableauAssociatif.Nationalite}`);

