// setTimeout: 1er paramètre = ce que fait la fonction, 
//2eme parametre, le temps d'attente avec le déclenchement de la fonction

// setTimeout("alert('Bonjour')", 3000);

//pour arreter cette fonction on peut utiliser un clearTimeout()

//Ce qui donnerait:

let bonjour = setTimeout(() =>{console.log('bonjour')} , 1000);
//clearTimeout(bonjour);

//SetInterval ma fonction va se répeter toute les x milliseconde
let coucou = setInterval(() =>{console.log('bonjour coucou')} , 3000);
setTimeout("clearInterval(coucou)", 25000);

