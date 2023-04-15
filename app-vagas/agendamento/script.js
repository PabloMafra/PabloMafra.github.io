const fechar = document.getElementById('pop-up')

const reservar = document.getElementById('agendar')

const background = document.getElementById('bg')

const title_full = document.getElementById('title_full')

const title_success = document.getElementById('title_success')

const icon_ok = document.getElementById('icon_ok');

const icon_sad = document.getElementById('icon_sad');

function fecharPop(){
    fechar.style.display = "none";
    background.style.display = "none";
    location.reload();
}

// function reservarVaga(){
//     fechar.style.display = "flex";
//     background.style.display = "flex";
// }

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

document.querySelector('#agendar').addEventListener('click', () => {
  const vaga = document.getElementById('vaga').value;
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
          // Envia os dados para o Realtime Database
          
          firebaseRef.push(usuarios).then(() => {
            fechar.style.display = "flex";
            background.style.display = "flex";
            icon_sad.style.display = "none";
            
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






