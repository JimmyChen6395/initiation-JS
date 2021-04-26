//demander au user d'introduire une chaine de caractère.
//Envoyer cette chaine de caractère dans un tableau
//redemander si le user veut entrer une nouvelle donnée dans le tableau.
/* si user ok --> recommence
Si user !ok --> on arrete et on affiche en console, le contenu du tableau*/

let tableau = [];

do{
    let donnée = prompt("insérer une donnée dans le tableau");
    tableau.push(donnée);
}while(confirm('entrer une autre donnée?'));
alert('allez voir en console le contenu de votre tableau');
console.log(tableau);