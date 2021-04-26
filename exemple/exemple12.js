/******************
**** PARTIE 1  ****
/******************/

//Boite de dialogue alert()
alert("Ceci est ma première alerte javascript\nHELLO WORLD!!!!!");

//boite de confirmation
confirm("Êtes-vous certain de vouloir faire ça???");

//EXEMPLE D'UTILISATION AVEC UNE CONDITION
let confirmation  = confirm("Voulez-vous vous faire insulter?"); 

if(confirmation == true){
    document.write("<h1>Espèce de pignouf va !</h1>");
} else if (confirmation == false){
    document.write("<h1>Je préfère cela aussi, le respect est important ici!!!</h1>");
}

//Demander une information à un utilisateur
prompt("Quel âge avez-vous?");

//Je peux stocker l'information de l'utilisateur dans une variable pour l'utiliser plus tard
//dans mon programme:

let âge = prompt("Quel âge avez-vous?");
document.write("<h2>Vous avez " + âge + "ans!</h2>");
document.write(`<h3>Vous avez ${âge} ans`);



