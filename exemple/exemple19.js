/******************
**** PARTIE 1  ****
/******************/
//Je récupère les différents noeuds de ma page html

//je snipe la balise header
let header = document.getElementsByTagName('header');
console.log(header);
let paragraphe = document.getElementsByTagName('p');
console.log(paragraphe);

//Je snipe un ID
let logo = document.getElementById('logo');
console.log(logo);

//Je snipe une classe:
let container = document.getElementsByClassName('container');
console.log(container);
console.log('*************************************\n\n');


//Le queryselector me permet de selectionner aussi bien une balise, qu'un Id ou qu'une classe:
let h1 = document.querySelector('h1');
let container2 = document.querySelector('.container');
let logo2 = document.querySelector('#logo');

console.log(h1);
console.log(container2);
console.log(logo2);
console.log('*************************************\n\n');


//queryselectorAll me permet de sniper tout les éléments identifié présent sur la page:
let p = document.querySelectorAll('p');
console.log(p);
console.log(p.length);
console.log(p[0]);


/******************
**** PARTIE 2  ****
/******************/


/***************************
 ****  MODIFIER LE DOM  ****
 **************************/

//Changer le contenu d'une balise h1 snipée plus haut!
h1.textContent = 'Hello le monde !!!!';

//Rajouter du contenu html
h1.innerHTML = '<h2 style="color: red">Nouveau texte</h2>';

/******************
**** PARTIE 3  ****
/******************/
//Ajouter des élément au DOM (3 méthodes)
//1. Ecrire du texte:
document.write('test');//rajoute ce contenu à la fin de la page

//2. Ajouter un élément brut (je vais pouvoir choisir ou ajouter cet élément)
h1.append('append rajoute du contenu avant mon h1');//Je rajoute ce contenu après mon h1

//3. ajout code HTML
//créer l'élément
let helloWorld = document.createElement('div');

//personaliser l'élément

helloWorld.textContent = 'Hello World 2 !!!';
//j'ajouter à la page(4 manières de procéder)

//A) le Append
let helloWorld2 = 'helloWorld3***'
document.body.append(helloWorld2);

//B) AppendChild (ATTENTION juste des variable avec appenchild, pas de texte)
let autreText = 'Ceci est un autre texte $$$';
document.body.appendChild(helloWorld);


//C) Ajouter avant un élément
let nouveauTexte = 'Ceci est un nouveau texte !!!';

//avant l'objet HelloWorld créé avant, je vais ajouter du contenu
document.body.insertBefore(helloWorld, document.querySelector('.container'));

document.querySelector('.container').prepend(nouveauTexte);

/*

///TEST
//Je crée mon élément à insérer
let message = document.createElement('div');
//Je construit le contenu que je veux insérer
message.innerHTML = '<p>c\'était vraiment très intéréssant</p>';
//et j'insère avant mon container
document.querySelector('.container').prepend(message);

/******************
**** PARTIE 4  ****
/******************/
//Supprimer un élément du DOM
//1° Méthode longue
let aSupprimer = document.querySelector('.premier');
aSupprimer.remove();

//2° Methode courte
document.querySelector('.second').remove();


/******************
**** PARTIE 5  ****
/******************/
/*****************************************
 ***   CHANGER LE STYLE D'UN ELEMENT   ***
 *****************************************/

 //1° Methode décomposée 

 //Je selectionne mon header pour changer son background

 let bkgHeader = document.querySelector('header');

 //Je change le background
 bkgHeader.style.backgroundColor = '#ffbd69';

 //2° Methode directe
document.querySelector('h1').style.color = 'red';
document.querySelector('h1').style.textAlign = 'center';

//3° Ajouter une classe!!!!

document.querySelector('h1').className('.troisiemeMethode');