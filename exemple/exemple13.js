/******************
**** PARTIE 1  ****
/******************/

function demanderAge(){
    let age = prompt('Quel âge as-tu ?');//Je récupère un string que je peux réutiliser ensuite
    alert('Vous avez ' + age + " ans!");
    //Si je veux ajouter un an à mon utilisateur
    age +=1;
    alert('l\'année prochaine, vous aurez ' + age);
}

demanderAge();

//meme chose mais en transformant le string en nombre grâce à parsInt()

function prevoirage(){
    let age = prompt('Quel âge as-tu ?');
    let nbrage = parseInt(age);//Avec parseInt(), je peux convertir un string en nombre entier
    alert('Bientôt, tu auras ' + (nbrage +1) + ' ans!');//Je peux maintenant correctement manipuler ce nombre entier
};

prevoirage();

//Si je ne travaille pas qu'avec des nombre entier:

function prevoirage2(){
    let age = prompt('Quel âge as-tu ?');
    nbrage = parseFloat(age);
    alert('Bientôt, tu auras ' + (nbrage +1) + ' ans!');
};

prevoirage2();

//plus simplement avec number:

function prevoirage3(){
    let age = prompt('Quel âge as-tu ?');
    nbrage = Number(age);
    alert('Bientôt, tu auras ' + (nbrage +1) + ' ans!');
};

prevoirage3();


//Si à l'inverse, je veux convertir des nombres en string:

let nombre = 45;
let nombreEnString = nombre + "";

// ou encore:

let nombreEnString2 = nombre.toString();

/******************
**** PARTIE 2  ****
/******************/

function test() {
    console.log('Je ne suis pas une fonction anonyme');
};
test();
// Pour appeler une fonction anonyme, je peux par exemple la caler dans une variable:

let fonctionAnonyme = function(){
    console.log('Je suis une fonction anonyme');
};

fonctionAnonyme();

// On peut aussi autoexecuter une fonction anonyme:

(function() { console.log('Je suis une autre fonction anonyme') })(); 
