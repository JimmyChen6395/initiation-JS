let a = document.getElementById('moderneA');
let button = document.getElementById('moderneB');

a.onclick = () => {
    if (confirm('Êtes-vous sûr ?')) {
        location.href = 'https://google.be'
    };
};

button.onmouseover = () => {
    document.body.style.backgroundColor = 'orange';
};

button.onmouseout = () => {
    document.body.style.backgroundColor = 'white';
    document.body.style.transition = "0.5s";
}



// VERSION ADDEVENTLISTENER

let aa = document.getElementById('moderneAA');
let bb = document.getElementById('moderneBB');

aa.addEventListener('click', () => {
    if (confirm('Êtes-vous sûr ?')) {
        location.href = 'https://google.be'
    };
});

bb.addEventListener('mouseover', () => {
    document.body.style.backgroundColor = 'black';
})

bb.addEventListener('mouseout', () => {
        document.body.style.backgroundColor = 'yellow';
        document.body.style.transition = "0.5s";
    })
    //SUPPRIMER UN EVENEMENT

//Je peux créer une fonction à mettre dans les paramètre de mon écouteur
function colorie() {
    document.body.style.backgroundColor = 'green';
    document.body.style.transition = "0.5s";
}
let bbb = document.getElementById('moderneBBB');

bbb.addEventListener('mouseover', colorie);
// et je retire cet événement:

bbb.removeEventListener('mouseover', colorie);


//INFORMATION SUPPLEMENTAIRE, je peux récupérer la nature 
//de l'action du visiteur en claquant une variable en parametre de ma fonction:
let aaa = document.getElementById('moderneAAA');

aaa.addEventListener('click', (e) => {
    console.log(e);
    console.log(e.type);
});