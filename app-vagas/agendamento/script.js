const fechar = document.getElementById('pop-up')

const reservar = document.getElementById('agendar')

const background = document.getElementById('bg')

const title_full = document.getElementById('title_full')

const title_success = document.getElementById('title_success')

const icon_ok = document.getElementById('icon_ok');

const icon_sad = document.getElementById('icon_sad');



const firebaseConfig = {
    apiKey: "AIzaSyDfSQex_8VL8GvNZnMchygRqhE0Zki9up8",
    authDomain: "vagas-garagem-bd78f.firebaseapp.com",
    databaseURL: "https://vagas-garagem-bd78f-default-rtdb.firebaseio.com",
    projectId: "vagas-garagem-bd78f",
    storageBucket: "vagas-garagem-bd78f.appspot.com",
    messagingSenderId: "255602450180",
    appId: "1:255602450180:web:096456bb32b9df37137a51",
    measurementId: "G-KCN7NX1Y8V"
  };

firebase.initializeApp(firebaseConfig);

firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION)
  .then(() => {
  })
  .catch((error) => {
    console.log(error)
  });

  const database = firebase.database();

const vagaRef1 = database.ref('vagas/vaga1');

vagaRef1.on('value', (snapshot) => {
  const vagaData = snapshot.val();
if(vagaData === "ocupado"){
  const span1 = document.getElementById("1");
  const img1 = document.getElementById("img1");
  span1.style.display = "none";
  img1.style.display = "initial";
}
});

const vagaRef2 = database.ref('vagas/vaga2');

vagaRef2.on('value', (snapshot) => {
  const vagaData = snapshot.val();
if(vagaData === "ocupado"){
  const span2 = document.getElementById("2");
  const img2 = document.getElementById("img2");
  span2.style.display = "none";
  img2.style.display = "initial";
}
});

const vagaRef3 = database.ref('vagas/vaga3');

vagaRef3.on('value', (snapshot) => {
  const vagaData = snapshot.val();
if(vagaData === "ocupado"){
  const span3 = document.getElementById("3");
  const img3 = document.getElementById("img3");
  span3.style.display = "none";
  img3.style.display = "initial";
}
});

const vagaRef4 = database.ref('vagas/vaga4');

vagaRef4.on('value', (snapshot) => {
  const vagaData = snapshot.val();
if(vagaData === "ocupado"){
  const span4 = document.getElementById("4");
  const img4 = document.getElementById("img4");
  span4.style.display = "none";
  img4.style.display = "initial";
}
});

const vagaRef5 = database.ref('vagas/vaga5');

vagaRef5.on('value', (snapshot) => {
  const vagaData = snapshot.val();
if(vagaData === "ocupado"){
  const span5 = document.getElementById("5");
  const img5 = document.getElementById("img5");
  span5.style.display = "none";
  img5.style.display = "initial";
}
});

const vagaRef6 = database.ref('vagas/vaga6');

vagaRef6.on('value', (snapshot) => {
  const vagaData = snapshot.val();
if(vagaData === "ocupado"){
  const span6 = document.getElementById("6");
  const img6 = document.getElementById("img6");
  span6.style.display = "none";
  img6.style.display = "initial";
}
});

const vagaRef7 = database.ref('vagas/vaga7');

vagaRef7.on('value', (snapshot) => {
  const vagaData = snapshot.val();
if(vagaData === "ocupado"){
  const span7 = document.getElementById("7");
  const img7 = document.getElementById("img7");
  span7.style.display = "none";
  img7.style.display = "initial";
}
});

const vagaRef8 = database.ref('vagas/vaga8');

vagaRef8.on('value', (snapshot) => {
  const vagaData = snapshot.val();
if(vagaData === "ocupado"){
  const span8 = document.getElementById("8");
  const img8 = document.getElementById("img8");
  span8.style.display = "none";
  img8.style.display = "initial";
}
});

const vagaRef9 = database.ref('vagas/vaga9');

vagaRef9.on('value', (snapshot) => {
  const vagaData = snapshot.val();
if(vagaData === "ocupado"){
  const span9 = document.getElementById("9");
  const img9 = document.getElementById("img9");
  span9.style.display = "none";
  img9.style.display = "initial";
}
});

const vagaRef10 = database.ref('vagas/vaga10');

vagaRef10.on('value', (snapshot) => {
  const vagaData = snapshot.val();
if(vagaData === "ocupado"){
  const span10 = document.getElementById("10");
  const img10 = document.getElementById("img10");
  span10.style.display = "none";
  img10.style.display = "initial";
}
});


function fecharPop(){
  fechar.style.display = "none";
  background.style.display = "none";
  location.reload();
}

function load(){
  const loading = document.getElementById("loading");
  loading.style.display = "flex";
  window.location.href = "../";

}

function load2(){
  const loading = document.getElementById("loading");
  loading.style.display = "flex";
  window.location.href = "../agendamento/vagas/";

}



document.querySelector('#agendar').addEventListener('click', () => {
  var firebaseRef = firebase.database().ref(`usuarios/vagas`);

  const name = document.getElementById('name').value;
  const placa = document.getElementById('placa').value;
  const hour = document.getElementById('hour').value;

  const usuarios = {
      name: name,
      placa: placa,
      hour: hour
  }

  // Verifica se há mais de 4 vagas cadastradas
  firebaseRef.once('value', (snapshot) => {
      if (snapshot.numChildren() >=4) {
        title_success.style.display = "none";
        icon_ok.style.display = "none";
        title_full.style.display = "flex";
        icon_sad.style.display = "flex";
        fechar.style.display = "flex";
        background.style.display = "flex";
      } else {          
          firebaseRef.push(usuarios).then(() => {
            icon_sad.style.display = "none";
            fechar.style.display = "flex";
            background.style.display = "flex";
            
            // location.reload();
        
              firebaseRef.get().then(snapshot => {
                  snapshot.docs.forEach(doc => {
                      console.log(doc.data())
                  })
              })
              // location.reload();
          }).catch((error) => {
              console.error('Erro ao gravar dados: ', error);
          });
      }
  });
});

function login() {
  event.preventDefault();
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  const loading = document.getElementById("loading");
  loading.style.display = "flex";

  firebase.auth().signInWithEmailAndPassword(email, password)
  .then(() => {
    loading.style.display = "none";
    window.location.href = "./color/";
  })
  .catch(() => {
    loading.style.display = "none";
    fechar.style.display = "flex";
    background.style.display = "flex";
  });
}



function confere1(){
  const database = firebase.database();
  const vagaRef = database.ref('vagas/vaga1');

vagaRef.on('value', (snapshot) => {
  const vagaData = snapshot.val();
if(vagaData === "livre"){
  vagaRef.set("ocupado");
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
}
});
}






