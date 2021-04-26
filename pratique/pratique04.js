function changeHeure(){
    var span = document.getElementById("horloge");
    while (span.firstChild) span.removeChild(span.firstChild); 
    refresh();
    setTimeout(changeHeure, 1000);
}


function refresh(){
    var span = document.getElementById("horloge");//Je snipe mon id horloge
    var date = new Date();//j'encapsule ma date dans une variable
    var bool = false;//Je crée un boolean pour faire clignoter mes séparateur
    heure = date.getHours();//Capture heure
    minutes = date.getMinutes();//minute
    secondes = date.getSeconds();//seconde


    //Si mon unité seconde est plus petit que 10, je rajoute un zero
    if(heure < 10){
       span.appendChild(document.createTextNode("0"));
       console.log(date.getSeconds);
    }
    //J'affiche heure après le span id horloge
    span.appendChild(document.createTextNode(heure));

    //Je crée un span pour pouvoir colorer mon séprateur d'une autre couleur
    var separateur1 = span.appendChild(document.createElement("span"));
    //Je change la couleur
    separateur1.setAttribute("style", "color: grey");
    //j'affiche mon séparateur
    separateur1.appendChild(document.createTextNode(":"));


    //Si mon unité seconde est plus petit que 10, je rajoute un zero
    if(minutes < 10){
        span.appendChild(document.createTextNode("0"));
        console.log(date.getSeconds);
    }
    //Je crée et affiche à la suite mes minutes
    span.appendChild(document.createTextNode(minutes));

    //Idem séparateur 1
    var separateur2 = span.appendChild(document.createElement("span"));
    separateur2.setAttribute("style", "color:grey");
    separateur2.appendChild(document.createTextNode(":"));

    //Nouveau timeout pour faire clignotter mes séparateur
    setTimeout(()=>{
        //Si mon boolean est faux, je fais disparaitre mes séparateurs
        if(bool === false){
            // separateur1.setAttribute("style", "opacity: 0");
            separateur2.setAttribute("style", "opacity: 0");
            //Je modifie mon boolean
            bool = true;
            console.log("recoucou");
        } else {
        //Si mon boolean est true, je fais apparaître mes séparateurs
            // separateur1.setAttribute("style", "opacity: 1");
            separateur2.setAttribute("style", "opacity: 1");
            bool = false;
        //Je modifie mon boolean
            console.log("coucou");
        }
    }, 500);

    //Si mon unité seconde est plus petit que 10, je rajoute un zero
    if(secondes < 10){
        span.appendChild(document.createTextNode("0"));
        console.log(date.getSeconds);
    }
    //J'affiche mes secondes
    span.appendChild(document.createTextNode(date.getSeconds()));
}