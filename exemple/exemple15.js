/******************
**** PARTIE 1  ****
/******************/

let i = 1;

while (i <= 10){
    console.log("Ligne: " + i + ".");
    i++;//J'icrémente ma variable pour permettre la sortie de boucle
}
console.log("***********************************************\n\n\n");

/******************
**** PARTIE 2  ****
/******************/

let a = 1;
do {
    console.log('ceci est la phrase: ' + a);
    a++
} while (a <= 0);//La condition de sortie est déjà remplie, ma boucle s'execute 1X

console.log("***********************************************\n\n\n");

/**********************
**** Challenge 03  ****
/**********************/

/*
    demander a votre utilisateur de rentrer son nom, puis son prénom.
    si l'utilisateur ne réponds rien ou abandonne la question, recommencer l'opération ad vitaëm

*/

// let prenom;
// do{
//    prenom = prompt('Quel est votre prenom ?');
// } while (prenom == '' || prenom == null);
//Ici je recommence la boucle tant que l'utilisateur appuie sur ok sans entrer quoi que ce soit ou si il clic sur annuler

//Ensuite je peux continuer mon script

// alert('Bonjour ' + prenom);

// console.log("***********************************************\n\n\n");


// //Je pourrai aussi faire de prenom une variable globale en utilisant var à l'interieur de ma boucle:

// do{
//    var nom = prompt('Quel est votre nom ?');
// } while (nom == '' || nom == null);

// alert('bonjour ' + nom + " " + prenom);

// console.log("***********************************************\n\n\n");



/******************
**** PARTIE 3  ****
/******************/

//boucle for

for(i = 0; i<= 10; i++){
    console.log('ceci est la ligne for: ' + i);
}
console.log("***********************************************\n\n\n");



//utiliser le break me permet de d'arrêter une boucle à un moment précis.

a = 0;

while (a <= 10) {
    if (a == 6) {
        break;
    }
    console.log('enfin ceci est la phrase: ' + a);
    a++;
}



//Utiliser continue, va me permettre de sauter une itération sans exécuter complétement ma boucle

let b = 0;

while ( b <= 10){
    if (b == 5){
        //ATTENTION, quand j'utilise continue, je vais passer à l'itération suivante, mais b vaudra toujours 5
        //Je dois donc incrémenter b avant de donner mon instruction continue, sinon boucle infinie
        b++;
        continue;
    }
    console.log('ceci est la phrase: ' + b + ' de la boucle continue.');
    b++;
}

console.log("***********************************************\n\n\n");


/******************
**** PARTIE 4  ****
/******************/

//les exceptions

try {
    //J'execute tout le code qui se trouve à l'intérieur de try et si je trouve une erreur, je l'envoie dans une variable 'error'(catch(error))
    alert(hello);
} catch (error) {
    //Je peux ensuite afficher l'erreur qui a été detectée
    console.log(error);
    //Je peux filtrer aussi le contenu de cette erreur:
    console.log(error.name);
    console.log(error.message);
    console.log(error.stack);
    //Au final, je peux afficher à l'utilisateur un message personnalisé:
    alert('la variable \'hello\' n\'existe pas')
    //Si je fais un console.error à la place d'une console.log, l'information sera affichée en rouge dans ma console.
    console.error(error);
}

console.log("***********************************************\n\n\n");


/**********************
**** Challenge 03  ****
/**********************/

/*Dans un jeu vidéo, le joueur gagne un level et se voit proposer
une nouvelle arme pour le recompenser.
Il aura le choix entre une épée, une hache ou un arc.
demander le choix au joueur et vérifier à l'aide d'un switch si la chaîne de caractère qu'il rentre
 correspond à une des armes citées. 
 Si le joueur choisi 
 une hache, il fera alors 45points de dégats
une épée 40 points de dégats
un arc 25 points de dégats
si le joueur se trompe provoquer une erreur et l'afficher avec une boite de dialogue.
quand tout est executé, afficher une boite de diaologue pour annoncer la fin du jeu.

*/

//mise en pratique:

// Dans un jeux vidéo, le joueur reçois une récompense qu'il peut choisir:

try {
    let recompense = prompt('Choisissez une récompense: épée, arc ou hache ?');
    let degats;

    switch (recompense) {
        case 'épée':
            degats = 40;
            break;
        case 'arc' : 
            degats = 25;
            break;
        case 'hache' :
            degats = 45;
            break;
            //Pour empêcher mon joueur de choisir une autre arme que celles autorisées, je peux créer un nouvel objet error par défaut dans mon switch
        default :
            throw new Error('L\'arme choisie n\'est pas autorisée.');
    }
    alert('Vous avez choisi ' + recompense + '; vous ferez ' + degats + ' de dégats.');
} catch (e) {
    //ici, j'affiche mon erreur personnalisée
    alert(e);
    //Je peux aussi créer un dernier bloc 'finally' dont le contenu sera exécuté qu'il y ait une erreur ou pas !
} finally {
    alert('le jeu est terminé');
};

