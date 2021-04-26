//Local Storage = stocké dans le navigateur, peut être récupéré quand celui ci est fermé

//Session storage = stocké uniquement pour être utilisée durant la session

//SetItem[clé], [valeur]
//getItem[clé]
//RemoveItem[clé]
//clear() //Effacer
//key[index]: obtenir clé située à l'index
//length : obtenir le nombre d'éléments stocké
let envoyer = document.querySelector('#envoyer')
let tache = document.querySelector('#tache');
let tailleStorage = localStorage.length;
console.log(tailleStorage);


//Poser mon évement lié au formulaire
envoyer.addEventListener('submit', (e) => {
    e.preventDefault();
    if(tache.value == ""){
        tache.style.borderColor = "red";
    } else {
        if(tailleStorage == 0){
            localStorage.setItem(tailleStorage, tache.value);
        } else{
            localStorage.setItem(tailleStorage + 1, tache.value);
            afficherStorageConsole();
        }
        
    }
})

function afficherStorageConsole(){
    console.log(`j'ai ${localStorage.length} élements dans mon local storage`);
    for(i=0; i<= tailleStorage; i++){
        console.log(localStorage.getItem(i));
    }
}
