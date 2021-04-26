let btn = document.getElementById('spoil2');
let hidden = false;
btn.innerHTML = "Afficher"

btn.addEventListener('click', () => {
    selectionner();
})

function selectionner() {
    if (hidden) {
        document.getElementById("spoil").style.display = 'none';
        hidden = false;
        btn.innerHTML = "Afficher"

    } else {
        document.getElementById("spoil").style.display = 'block';
        hidden = true;
        btn.innerHTML = "Cacher"
    }
}