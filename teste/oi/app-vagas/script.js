const red = document.getElementById('red');
const blue = document.getElementById('blue');
const yellow = document.getElementById('yellow');
const black = document.getElementById('black');
const orange = document.getElementById('orange');
const white = document.getElementById('white');


function chooseRed(){
    red.style.display = "block"
    yellow.style.display = "none";
    blue.style.display = "none";
    black.style.display = "none";
    orange.style.display = "none";
    white.style.display = "none";
}

function chooseBlue(){
    red.style.display = "none"
    yellow.style.display = "none";
    blue.style.display = "block";
    black.style.display = "none";
    orange.style.display = "none";
    white.style.display = "none";
}

function chooseYellow(){
    red.style.display = "none"
    yellow.style.display = "block";
    blue.style.display = "none";
    black.style.display = "none";
    orange.style.display = "none";
    white.style.display = "none";
}

function chooseBlack(){
    red.style.display = "none"
    yellow.style.display = "none";
    blue.style.display = "none";
    black.style.display = "block";
    orange.style.display = "none";
    white.style.display = "none";
}

function chooseOrange(){
    red.style.display = "none"
    yellow.style.display = "none";
    blue.style.display = "none";
    black.style.display = "none";
    orange.style.display = "block";
    white.style.display = "none";
}

function chooseWhite(){
    red.style.display = "none"
    yellow.style.display = "none";
    blue.style.display = "none";
    black.style.display = "none";
    orange.style.display = "none";
    white.style.display = "block";
}




