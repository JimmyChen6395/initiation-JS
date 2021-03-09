let nom = prompt("Quel est votre nom ?")
let prenom = prompt("Quel est votre prénom")
let adresse = prompt("Quel est votre adresse ?")
let cp = prompt("Quel est votre code postal ?")
let ville = prompt("Quel est votre ville ?")
let age = prompt("Quel est votre âge ?")
let taille = prompt("Quel est votre taille ?")
let poids = prompt("Quel est votre poids ?")
let imc = Math.round(poids / taille ** 2)



function box() {
    let div = document.getElementById('container');
    let p = div.appendChild(document.createElement("p"));
    p.appendChild(document.createTextNode(`Nom : ${nom} - Prénom : ${prenom} Adresse : ${adresse} Code postal : ${cp} - Ville : ${ville} Age : ${age} Taille : ${taille}m + Poids ${poids}kg Indice de Masse Corporelle ${imc}`));
}