const database = firebase.database();
const vagaRef1 = database.ref('vagas/vaga1/status');
const vagaRef2 = database.ref('vagas/vaga2/status');
const vagaRef3 = database.ref('vagas/vaga3/status');
const vagaRef4 = database.ref('vagas/vaga4/status');
const vagaRef5 = database.ref('vagas/vaga5/status');
const vagaRef6 = database.ref('vagas/vaga6/status');
const vagaRef7 = database.ref('vagas/vaga7/status');
const vagaRef8 = database.ref('vagas/vaga8/status');
const vagaRef9 = database.ref('vagas/vaga9/status');
const vagaRef10 = database.ref('vagas/vaga10/status');

const vagaRef = [vagaRef1, vagaRef2, vagaRef3, vagaRef4, vagaRef5, vagaRef6, vagaRef7, vagaRef8, vagaRef9, vagaRef10]

const colorUrlParams = new URLSearchParams(window.location.search);
const color = colorUrlParams.get('color');

vagaRef[0].on('value', (snapshot) => {
  const vagaData = snapshot.val();
if(vagaData === "ocupado"){
  const span1 = document.getElementById("1");
  const img1_black = document.getElementById("img1-black");
  span1.style.display = "none";
  img1_black.style.display = "initial";

}
});


vagaRef[1].on('value', (snapshot) => {
  const vagaData = snapshot.val();
if(vagaData === "ocupado"){
  const span2 = document.getElementById("2");
  const img2 = document.getElementById("img2-white");
  span2.style.display = "none";
  img2.style.display = "initial";
}
});


vagaRef[2].on('value', (snapshot) => {
  const vagaData = snapshot.val();
if(vagaData === "ocupado"){
  const span3 = document.getElementById("3");
  const img3 = document.getElementById("img3-red");
  span3.style.display = "none";
  img3.style.display = "initial";
}
});


vagaRef[3].on('value', (snapshot) => {
  const vagaData = snapshot.val();
if(vagaData === "ocupado"){
  const span4 = document.getElementById("4");
  const img4 = document.getElementById("img4-blue");
  span4.style.display = "none";
  img4.style.display = "initial";
}
});


vagaRef[4].on('value', (snapshot) => {
  const vagaData = snapshot.val();
if(vagaData === "ocupado"){
  const span5 = document.getElementById("5");
  const img5 = document.getElementById("img5-yellow");
  span5.style.display = "none";
  img5.style.display = "initial";
}
});


vagaRef[5].on('value', (snapshot) => {
  const vagaData = snapshot.val();
if(vagaData === "ocupado"){
  const span6 = document.getElementById("6");
  const img6 = document.getElementById("img6-black");
  span6.style.display = "none";
  img6.style.display = "initial";
}
});


vagaRef[6].on('value', (snapshot) => {
  const vagaData = snapshot.val();
if(vagaData === "ocupado"){
  const span7 = document.getElementById("7");
  const img7 = document.getElementById("img7-orange");
  span7.style.display = "none";
  img7.style.display = "initial";
}
});


vagaRef[7].on('value', (snapshot) => {
  const vagaData = snapshot.val();
if(vagaData === "ocupado"){
  const span8 = document.getElementById("8");
  const img8 = document.getElementById("img8-white");
  span8.style.display = "none";
  img8.style.display = "initial";
}
});


vagaRef[8].on('value', (snapshot) => {
  const vagaData = snapshot.val();
if(vagaData === "ocupado"){
  const span9 = document.getElementById("9");
  const img9 = document.getElementById("img9-blue");
  span9.style.display = "none";
  img9.style.display = "initial";
}
});


vagaRef[9].on('value', (snapshot) => {
  const vagaData = snapshot.val();
if(vagaData === "ocupado"){
  const span10 = document.getElementById("10");
  const img10 = document.getElementById("img10-red");
  span10.style.display = "none";
  img10.style.display = "initial";
}
});


function confere1(){
const database = firebase.database();
const vagaRef = database.ref('vagas/vaga1/status');

vagaRef.on('value', (snapshot) => {
const vagaData = snapshot.val();
if(vagaData === "livre"){
// vagaRef.set("ocupado");
const img1_black = document.getElementById('img1-black');
const img1_white = document.getElementById('img1-white');
const img1_red = document.getElementById('img1-red');
const img1_orange = document.getElementById('img1-orange');
const img1_yellow = document.getElementById('img1-yellow');
const img1_blue = document.getElementById('img1-blue');


const span1 = document.getElementById('1')
if(color == "orange"){
  img1_orange.style.display = "initial";
}
if(color == "black"){
  img1_black.style.display = "initial";
}
if(color == "blue"){
  img1_blue.style.display = "initial";
}
if(color == "white"){
  img1_white.style.display = "initial";
}
if(color == "red"){
  img1_red.style.display = "initial";
}
if(color == "yellow"){
  img1_yellow.style.display = "initial";
}
span1.style.display = "none";
window.location.href = "../?vaga=1";
}
});
}
  
function confere2(){
const database = firebase.database();
const vagaRef = database.ref('vagas/vaga2/status');

vagaRef.on('value', (snapshot) => {
const vagaData = snapshot.val();
if(vagaData === "livre"){
  const img2_black = document.getElementById('img2-black');
  const img2_white = document.getElementById('img2-white');
  const img2_red = document.getElementById('img2-red');
  const img2_orange = document.getElementById('img2-orange');
  const img2_yellow = document.getElementById('img2-yellow');
  const img2_blue = document.getElementById('img2-blue');
  
  
  const span2 = document.getElementById('2')
  if(color == "orange"){
    img2_orange.style.display = "initial";
  }
  if(color == "black"){
    img2_black.style.display = "initial";
  }
  if(color == "blue"){
    img2_blue.style.display = "initial";
  }
  if(color == "white"){
    img2_white.style.display = "initial";
  }
  if(color == "red"){
    img2_red.style.display = "initial";
  }
  if(color == "yellow"){
    img2_yellow.style.display = "initial";
  }
  span2.style.display = "none";
  window.location.href = "../?vaga=2";
}
});
}
  
function confere3(){
const database = firebase.database();
const vagaRef = database.ref('vagas/vaga3/status');

vagaRef.on('value', (snapshot) => {
const vagaData = snapshot.val();
if(vagaData === "livre"){
  const img3_black = document.getElementById('img3-black');
  const img3_white = document.getElementById('img3-white');
  const img3_red = document.getElementById('img3-red');
  const img3_orange = document.getElementById('img3-orange');
  const img3_yellow = document.getElementById('img3-yellow');
  const img3_blue = document.getElementById('img3-blue');
  
  
  const span3 = document.getElementById('3')
  if(color == "orange"){
    img3_orange.style.display = "initial";
  }
  if(color == "black"){
    img3_black.style.display = "initial";
  }
  if(color == "blue"){
    img3_blue.style.display = "initial";
  }
  if(color == "white"){
    img3_white.style.display = "initial";
  }
  if(color == "red"){
    img3_red.style.display = "initial";
  }
  if(color == "yellow"){
    img3_yellow.style.display = "initial";
  }
  span3.style.display = "none";

window.location.href = "../?vaga=3";
}
});
}
  
function confere4(){
const database = firebase.database();
const vagaRef = database.ref('vagas/vaga4/status');

vagaRef.on('value', (snapshot) => {
const vagaData = snapshot.val();
if(vagaData === "livre"){
  const img4_black = document.getElementById('img4-black');
  const img4_white = document.getElementById('img4-white');
  const img4_red = document.getElementById('img4-red');
  const img4_orange = document.getElementById('img4-orange');
  const img4_yellow = document.getElementById('img4-yellow');
  const img4_blue = document.getElementById('img4-blue');
  
  
  const span4 = document.getElementById('3')
  if(color == "orange"){
    img4_orange.style.display = "initial";
  }
  if(color == "black"){
    img4_black.style.display = "initial";
  }
  if(color == "blue"){
    img4_blue.style.display = "initial";
  }
  if(color == "white"){
    img4_white.style.display = "initial";
  }
  if(color == "red"){
    img4_red.style.display = "initial";
  }
  if(color == "yellow"){
    img4_yellow.style.display = "initial";
  }
  span4.style.display = "none";

window.location.href = "../?vaga=4";
}
});
}
  
function confere5(){
const database = firebase.database();
const vagaRef = database.ref('vagas/vaga5/status');

vagaRef.on('value', (snapshot) => {
const vagaData = snapshot.val();
if(vagaData === "livre"){
  const img5_black = document.getElementById('img5-black');
  const img5_white = document.getElementById('img5-white');
  const img5_red = document.getElementById('img5-red');
  const img5_orange = document.getElementById('img5-orange');
  const img5_yellow = document.getElementById('img5-yellow');
  const img5_blue = document.getElementById('img5-blue');
  
  
  const span5 = document.getElementById('5')
  if(color == "orange"){
    img5_orange.style.display = "initial";
  }
  if(color == "black"){
    img5_black.style.display = "initial";
  }
  if(color == "blue"){
    img5_blue.style.display = "initial";
  }
  if(color == "white"){
    img5_white.style.display = "initial";
  }
  if(color == "red"){
    img5_red.style.display = "initial";
  }
  if(color == "yellow"){
    img5_yellow.style.display = "initial";
  }
  span5.style.display = "none";

window.location.href = "../?vaga=5";
}
});
}
  
function confere6(){
const database = firebase.database();
const vagaRef = database.ref('vagas/vaga6/status');

vagaRef.on('value', (snapshot) => {
const vagaData = snapshot.val();
if(vagaData === "livre"){
  const img6_black = document.getElementById('img6-black');
  const img6_white = document.getElementById('img6-white');
  const img6_red = document.getElementById('img6-red');
  const img6_orange = document.getElementById('img6-orange');
  const img6_yellow = document.getElementById('img6-yellow');
  const img6_blue = document.getElementById('img6-blue');
  
  
  const span6 = document.getElementById('6')
  if(color == "orange"){
    img6_orange.style.display = "initial";
  }
  if(color == "black"){
    img6_black.style.display = "initial";
  }
  if(color == "blue"){
    img6_blue.style.display = "initial";
  }
  if(color == "white"){
    img6_white.style.display = "initial";
  }
  if(color == "red"){
    img6_red.style.display = "initial";
  }
  if(color == "yellow"){
    img6_yellow.style.display = "initial";
  }
  span6.style.display = "none";

window.location.href = "../?vaga=6";
}
});
}
  
function confere7(){
const database = firebase.database();
const vagaRef = database.ref('vagas/vaga7/status');

vagaRef.on('value', (snapshot) => {
const vagaData = snapshot.val();
if(vagaData === "livre"){
  const img7_black = document.getElementById('img7-black');
  const img7_white = document.getElementById('img7-white');
  const img7_red = document.getElementById('img7-red');
  const img7_orange = document.getElementById('img7-orange');
  const img7_yellow = document.getElementById('img7-yellow');
  const img7_blue = document.getElementById('img7-blue');
  
  
  const span7 = document.getElementById('7')
  if(color == "orange"){
    img7_orange.style.display = "initial";
  }
  if(color == "black"){
    img7_black.style.display = "initial";
  }
  if(color == "blue"){
    img7_blue.style.display = "initial";
  }
  if(color == "white"){
    img7_white.style.display = "initial";
  }
  if(color == "red"){
    img7_red.style.display = "initial";
  }
  if(color == "yellow"){
    img7_yellow.style.display = "initial";
  }
  span7.style.display = "none";

window.location.href = "../?vaga=7";
}
});
}
  
function confere8(){
const database = firebase.database();
const vagaRef = database.ref('vagas/vaga8/status');

vagaRef.on('value', (snapshot) => {
const vagaData = snapshot.val();
if(vagaData === "livre"){
  const img8_black = document.getElementById('img8-black');
  const img8_white = document.getElementById('img8-white');
  const img8_red = document.getElementById('img8-red');
  const img8_orange = document.getElementById('img8-orange');
  const img8_yellow = document.getElementById('img8-yellow');
  const img8_blue = document.getElementById('img8-blue');
  
  
  const span8 = document.getElementById('8')
  if(color == "orange"){
    img8_orange.style.display = "initial";
  }
  if(color == "black"){
    img8_black.style.display = "initial";
  }
  if(color == "blue"){
    img8_blue.style.display = "initial";
  }
  if(color == "white"){
    img8_white.style.display = "initial";
  }
  if(color == "red"){
    img8_red.style.display = "initial";
  }
  if(color == "yellow"){
    img8_yellow.style.display = "initial";
  }
  span8.style.display = "none";

window.location.href = "../?vaga=8";
}
});
}
  
function confere9(){
const database = firebase.database();
const vagaRef = database.ref('vagas/vaga9/status');

vagaRef.on('value', (snapshot) => {
const vagaData = snapshot.val();
if(vagaData === "livre"){
  const img9_black = document.getElementById('img9-black');
  const img9_white = document.getElementById('img9-white');
  const img9_red = document.getElementById('img9-red');
  const img9_orange = document.getElementById('img9-orange');
  const img9_yellow = document.getElementById('img9-yellow');
  const img9_blue = document.getElementById('img9-blue');
  
  
  const span9 = document.getElementById('9')
  if(color == "orange"){
    img9_orange.style.display = "initial";
  }
  if(color == "black"){
    img9_black.style.display = "initial";
  }
  if(color == "blue"){
    img9_blue.style.display = "initial";
  }
  if(color == "white"){
    img9_white.style.display = "initial";
  }
  if(color == "red"){
    img9_red.style.display = "initial";
  }
  if(color == "yellow"){
    img9_yellow.style.display = "initial";
  }
  span9.style.display = "none";

window.location.href = "../?vaga=9";
}
});
}
  
function confere10(){
const database = firebase.database();
const vagaRef = database.ref('vagas/vaga10/status');

vagaRef.on('value', (snapshot) => {
const vagaData = snapshot.val();
if(vagaData === "livre"){ 
  const img10_black = document.getElementById('img10-black');
  const img10_white = document.getElementById('img10-white');
  const img10_red = document.getElementById('img10-red');
  const img10_orange = document.getElementById('img10-orange');
  const img10_yellow = document.getElementById('img10-yellow');
  const img10_blue = document.getElementById('img10-blue');
  
  
  const span10 = document.getElementById('10')
  if(color == "orange"){
    img10_orange.style.display = "initial";
  }
  if(color == "black"){
    img10_black.style.display = "initial";
  }
  if(color == "blue"){
    img10_blue.style.display = "initial";
  }
  if(color == "white"){
    img10_white.style.display = "initial";
  }
  if(color == "red"){
    img10_red.style.display = "initial";
  }
  if(color == "yellow"){
    img10_yellow.style.display = "initial";
  }
  span10.style.display = "none";

window.location.href = "../?vaga=10";
}
});
}
  