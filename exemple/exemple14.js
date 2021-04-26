/******************
**** PARTIE 1  ****
/******************/

//Déclaration d'une condition simple
if(true) console.log("Je suis dans ma condition"); 
else console.log("Je ne suis pas dans ma condition");

if(false) console.log("Je suis dans ma condition"); 
else console.log("Je ne suis pas dans ma condition");

//Les opérateurs de comparaison

let heure = 11;
//Est égak
if(heure == 11){
    console.log(`${heure} est égale à 11`);
    heure++;
}

//Est différent
if(heure != 11) console.log(`${heure} est différent de 11`);

//est supérieur
if(heure > 11){
    console.log(`${heure} est supérieur à 11`);
    heure -= 4;
}

//Est inférieur
if(heure < 11){
    console.log(`${heure} est inférieur à 11`);
    heure = 11;
}

//est inférieur ou égal
if(heure <= 11){
    console.log(`${heure} est inférieur ou égal à 11`);
    heure ++;
};

//Est supérieur ou égal
if(heure >= 11){
    console.log(`${heure} est supérieur ou égal à 11`);
}


console.log("***********************************************\n\n\n");

//Else if
heure = 13;

if(heure < 12){
    console.log("C'est le matin");
} else if(heure == 12) {
    console.log("Bon appétit");
} else if(heure > 12){
    console.log('c\'est l\'après-midi');
}

console.log("***********************************************\n\n\n");

//Opérateur OR et AND

let gareDeDépart = "Bruxelles-midi"
let gareArrivée = "";

// avec &&, les deux conditions doivent être remplie pour lancer les instructions
if(gareDeDépart != "" && gareArrivée != ""){
    console.log("le train va démarrer")
} else {
    console.log("Le train attends en gare");
}

// Avec || une des deux conditions doit être remplie pour lancer le code

if(gareDeDépart != "" || gareArrivée != ""){
    console.log("le train va démarrer")
} else {
    console.log("Le train attends en gare");
}



console.log("***********************************************\n\n\n");

//condition ternaire

let x=5;
x == 3 ? console.log('x est égal à trois') : console.log('x n\'est pas égal à 3');

console.log("***********************************************\n\n\n");


/**********************
**** Challenge 01  ****
/**********************/


/*
    demander age de l'utilisateur
    écrire un texte sur la page html selon l'âge entré:

    += 16 et - 18 ans -> Vous êtes mineur mais aux usa vous pouvez conduire une voiture!
    -18 ans -> Vous êtes mineur
    entre 18 et 20ans -> Dans la plupart des pays d'europe, vous êtes majeurs
    +20 ans -> Aux usa vous avez maintenant le droit d'acheter de l'alcool

*/

/**********************
**** Challenge 02  ****
/**********************/

/* 
    - Un usager est à la gare de Bruxelles-midi, pour partir, son train doit avoir une gare de départ
    et une gare d'arrivée et doit disposer d'un chauffeur
    - Si ces conditions sont réunies, le train peut partir, si pas, le train reste à quai.
    - Formuler la condition qui renvoie un console.log selon la réussite ou l'échec de ces conditions
    - Bonus demander à l'usager sa destination, si l'usager ne réponds pas, 
    assigner la destination "Mons" comme destination par défaut
    
*/

/*******************
**** Partie 02  ****
/*******************/

let lancéDé = 6

switch(lancéDé){
    case 1 : 
        console.log("Vous avancez d'une case");
        console.log("ceci est une nouvelle instruction");
        console.log("et in vl'a eine troisième!");
        break;
    case 2 : 
        console.log("Vous avancez de deux cases");
        break;
    case 3 : 
        console.log("Vous avancez de trois cases");
        break;               
    case 4 : 
        console.log("Vous avancez de quatre cases");
        break;
    case 5 : 
        console.log("Vous avancez de cinq cases");
        break;
    case 6 : 
        console.log("Vous avancez de six cases");
        break;
    default: console.log("le lancé de dé à échoué");       
}
console.log("***********************************************\n\n\n");

//Attribuer une même fonction à plusieurs résultat
let consommable = "entrecôte";

switch(consommable){
    case "carotte" :
    case "pomme de terre" :
    case "poivron" :
        console.log('Ceci est un légume');
        break;
        
    case "banane" :
    case "tomate" :
    case "pomme" :
        console.log('Ceci est un fruit');
        break;
    default: console.log('Cet aliment n\'est ni un fruit, ni un légume');
}

console.log("***********************************************\n\n\n");


