const red = document.getElementById('red');
const blue = document.getElementById('blue');
const yellow = document.getElementById('yellow');
const black = document.getElementById('black');
const orange = document.getElementById('orange');
const white = document.getElementById('white');
const input = document.getElementById('input');

function chooseRed(){
    red.style.display = "block"
    yellow.style.display = "none";
    blue.style.display = "none";
    black.style.display = "none";
    orange.style.display = "none";
    white.style.display = "none";
    input.value = "red";
}

function chooseBlue(){
    red.style.display = "none"
    yellow.style.display = "none";
    blue.style.display = "block";
    black.style.display = "none";
    orange.style.display = "none";
    white.style.display = "none";
    input.value = "blue";
}

function chooseYellow(){
    red.style.display = "none"
    yellow.style.display = "block";
    blue.style.display = "none";
    black.style.display = "none";
    orange.style.display = "none";
    white.style.display = "none";
    input.value = "yellow";
}

function chooseBlack(){
    red.style.display = "none"
    yellow.style.display = "none";
    blue.style.display = "none";
    black.style.display = "block";
    orange.style.display = "none";
    white.style.display = "none";
    input.value = "black";
}

function chooseOrange(){
    red.style.display = "none"
    yellow.style.display = "none";
    blue.style.display = "none";
    black.style.display = "none";
    orange.style.display = "block";
    white.style.display = "none";
    input.value = "orange";
}

function chooseWhite(){
    red.style.display = "none"
    yellow.style.display = "none";
    blue.style.display = "none";
    black.style.display = "none";
    orange.style.display = "none";
    white.style.display = "block";
    input.value = "white";
}

function load2(){
    const loading = document.getElementById("loading");
    loading.style.display = "flex";
    window.location.href = `../agendamento/vagas/?color=${input.value}`;
  
}



