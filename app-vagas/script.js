// const vagas = document.querySelector('.vagas');
// const vagasContainer = document.querySelector('.vagas-container');
// let isDown = false;
// let startX;
// let scrollLeft;

// vagas.addEventListener('mousedown', e => {
//   isDown = true;
//   startX = e.pageX - vagas.offsetLeft;
//   scrollLeft = vagas.scrollLeft;
// });

// vagas.addEventListener('touchstart', e => {
//   isDown = true;
//   startX = e.touches[0].pageX - vagas.offsetLeft;
//   scrollLeft = vagas.scrollLeft;
// });

// vagas.addEventListener('mouseleave', () => {
//   isDown = false;
// });

// vagas.addEventListener('mouseup', () => {
//   isDown = false;
// });

// vagas.addEventListener('touchend', () => {
//   isDown = false;
// });

// vagas.addEventListener('mousemove', e => {
//   if (!isDown) return;
//   e.preventDefault();
//   const x = e.pageX - vagas.offsetLeft;
//   const walk = (x - startX) * 3; // Multiplicando por 3 para aumentar a sensibilidade do movimento
//   vagas.scrollLeft = scrollLeft - walk;
// });

// vagas.addEventListener('touchmove', e => {
//   if (!isDown) return;
//   e.preventDefault();
//   const x = e.touches[0].pageX - vagas.offsetLeft;
//   const walk = (x - startX) * 3;
//   vagas.scrollLeft = scrollLeft - walk;
// });

const red = document.getElementById('red');
const blue = document.getElementById('blue');
const yellow = document.getElementById('yellow');
const green = document.getElementById('green');
const orange = document.getElementById('orange');
const white = document.getElementById('white');


function chooseRed(){
    red.style.display = "block"
    yellow.style.display = "none";
    blue.style.display = "none";
    green.style.display = "none";
    orange.style.display = "none";
    white.style.display = "none";
}

function chooseBlue(){
    red.style.display = "none"
    yellow.style.display = "none";
    blue.style.display = "block";
    green.style.display = "none";
    orange.style.display = "none";
    white.style.display = "none";
}

function chooseYellow(){
    red.style.display = "none"
    yellow.style.display = "block";
    blue.style.display = "none";
    green.style.display = "none";
    orange.style.display = "none";
    white.style.display = "none";
}

function chooseGreen(){
    red.style.display = "none"
    yellow.style.display = "none";
    blue.style.display = "none";
    green.style.display = "block";
    orange.style.display = "none";
    white.style.display = "none";
}

function chooseOrange(){
    red.style.display = "none"
    yellow.style.display = "none";
    blue.style.display = "none";
    green.style.display = "none";
    orange.style.display = "block";
    white.style.display = "none";
}

function chooseWhite(){
    red.style.display = "none"
    yellow.style.display = "none";
    blue.style.display = "none";
    green.style.display = "none";
    orange.style.display = "none";
    white.style.display = "block";
}




