let gameSeq = [];
let userSeq = [];

let color = ["red", "green", "purple", "yellow"];
let started = false;
let level = 0;

let h2 = document.querySelector('h2');

document.addEventListener("keypress", () => {
    if (started == false) {
        started = true;

        levelUp();
    }
});

function buttonFlash(btn) {
    btn.classList.add("flash");
    setTimeout(function () {
        btn.classList.remove("flash");
    }, 250);
}

function levelUp() {
    userSeq=[];
    level++;
    h2.innerText = `Level ${level}`;
    let randIdx = Math.floor(Math.random() * 4);
    let randCol = color[randIdx];
    let randBtn = document.querySelector(`.${randCol}`);
    gameSeq.push(randCol); 

    buttonFlash(randBtn);
}

function userFlash(btn) {
    btn.classList.add("green-col");
    setTimeout(() => {
        btn.classList.remove("green-col");
    }, 250);
}

function checkSeq(idx) {
    if (userSeq[idx] === gameSeq[idx]) {
        if (userSeq.length == gameSeq.length) {
            setTimeout(levelUp, 500);
        }
    } else {
        h2.innerText = `Game Over your score is ${level}.Press any key to Start`;
        reset();
    }
}

function btnPress() {
    let btn = this;
    userFlash(btn);
    userCol = btn.getAttribute("id");
    userSeq.push(userCol);
    checkSeq(userSeq.length - 1);
}

let btns = document.querySelectorAll(".btn");
for (let btn of btns) {
    btn.addEventListener("click", btnPress);
}

function reset() {
    let body = document.querySelector("body");
    body.classList.add("red-col");
    setTimeout(() => {
        body.classList.remove("red-col");
    }, 500);
    userSeq = [];
    gameSeq = [];
    started=false;
    level=0;
}