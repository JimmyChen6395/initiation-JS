//Je déclare le mot à trouver
let mot = "bonjour";
//Je simule l'entrée d'un lettre que le joueur aura tapée durant le premier tous
let entréeUser = "b";
//Variable qui acceuillera mon tableau contenant un tiret pour les lettres à trouver
//et les lettres déjà trouvées par le user
let lettreTrouvée = [];

//je vais remplir mon tableau d'une valeur "-" pour chaque lettre à trouver
//pour cela j'utilise une boucle for (théorie dans les slides 56 à 59 du cours)
for( i = 0; i<= (mot.length -1); i++){
    lettreTrouvée.push('-');
}

//J'affiche le contenu de mon tableau pour vérifier que c'est correct
console.log(lettreTrouvée);

//demander à mon user de rentrer une lettre.

//Une variable chaine de caractère se comporte de la même manière qu'un tableau
//chaque lettre est stockée dans l'index de la chaine de caractère et je peux donc 
//parcourir cette chaine avec une boucle

/*Je crée une boucle qui va se répéter tant que i sera plus petit ou égale
à la taille de mon (mot à trouver -1)
*/
for( i = 0; i<= (mot.length -1); i++){
    //vérifie si entréeUser == mot[i];
    //A chaque itération de ma boucle, je vais vérifer si la lettre entrée par le joueur
    //est == à la lettre incluse dans mon mot
    if(entréeUser == mot[i]){
        //si c'est le cas, j'envoie la lettre trouvée dans mon tableau
        //A l'index ou se trouve ma boucle
        lettreTrouvée[i] = entréeUser;
    }
}

//J'affiche mon tableau pour vérifier que la/les lettres trouvées ont bien été injectée
//dedans
console.log(lettreTrouvée);

