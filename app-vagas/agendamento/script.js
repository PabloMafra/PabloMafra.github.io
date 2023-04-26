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
  
  function limparDados() {
    var vagasRef = firebase.database().ref('vagas');
    vagasRef.remove()
      .then(function() {
        console.log("Dados do nó 'vagas' removidos com sucesso!");
      })
      .catch(function(error) {
        console.error("Erro ao remover os dados do nó 'vagas': ", error);
      });
  }
  

  var agora = new Date();
  var meiaNoite = new Date(agora.getFullYear(), agora.getMonth(), agora.getDate() + 1, 0, 0, 0);
  var tempoRestante = meiaNoite.getTime() - agora.getTime();
  setTimeout(function() {
    limparDados();
    setInterval(limparDados, 24 * 60 * 60 * 1000);
  }, tempoRestante);

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

const urlParams = new URLSearchParams(window.location.search);
const valor = urlParams.get('vaga');
document.getElementById("vaga").value = valor;

document.querySelector('#agendar').addEventListener('click', () => {
  var firebaseRef = firebase.database().ref(`usuarios/vagas`);

  const name = document.getElementById('name').value;
  const placa = document.getElementById('placa').value;
  const hour = document.getElementById('hour').value;
  const vaga = document.getElementById('vaga').value;

  // const now = moment.tz('America/Sao_Paulo').toDate();

  // const reserva = moment.tz(hour, 'HH:mm', 'America/Sao_Paulo').toDate();

  // const diffMillis = reserva.getTime() - now.getTime();

  // const diffHours = Math.floor(diffMillis / (1000 * 60 * 60));

  // if (diffHours < 5) {
  //   alert('A reserva deve ser agendada com pelo menos duas horas de antecedência.');
  //   return;
  // }


  const usuarios = {
      name: name,
      placa: placa,
      hour: hour,
      vaga: vaga
  }

  firebaseRef.once('value', (snapshot) => {
      if (snapshot.numChildren() >=10) {
        title_success.style.display = "none";
        icon_ok.style.display = "none";
        title_full.style.display = "flex";
        icon_sad.style.display = "flex";
        fechar.style.display = "flex";
        background.style.display = "flex";
      } else {          
          firebaseRef.push(usuarios).then(() => {
            const database = firebase.database();
            const vagaRef = database.ref(`vagas/vaga${vaga}`);
            vagaRef.set("ocupado");

            
            
            
            icon_sad.style.display = "none";
            fechar.style.display = "flex";
            background.style.display = "flex";
            window.close();
        
              firebaseRef.get().then(snapshot => {
                  snapshot.docs.forEach(doc => {
                      console.log(doc.data())
                  })
              })
          }).catch((error) => {
              console.error('Erro ao gravar dados: ', error);
          });
      }
  });
});













