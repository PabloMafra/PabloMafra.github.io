const database = firebase.database();
const vagaRef1 = database.ref('vagas/vaga1');
const vagaRef2 = database.ref('vagas/vaga2');
const vagaRef3 = database.ref('vagas/vaga3');
const vagaRef4 = database.ref('vagas/vaga4');
const vagaRef5 = database.ref('vagas/vaga5');
const vagaRef6 = database.ref('vagas/vaga6');
const vagaRef7 = database.ref('vagas/vaga7');
const vagaRef8 = database.ref('vagas/vaga8');
const vagaRef9 = database.ref('vagas/vaga9');
const vagaRef10 = database.ref('vagas/vaga10');

vagaRef1.on('value', (snapshot) => {
  const vagaData = snapshot.val();
if(vagaData === "ocupado"){
  const span1 = document.getElementById("1");
  const img1 = document.getElementById("img1");
  span1.style.display = "none";
  img1.style.display = "initial";
}
});


vagaRef2.on('value', (snapshot) => {
  const vagaData = snapshot.val();
if(vagaData === "ocupado"){
  const span2 = document.getElementById("2");
  const img2 = document.getElementById("img2");
  span2.style.display = "none";
  img2.style.display = "initial";
}
});


vagaRef3.on('value', (snapshot) => {
  const vagaData = snapshot.val();
if(vagaData === "ocupado"){
  const span3 = document.getElementById("3");
  const img3 = document.getElementById("img3");
  span3.style.display = "none";
  img3.style.display = "initial";
}
});


vagaRef4.on('value', (snapshot) => {
  const vagaData = snapshot.val();
if(vagaData === "ocupado"){
  const span4 = document.getElementById("4");
  const img4 = document.getElementById("img4");
  span4.style.display = "none";
  img4.style.display = "initial";
}
});


vagaRef5.on('value', (snapshot) => {
  const vagaData = snapshot.val();
if(vagaData === "ocupado"){
  const span5 = document.getElementById("5");
  const img5 = document.getElementById("img5");
  span5.style.display = "none";
  img5.style.display = "initial";
}
});


vagaRef6.on('value', (snapshot) => {
  const vagaData = snapshot.val();
if(vagaData === "ocupado"){
  const span6 = document.getElementById("6");
  const img6 = document.getElementById("img6");
  span6.style.display = "none";
  img6.style.display = "initial";
}
});


vagaRef7.on('value', (snapshot) => {
  const vagaData = snapshot.val();
if(vagaData === "ocupado"){
  const span7 = document.getElementById("7");
  const img7 = document.getElementById("img7");
  span7.style.display = "none";
  img7.style.display = "initial";
}
});


vagaRef8.on('value', (snapshot) => {
  const vagaData = snapshot.val();
if(vagaData === "ocupado"){
  const span8 = document.getElementById("8");
  const img8 = document.getElementById("img8");
  span8.style.display = "none";
  img8.style.display = "initial";
}
});


vagaRef9.on('value', (snapshot) => {
  const vagaData = snapshot.val();
if(vagaData === "ocupado"){
  const span9 = document.getElementById("9");
  const img9 = document.getElementById("img9");
  span9.style.display = "none";
  img9.style.display = "initial";
}
});


vagaRef10.on('value', (snapshot) => {
  const vagaData = snapshot.val();
if(vagaData === "ocupado"){
  const span10 = document.getElementById("10");
  const img10 = document.getElementById("img10");
  span10.style.display = "none";
  img10.style.display = "initial";
}
});


function confere1(){
const database = firebase.database();
const vagaRef = database.ref('vagas/vaga1');

vagaRef.on('value', (snapshot) => {
const vagaData = snapshot.val();
if(vagaData === "livre"){
vagaRef.set("ocupado");
window.location.href = "../"
}else{

}
});
}
  
function confere2(){
const database = firebase.database();
const vagaRef = database.ref('vagas/vaga2');

vagaRef.on('value', (snapshot) => {
const vagaData = snapshot.val();
if(vagaData === "livre"){
vagaRef.set("ocupado");
window.location.href = "../"
}
});
}
  
function confere3(){
const database = firebase.database();
const vagaRef = database.ref('vagas/vaga3');

vagaRef.on('value', (snapshot) => {
const vagaData = snapshot.val();
if(vagaData === "livre"){
vagaRef.set("ocupado");
window.location.href = "../"
}
});
}
  
function confere4(){
const database = firebase.database();
const vagaRef = database.ref('vagas/vaga4');

vagaRef.on('value', (snapshot) => {
const vagaData = snapshot.val();
if(vagaData === "livre"){
vagaRef.set("ocupado");
window.location.href = "../"
}
});
}
  
function confere5(){
const database = firebase.database();
const vagaRef = database.ref('vagas/vaga5');

vagaRef.on('value', (snapshot) => {
const vagaData = snapshot.val();
if(vagaData === "livre"){
vagaRef.set("ocupado");
window.location.href = "../"
}
});
}
  
function confere6(){
const database = firebase.database();
const vagaRef = database.ref('vagas/vaga6');

vagaRef.on('value', (snapshot) => {
const vagaData = snapshot.val();
if(vagaData === "livre"){
vagaRef.set("ocupado");
window.location.href = "../"
}
});
}
  
function confere7(){
const database = firebase.database();
const vagaRef = database.ref('vagas/vaga7');

vagaRef.on('value', (snapshot) => {
const vagaData = snapshot.val();
if(vagaData === "livre"){
vagaRef.set("ocupado");
window.location.href = "../"
}
});
}
  
function confere8(){
const database = firebase.database();
const vagaRef = database.ref('vagas/vaga8');

vagaRef.on('value', (snapshot) => {
const vagaData = snapshot.val();
if(vagaData === "livre"){
vagaRef.set("ocupado");
window.location.href = "../"
}
});
}
  
function confere9(){
const database = firebase.database();
const vagaRef = database.ref('vagas/vaga9');

vagaRef.on('value', (snapshot) => {
const vagaData = snapshot.val();
if(vagaData === "livre"){
vagaRef.set("ocupado");
window.location.href = "../"
}
});
}
  
function confere10(){
const database = firebase.database();
const vagaRef = database.ref('vagas/vaga10');

vagaRef.on('value', (snapshot) => {
const vagaData = snapshot.val();
if(vagaData === "livre"){
vagaRef.set("ocupado");
window.location.href = "../"
}
});
}
  