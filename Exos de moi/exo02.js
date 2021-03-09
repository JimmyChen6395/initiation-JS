// EXO 3

function Kikou() {
    let div = document.getElementById("Croute");
    d = new Date();
    div.innerHTML = "<p>Nous sommes le " + d.getDate() + "/" + (d.getMonth() + 1) + "/" + d.getFullYear()
    "</p>";
}


// EXO 4

function Kekw() {
    let div = document.getElementById('welcome');
    d = new Date();
    let p = div.appendChild(document.createElement("p"));
    p.appendChild(document.createTextNode("On est le " + d.getDate() + "/" + (d.getMonth() + 1) + "/" + d.getFullYear()));
}