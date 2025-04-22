let gameseq = [];
let userseq = [];
let btns = ["yellow", "red", "purple", "green"];

let started = false;

let level = 0;
let h2 = document.querySelector("h2");

document.addEventListener("keypress", function () {
    if (started == false) {

        console.log("game started");
        started = true;
        levelUp();
    }
});
function gameFlash(btn) {
    btn.classList.add("flash");
    setTimeout(function () {
        btn.classList.remove("flash");
    }, 250);
}

function userFlash(btn) {
    btn.classList.add("userflash");
    setTimeout(function () {
        btn.classList.remove("userflash");
    }, 250);
}
function levelUp() {
    userseq = [];
    level++;
    h2.innerText = `level ${level}`;
    let randIdx = Math.floor(Math.random() * 4);
    let randcolor = btns[randIdx];
    let randbtn = document.querySelector(`.${randcolor}`);
    //    console.log (randIdx);
    //    console.log(randcolor);
    //    console.log(randbtn);
    gameseq.push(randcolor);
    console.log(gameseq);
    gameFlash(randbtn);
}

function checkAns(idx) {
    // console.log("curr level :",level);
    // let idx = level - 1;
    if (userseq[idx] === gameseq[idx]) {
        // console.log("same value");
        if (userseq.length == gameseq.length) {
            setTimeout(levelUp, 1000);
        }

    }
    else {
        h2.innerHTML = `Game over! Your Score Was <b>${level}</b>  <br> Press Any Key to Start.`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function () {
        document.querySelector("body").style.backgroundColor = "white";
        }, 150);


        reset();

    }
}

function btnPress() {
    console.log(this);
    let btn = this;
    userFlash(btn);
    usercolor = btn.getAttribute("id");
    console.log(usercolor);
    userseq.push(usercolor);

    checkAns(userseq.length - 1);

}
let allbtn = document.querySelectorAll(".btn");
for (btn of allbtn) {
    btn.addEventListener("click", btnPress)
}
function reset() {
    started = false;
    gameseq = [];
    userseq = [];
    level = 0;
}