let music = new Audio("./audio/music.mp3");
let audioturn = new Audio("./audio/turn.mp3");
let gameover = new Audio("./audio/Gameover.mp3");
let turn = "X";
let isGameOver = false;
//function to change turn
const changeTurn = () => {
     if(turn==="X") turn="0";
     else turn="X";
    return turn;
}
//function to check win
const checkWin = () => {
    let boxtext = document.getElementsByClassName('boxtext');
    let wins = [
        [0, 1, 2,0,32,0],
        [3, 4, 5,0,96,0],
        [6, 7, 8,0,160,0],
        [0, 3, 6,-64,96,90],
        [1, 4, 7,0,96,90],
        [2, 5, 8,64,96,90],
        [0, 4, 8,0,96,45],
        [2, 4, 6,0,96,135]
    ]
    wins.forEach(e => {
        if ((boxtext[e[0]].innerText === boxtext[e[1]].innerText )&& (boxtext[e[1]].innerText === boxtext[e[2]].innerText) && (boxtext[e[0]].innerText !== "")) {
            document.querySelector('.info').innerText = boxtext[e[0]].innerText + " Won";
            isGameOver = true;
            document.getElementsByClassName("img1")[0].style.width="50px";

            document.querySelector(".line").style.visibility="visible";
            document.querySelector(".line").style.transform = ` translate(${e[3]}px,${e[4]}px) rotate(${e[5]}deg)`;
            document.querySelector(".line").style.width="30vw";
            document.querySelector(".line").style. transition="width 1s ease-in-out";
        }
        else {
            isGameOver = false;
        }
    })
}
// music.play();
// game logic
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element => {
    let boxtext = element.querySelector('.boxtext');
    element.addEventListener('click', () => {

        if (boxtext.innerText === '') {
            boxtext.innerText = turn;
            turn = changeTurn();
            audioturn.play();
            checkWin();
            if (!isGameOver) {
                document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
            }
        }
    })
})

reset1.addEventListener('click',()=>{
    let boxtext = document.getElementsByClassName('boxtext');

    Array.from(boxtext).forEach(e=>{
        e.innerText = '';
      })
    turn="X";
    isGameOver=false;
    document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
    document.getElementsByClassName("img1")[0].style.width="0px";
    document.querySelector(".line").style.visibility="hidden";
})