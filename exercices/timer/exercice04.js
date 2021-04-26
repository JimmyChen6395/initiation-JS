let btn = document.querySelector('#button');
let secondes = 10;

btn.addEventListener('click', () => {
    start()
})

function start() {
    let timer = setTimeout(() => {
        let p = document.createElement('p');
        p.innerHTML = `${secondes}`
        document.body.append(p);
        decompte()
    }, 350);
}


function decompte() {
    if (secondes != 0) {
        secondes--;
        start()
    } else { stop() }
}


function stop() {
    let p = document.createElement('p');
    p.innerHTML = 'F5 POUR RELANCER';
    document.body.append(p);
}

// -----------------------------------------------------------------------------------

// function start() {
//     let interval = setInterval(decompte, 1000)
//         let p = document.createElement('p');
//         p.innerHTML = '$(secondes)';
//         document.body.append(p);
// }

// ------------------------------------------------------------------------------------




// let btn = document.querySelector('#bouton');
// let secondes = 10;




// btn.addEventListener('click', start);



// function start() {
//     btn.removeEventListener('click', start);
//     let timer = setTimeout(() => {
//         let p = document.createElement('p');
//         p.innerHTML = `${secondes}`
//         document.body.append(p);
//         decompte()
//     }, 1000);
//     console.log(secondes);
// }


// function decompte() {
//     if (secondes != 0) {
//         secondes--;
//         start();
//     } else {
//         stop();
//     }
// }

// function stop() {
//     let p = document.createElement('p');
//     p.innerHTML = `<p> STOP ! </p>`
//     document.body.append(p)
// }