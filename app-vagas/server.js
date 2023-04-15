// import { initializeApp } from "firebase/app";
// import { getDatabase, ref, set, onValue } from "firebase/database";

// const firebaseConfig = {
//     apiKey: "AIzaSyDfSQex_8VL8GvNZnMchygRqhE0Zki9up8",
//     authDomain: "vagas-garagem-bd78f.firebaseapp.com",
//     projectId: "vagas-garagem-bd78f",
//     storageBucket: "vagas-garagem-bd78f.appspot.com",
//     messagingSenderId: "255602450180",
//     appId: "1:255602450180:web:096456bb32b9df37137a51",
//     measurementId: "G-KCN7NX1Y8V"
// };

// const app = initializeApp(firebaseConfig);

// const database = getDatabase();

// const path = 'usuarios/usuario4';


// set(ref(database, path), {
//   nome: 'João mourinho',
//   idade: 30,
//   email: 'joao.silva@email.com',
//   celular: 'iphone',
//   monitor: 'AOC'

// }).then(() => {
//   console.log('Dados salvos com sucesso!');
// }).catch((error) => {
//   console.error('Erro ao salvar dados: ', error);
// });


// onValue(ref(database, path), async (snapshot) => {
//   const data = await snapshot.val();
//   console.log('teste',data);
// });







// // Importe o SDK do Firebase
// import firebase from "firebase/compat/app";
// import "firebase/compat/database";

// // Configure o Firebase
// const firebaseConfig = {
//   apiKey: "AIzaSyDfSQex_8VL8GvNZnMchygRqhE0Zki9up8",
//   authDomain: "vagas-garagem-bd78f.firebaseapp.com",
//   projectId: "vagas-garagem-bd78f",
//   storageBucket: "vagas-garagem-bd78f.appspot.com",
//   messagingSenderId: "255602450180",
//   appId: "1:255602450180:web:096456bb32b9df37137a51",
//   measurementId: "G-KCN7NX1Y8V"
// };

// // Inicialize o aplicativo do Firebase
// firebase.initializeApp(firebaseConfig);

// // Obtenha uma referência ao seu banco de dados
// const database = firebase.database();

// // Selecione o formulário e adicione um ouvinte para o evento "submit"
// const form = document.querySelector(".input-form");
// form.addEventListener("submit", (event) => {
//   event.preventDefault(); // Impede o envio do formulário

//   // Obtenha os valores dos campos do formulário
//   const name = form.elements["name"].value;
//   const placa = form.elements["placa"].value;
//   const hour = form.elements["hour"].value;

//   console.log("Dados do formulário: ", name, placa, hour); // Adicione esta linha

//   // Crie um novo nó no banco de dados com os valores do formulário
//   push(ref(database, "reservas"), {
//       name,
//       placa,
//       hour,
//       timestamp: Date.now() // Adicione um registro de data/hora
//   })
//       .then(() => {
//           console.log("Dados inseridos com sucesso no Firebase!"); // Adicione esta linha
//           alert("Sua reserva foi registrada com sucesso!");
//           form.reset(); // Limpa o formulário
//       })
//       .catch((error) => {
//           console.error("Erro ao inserir dados no Firebase: ", error); // Adicione esta linha
//           alert(`Ocorreu um erro ao registrar sua reserva: ${error}`);
//       });
// });








// import { initializeApp } from "firebase/app";
// import { getDatabase, ref, set, onValue, firebaseRef } from "firebase/database";

// const firebaseConfig = {

//   apiKey: "AIzaSyDfSQex_8VL8GvNZnMchygRqhE0Zki9up8",
//   authDomain: "vagas-garagem-bd78f.firebaseapp.com",
//   projectId: "vagas-garagem-bd78f",
//   storageBucket: "vagas-garagem-bd78f.appspot.com",
//   messagingSenderId: "255602450180",
//   appId: "1:255602450180:web:096456bb32b9df37137a51",
//   measurementId: "G-KCN7NX1Y8V"
// };

// const app = initializeApp(firebaseConfig);

// const database = getDatabase();
// const path = 'usuarios/usuario8';

// let name 
// let placa 
// let hour 

// function agendar() {
//   name = document.getElementById("name").value;
//   placa = document.getElementById("placa").value;
//   hour = document.getElementById("hour").value;
 

  
//   set(ref(database, path), {
//       name: name,
//       placa: placa,
//       hour: hour
//     }).then(() => {
//       console.log("Agendamento salvo com sucesso");
//     })
//     .catch((error) => {
//       console.error("Erro ao salvar agendamento:", error);
//     });
// }

// document.getElementById("agendar").addEventListener("click", function(event) {
//   event.preventDefault(); // impede que a página seja recarregada
//   agendar();
// });




//funcionando
  // const firebaseConfig = {
  //   apiKey: "AIzaSyDfSQex_8VL8GvNZnMchygRqhE0Zki9up8",
  //   authDomain: "vagas-garagem-bd78f.firebaseapp.com",
  //   databaseURL: "https://vagas-garagem-bd78f-default-rtdb.firebaseio.com",
  //   projectId: "vagas-garagem-bd78f",
  //   storageBucket: "vagas-garagem-bd78f.appspot.com",
  //   messagingSenderId: "255602450180",
  //   appId: "1:255602450180:web:096456bb32b9df37137a51",
  //   measurementId: "G-KCN7NX1Y8V"
  // };

  

  // firebase.initializeApp(firebaseConfig);
  // document.querySelector('#agendar').addEventListener('click', ()=>{

  //   const vaga = document.getElementById('vaga').value;
  //   var firebaseRef = firebase.database().ref(`usuarios/vaga${vaga}`);

    

  //   const name = document.getElementById('name').value;
  //   const placa = document.getElementById('placa').value;
  //   const hour = document.getElementById('hour').value;

  //   const usuarios = {
  //     name: name,
  //     placa: placa,
  //     hour: hour
  //   }

  //   firebaseRef.push(usuarios).then(()=>{
  //     console.log('Dados gravados com sucesso!');
  //     firebaseRef.get().then(snapshot=>{
  //       snapshot.docs.forEach(doc =>{
  //         console.log(doc.data())
  //       })
  //     })
  //     // location.reload();
  //   }).catch((error)=>{
  //     console.error('Erro ao gravar dados: ', error);
  //   });
  // });




//   const firebaseConfig = {
//       apiKey: "AIzaSyDfSQex_8VL8GvNZnMchygRqhE0Zki9up8",
//       authDomain: "vagas-garagem-bd78f.firebaseapp.com",
//       databaseURL: "https://vagas-garagem-bd78f-default-rtdb.firebaseio.com",
//       projectId: "vagas-garagem-bd78f",
//       storageBucket: "vagas-garagem-bd78f.appspot.com",
//       messagingSenderId: "255602450180",
//       appId: "1:255602450180:web:096456bb32b9df37137a51",
//       measurementId: "G-KCN7NX1Y8V"
//     };
  
    
  
//     firebase.initializeApp(firebaseConfig);

//   document.querySelector('#agendar').addEventListener('click', () => {
//     const vaga = document.getElementById('vaga').value;
//     var firebaseRef = firebase.database().ref(`usuarios/vagas`);

//     const name = document.getElementById('name').value;
//     const placa = document.getElementById('placa').value;
//     const hour = document.getElementById('hour').value;

//     const usuarios = {
//         name: name,
//         placa: placa,
//         hour: hour
//     }

//     // Verifica se há mais de 4 vagas cadastradas
//     firebaseRef.once('value', (snapshot) => {
//         if (snapshot.numChildren() >= 4) {
//             // Mostra mensagem para o usuário
//             alert("Não há mais vagas disponíveis");
//         } else {
//             // Envia os dados para o Realtime Database
            
//             firebaseRef.push(usuarios).then(() => {
//                 firebaseRef.get().then(snapshot => {
//                     snapshot.docs.forEach(doc => {
//                         console.log(doc.data())
//                     })
//                 })
//                 // location.reload();
//             }).catch((error) => {
//                 console.error('Erro ao gravar dados: ', error);
//             });
//         }
//     });
// });



