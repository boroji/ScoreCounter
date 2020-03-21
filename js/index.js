let p1 = document.querySelector("#p1");
let p2 = document.querySelector("#p2");
let reset = document.querySelector("#reset");
let input = document.querySelector("input");
let counter1 = document.querySelector("#p1Display");
let counter2 = document.querySelector("#p2Display");
let playingScore = document.querySelector(".flex p span");
let gameOver = false;
let winningScore = 5;
let p1Score = 0;
let p2Score = 0;


p1.addEventListener('click', function () {
    if (!gameOver) {
        p1Score++;
        if (p1Score === winningScore) {
            gameOver = true;
        }
        counter1.textContent = p1Score;
    }  
});

p2.addEventListener('click', function () {
    if (!gameOver) {
        p2Score++;
        if (p2Score === winningScore) {
            gameOver = true;
        }
        counter2.textContent = p2Score;
    }
});

function resetInput() {
    p1Score = 0;
    p2Score = 0;
    counter1.textContent = 0;
    counter2.textContent = 0;
    gameOver = false;
}

reset.addEventListener('click', function() {
    resetInput();
});

input.addEventListener('change', function() {
    playingScore.textContent = input.value;
    winningScore = Number(input.value);
    resetInput();
});