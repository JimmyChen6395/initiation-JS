let separateur = " : ";
let separateur1 = document.getElementById('separateur').innerHTML = `<span> : </span>`;


function refresh() {
    horloge();
    let div = document.getElementById('horloge');
    div.removeChild(div.firstChild);
    horloge();
    setTimeout(refresh, 1000);
}


function horloge() {
    let d = new Date();
    let heures = `${d.getHours()}`;
    let minutes = `${d.getMinutes()}`;
    let secondes = `${d.getSeconds()}`;
    if (heures < 10) {
        heures = '0' + heures
    }
    if (minutes < 10) {
        minutes = '0' + minutes
    }
    if (secondes < 10) {
        secondes = '0' + secondes
    }
    document.getElementById('horloge').innerHTML = `<p id="test">${heures}${separateur}${minutes}${separateur1}${secondes}</p>`;
}
refresh();