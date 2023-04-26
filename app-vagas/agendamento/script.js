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








