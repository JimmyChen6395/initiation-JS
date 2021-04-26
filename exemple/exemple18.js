/******************
**** PARTIE 1  ****
/******************/

let panier = ['fraise', 'banane', 'poire', 'mangue', 'orange', 'abricot'];

//On va créer une constante fruit à chaque itération de la boucle
//Et nous allons exécuter une série d'instruction sur cette constante
for (const fruit in panier) {
    //dans une boucle for...in, la variable fruit n'accueille pas la valeur,
    //mais la position de l'index  ou se trouve l'itération de la boucle.
    console.log(fruit);
    //Pour traiter la valeur inclue dans fruit on peut traiter la demande de cette façon
    //console.log(panier[fruit]);
}
console.log("***********************************************\n\n\n");

/******************
**** PARTIE 2  ****
/******************/

//Avec for...of, j'ai directement accès à la valeur contenue dans la variable
for(const fruit of panier){
    console.log(fruit); 

    //Si j'ai besoin de connaître l'index de la valeur, je peux toujours utiliser:
    console.log(`l'index ${panier.indexOf(fruit)} contient le fruit ${fruit}`);
}
console.log("***********************************************\n\n\n");

/******************
**** PARTIE 3  ****
/******************/

let listePays = ['Belgique', 'France', 'Japon', 'Russie', 'Chine', 'Danemark', 'Suisse', 'Italie'];

//La boucle foreach prend en paramètre une fonction anonyme.
//En paramètre de cette fonction, je vais placer une variable qui va recevoir
//a chaque itération, la valeur du tableau parcouru
listePays.forEach(function(pays){
    console.log(pays);
})
console.log("***********************************************\n\n\n");

//Je peux réduire mon code en utilisant une fonction fléchée:

listePays.forEach(pays => console.log(`l'index ${listePays.indexOf(pays)} de mon tableau accueille le pays ${pays}`));

console.log("***********************************************\n\n\n");

/*************************************/
// concatener un tableau associatif **/
/*************************************/

let monTableauAssociatif = {
    'prenom' : 'Guy',
    'nom' : 'Vilain',
    'Profession' : 'Front-end integrateur'
};

let monTableauAssociatif2 = {
    'prenom' : 'Zinedine',
    'nom' : 'Zidane',
    'Profession' : 'Entraineur'
};

//Je veux ranger tout les éléments de mon tableau dans une variable, je crée ma variable:
let chaine = '';

//Avec un for in

for (const valeur in monTableauAssociatif) {
    chaine += (valeur + ' : ' + monTableauAssociatif[valeur] + '\n');
}

console.log(chaine);
console.log("***********************************************\n\n\n");

//Je peux créer une fonction qui va me permettre de concaténer une série de tableau associatif

function concateneTableau(element){
    let resutat = '';
    for (const valeur in element) {
        resutat += (valeur + ' : ' + element[valeur] + '\n');
    }
    console.log(resutat);
}

//J'utilise ma fonction

concateneTableau(monTableauAssociatif);
console.log("***********************************************\n\n\n");
concateneTableau(monTableauAssociatif2);
