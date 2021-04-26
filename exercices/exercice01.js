// console.log("coucou");

let nom = prompt("Quel est votre nom ?");
let prénom = prompt("Quel est votre prénom ?");
let age = prompt("Quel âge avez-vous ?");
let urlPhoto = prompt("Lien d'une photo de vous sur le net ?");
let rue = prompt("Quel est le nom de votre rue ?");
let numéro = prompt("Quel est le numéro de votre habitation ?");
let codePostal = prompt("Quel est votre code postal ?");
let localité = prompt("Votre localité ? ")
let taille = prompt("Quel est votre taille en mètre ?");
let poids = prompt("Combien pesez-vous ?");

// let nom = "Carey";
// let prénom = "Maria";
// let age = 51;
// let rue = "Roc Nation LLC";
// let numéro = 953;
// let codePostal = "CA 90038";
// let localité = "Los Angeles"
// let taille = 1.75;
// let poids = 66;
// let urlPhoto = "https://media.vanityfair.com/photos/5f1060c4345d8ab7a6f2b1a1/9:16/w_746,h_1327,c_limit/mariah.jpg";

function imc(taille, poids){
    let imc = poids / (taille * taille);
    return imc;
}

let résultatImc = imc(taille, poids).toFixed(2);

let container = document.getElementById("container");

container.innerHTML = `
<div class="content">
    <div class="description">
        <p>Nom: ${nom} - Prénom: ${prénom}</p>
        <p>Adresse: ${rue}, ${numéro}</p>
        <p>Code Postal: ${codePostal} - ${localité}</p>
        <p>Age: ${age} - Taille: ${taille}m + Poids: ${poids}</p>
        <p>Indice de masse corporelle: ${résultatImc}</p>
    </div>
    <div class="photo">
        <img src="${urlPhoto}" alt="Maria Carey"/>
    </div>
</div>`;




