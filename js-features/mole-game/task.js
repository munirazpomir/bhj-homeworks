let deadMole = document.getElementById("dead");
let lostMole = document.getElementById("lost");
let wins = deadMole.textContent;
let losts = lostMole.textContent;
let getHole = index => document.getElementById(`hole${index}`);

for (let i = 1; i < 10; i ++) {
    getHole(i).onclick = function() {
        if (this.className.includes("hole_has-mole")) {
            wins ++;
            deadMole.textContent = wins;
        } else {
            losts ++;
            lostMole.textContent = losts;
        }
        result(wins, losts);
    }
}

function result (deadMole, lostMole) {
    if (deadMole === 10) {
        alert("Вы выиграли!");
        wins = 0;
        losts = 0;
    } else if (lostMole === 5) {
        alert("Вы проиграли!");
        wins = 0;
        losts = 0;
    }
}
