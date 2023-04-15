//a variável botao recebe um evento do id dado no html
// const botao = document.getElementById("agendar"); 
// //a variavel funcionarios recebe um array vazio que irá ser preenchido depois
// const funcionarios = [];

// botao.addEventListener("click", function(){
//   const nome = document.getElementById("name").value
//   const placa = document.getElementById("placa").value
//   const horario = document.getElementById("hour").value

//   const funcionario = {
//     nome: nome,
//     placa: placa,
//     horario: horario
//   };

//   if(nome.length <= 0 || placa.length <= 0 || horario.length <= 0){
//     alert("Preencha todos os campos.")
//   }else{
//     if(funcionarios.length == 10){
//         alert("Limite de vagas atingido.")
//       }else{
//           funcionarios.push(funcionario)
//       }
//   }
  
// })

// import { initializeApp } from "../firebase/app";
// import { getDatabase, ref, set } from "../firebase/database";

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

// const path = 'usuarios/usuario3';

// document.getElementById("agendar").addEventListener("click", function() {
//     set(ref(database, path), {
//         nome: document.getElementById("name").value,
//         placa: document.getElementById("placa").value,
//         horario: document.getElementById("hour").value
//     }).then(() => {
//         console.log('Dados salvos com sucesso!');
//     }).catch((error) => {
//         console.error('Erro ao salvar dados: ', error);
//     });
// });

  
  
        
          
      
  

