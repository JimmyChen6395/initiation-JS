//1 Supprimer contenu
document.getElementById('a-supprimer').remove();

//2 créer header
let header = document.createElement('header');

//3 Style de mon header
header.style.backgroundColor = '#e3b04b';
header.style.padding = '2em';
header.style.textAlign = 'center';
header.style.color = 'white';

// 4 contenu de mon header
header.innerHTML = '<h1>Bienvenue</h1>';

//5 J'injecte mon header sur la page
document.querySelector('body').prepend(header);

//6 Je crée une nouvelle section
let menu = document.createElement('section');

//7 style de la section
menu.style.backgroundColor = '#f1d6ab';
menu.style.padding = '1em';

//8 contenu de ma section
menu.innerHTML = '<p><a href="#">Acceuil </a> /  <a href="#"> Une autre page</a></p>';

//9. injecter contenu sur la page
document.body.append(menu);

//10. Créer ma section paragraphe
let paragraphe = document.createElement('div');
paragraphe.style.paddingLeft = ('1em');
paragraphe.innerHTML = '<p>Ceci est un paragraphe créé avec Javascript !</p>';

document.body.append(paragraphe);


/*****************************************
 ********  OPTIMISATION DU CODE   ********
 *****************************************/

 //Je pouvais plus simplement créer tout mes élément en js et les ajouter en une fois avec :
/*
 document.body.append(header, menu, paragraphe);*/