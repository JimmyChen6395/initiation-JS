// LES VARIABLES DU JEU

let mot = "bonjour";
let tableauLettre = ['-', '-', '-', '-', '-', '-', '-'];
let score = 10;
let lettreJoueur = "";
let trouvé = false;


//fonction pour demander entrée utilisateur
function choisirLettre() {
    lettreJoueur = prompt(`le mot à trouver est ${tableauLettre.join(" ")}\nIl reste ${score} essais, \nChoisissez une lettre`)
    vérifierLettre(lettreJoueur);
}


//fonction pour vérifier si la lettre entrée par le user se trouve dans mon mot
function vérifierLettre(x) {

    for (i = 0; i <= 6; i++) {

        if (mot[i] == x) {
            trouvé = true;
            tableauLettre[i] = x;
        }
    }
    if (trouvé == false) {
        score--;
    }
    checkTableau();

}

//fonction pour véridier si toutes les lettres ont été trouvées ou si le score == O
function checkTableau() {
    trouvé = false;
    if (score == 0) {
        alert(`Vous avez perdu, le mot à trouver était ${mot}`);
    } else {
        let reponse = 0;
        for (i = 0; i < tableauLettre.length; i++) {
            if (tableauLettre[i] != '-') {
                reponse++;
            }
        }

        if (reponse == mot.length) {
            alert(`Bravo, vous avez gagané, le momt à trouver était bien ${mot}`);
        } else {
            choisirLettre();
        }
    }
}

choisirLettre();




// for (i = 0; i <= 6; i++) {

//     if(mot[i] == lettreJoueur[i]){
//         tableauLettre[i] = lettreJoueur;
//     }
// }