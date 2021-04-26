let mot = "bonjour"
let réponse = "buniojr";

let solution = [];

console.log(mot[0], mot[1]);

//Fonction pour initialiser mon tableau solution

function arraySolution(mot){
    for(i=0; i<=mot.length-1; i++){
        let tiret = "-";
        solution.push(tiret);
    }
}

function checkSolution(mot, réponse){
    for(i=0; i <= mot.length -1; i++){
        if(mot[i] == réponse[i]){
            solution[i] = réponse[i];
        }
    }
}

function checkVictory(mot, réponse){
    let score = 0;
    for(i=0; i <= mot.length -1; i++){
        if(mot[i] == réponse[i]){
            score++;
            console.log(score);
        }

        if(score == mot.length) console.log("gagné");
    }
}

arraySolution(mot)
checkSolution(mot, réponse);
checkVictory(mot, solution);

console.log(solution);

