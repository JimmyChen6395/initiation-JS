/*********************
**** PARTIE 2 bis ****
/*********************/

//Function sans paramètre
function direBonjour() {
    console.log("Hello World");
}

//appel de ma fonction
direBonjour();

//Fonction avec paramètres
function salutation(prénom, nom){
    console.log(`Salut à toi cher ${prénom} ${nom}`);
}

//appel de ma fonction
salutation('Guy', 'Vilain');
salutation('Maximilien', "Coulon");


//Je peux utiliser les paramètres pour effectuer des opérations
function addition(n1, n2){
    let resultat = n1 + n2;//locale
    console.log(`Le résultat de ${n1}+${n2}= ${resultat}`);



}



addition(12, 28);
addition(120, 360);

console.log("******************************************************")

/*********************
****   PARTIE 3   ****
/*********************/

function additionReturn(n1, n2){
    return (n1 + n2);//quand une fonction retourne une valeur, la fonction s'arrête
    console.log("coucou"); //Cette ligne de code ne sera pas éxectuée car ma fonction à déjà retourné une valeur
}

console.log(additionReturn(12, 28));

let nomnbre1 = additionReturn(20, 30);

console.log(nomnbre1);

console.log("******************************************************")

/*********************
****   PARTIE 4   ****
/*********************/

function diviserParDix(n1, n2 = 10){//par défaut, la valeur du second paramètre sera égal à 10
    return n1 / n2;
}

console.log("Divison 100 par 10, nous obtenons :" + diviserParDix(100));

//Si je veux diviser par un autre nombre que ma valeur par défaut
//Je peux alors appeler ma fonction avec deux paramètres:

console.log("Ici je divise 60 par 2 avec la même fonction et le résultat est : " + diviserParDix(60, 2));

console.log("******************************************************")


// prenom l'exemple d'un gâteau qui demade 10' pour le préparer, et 15' pour le cuire
let preparation = 10, cuisson = 15;

//Je crée une fonction cuisiner qui va prendre en paramètre le nombre de gateau
//Le temps de préparation et le temps de cuisson
function cuisiner(nbrGateaux, tmpPreparation, tmpCuisson){
    let resultat = nbrGateaux * (tmpPreparation + tmpCuisson);
    return resultat;
}

//Si je veux cuisiner 4 gâteau, j'appellerai ma fonction de cette manière
console.log("Pour cuisiner 4 gâteaux, j'ai besoin de " + cuisiner(4, preparation, cuisson) + "minutes");

//Autre forme, je fixe dans ma fonction un tmp de préparation et de cuisson par défaut 
//qui sera utilisé:

function cuisiner(nbrGateaux, tmpPreparation = 10, tmpCuisson = 15){
    let resultat = nbrGateaux * (tmpPreparation + tmpCuisson);
    return resultat;
}
//Pour cuisiner mes 5 gâteau, je ferai
console.log("Pour cuisiner 5 gâteaux, j'ai besoin de " + cuisiner(5) + "minutes");

//Si j'ai plusieurs gâteaux différents...
let tmpsGateau = cuisiner(10), tmpsPrepaFraisier = cuisiner(2, 25);

console.log("Pour cuisiner 10 gâteaux, et 2 fraisiers j'ai besoin de " + (tmpsGateau + tmpsPrepaFraisier) + "minutes");

console.log("******************************************************")


/*********************
****   PARTIE 5   ****
/*********************/

//LA PORTEE DES VARIABLES

function wesh(){
    let cris = "Wouaiiiii gros !";//Variable locale n'existe que dans ma fonction
    console.log(cris)
}

wesh();

//console.log(cris)//undefine, ma variable n'existe que dans ma fonction

let cris2 = 'wesh wesh couzin';//Variable globale, je peux l'utiliser partout

function wesh2(){
    cris2 = 'wesh wesh couzine';//Je modifie la variable globale
    console.log(`le cris dans ma fonction est ${cris2}`);//Ma variable est bien modifiée
}

wesh2();

console.log(cris2);//La modification de ma variable s'applique même en dehors de ma fonction


console.log("******************************************************")

let variableLet = "globale";//variable globale en let
var variableVar = "globale";//Variable globale en var

console.log(variableLet);
console.log(variableVar);

if(true) {
  
  let variableLet = "locale";//variable locale en let
  var variableVar = "locale";//Variable locale en var
  
  console.log("let : " + variableLet);//locale
  console.log("var : " + variableVar);//locale
  
}


console.log("let : " + variableLet);//Globale
console.log("var : " + variableVar);//Locale -> ma variable à été impactée par ma condition, on évitera au maximum d'utiliser un var

