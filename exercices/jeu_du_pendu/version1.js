//LES VARIABLES DU JEU

let mot = "bonjour";
let tableauLettre = ['-', '-', '-', '-', '-', '-', '-'];
let score = 10;
let lettreJoueur = "n";
let trouvé = false;

//Fonction pour demander entrée user
function choisirLettre(){
    //prompt pour assigner la valeur entrée par le user dans la variable lettreJoueur
    lettreJoueur = prompt(`le mot à trouver est ${tableauLettre.join(" ")}\nIl vous reste ${score} essais, \nChoisissez une lettre`);
    //J'appelle ma fonction VérifierLettre avec en paramètre la variable qui a accueilli
    //l'entrée du user
    vérifierLettre(lettreJoueur);
}

// Fonction pour vérifier si la lettre entrée par le user se trouve dans mon mot
function vérifierLettre(x){
    //Boucle pour parcourir chacun des index de la variable mot (une chaine de caractère se parcoure
    //de la même manière qu'un tableau)
    for(i = 0; i <= 6; i++){
        //Si la lettre contenue à l'index i de mon mot == à la lettre envoyée par le user
        //(x = paramètre de ma fonction qui a récupéré la variable lettreJoueur lors de son appel en ligne 15)
        if(mot[i] == x){
            //Je change mon boolean en true pour éviter de décrémenter mon score
            trouvé = true;
            //J'assigne à l'index i de mon tableau de lettre la valeur donnée par le joueur
            tableauLettre[i] = x;
        }
    }
    //Je vérifie si trouvé est resté sur false ou s'il a changé de valeur. Si c'est le cas, 
    //au moins une lettre à été trouvée, le score ne change pas. Si le bolean est resté sur false
    //Aucune lettre n'a été trouvée ==> score --
    if(trouvé == false){
        score--;
    }
    checkTableau();
}


//Fonction pour vérifier si toutes les lettres ont été trouvées ou si le score == 0
function checkTableau(){
    //Je réinitialise le boolean trouvé sur false pour le prochain tour de jeu.
    trouvé = false;
    if(score == 0){
        alert(`Vous avez perdu, le mot à trouver était ${mot}`);
    }else{
        let reponse = 0;
        for(i = 0; i < tableauLettre.length; i++){
            if(tableauLettre[i] != '-'){
                reponse++;
            }
        }
        if(reponse == mot.length){
            alert(`Bravo, vous avez gagné, le mot à trouver était bien ${mot}`);
        } else {
            choisirLettre();
        }
    }
}

choisirLettre();

//Je crée une boucle pour parcourir
// for(i = 0; i <= 6; i++){
//     console.log(mot[i]);
//     console.log(tableauLettre[i]);
//     if(mot[i] == lettreJoueur){
//         tableauLettre[i] = lettreJoueur;
//     }
// }
// console.log(tableauLettre);
