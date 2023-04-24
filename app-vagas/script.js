// const firebaseConfig = {
//     apiKey: "AIzaSyDfSQex_8VL8GvNZnMchygRqhE0Zki9up8",
//     authDomain: "vagas-garagem-bd78f.firebaseapp.com",
//     databaseURL: "https://vagas-garagem-bd78f-default-rtdb.firebaseio.com",
//     projectId: "vagas-garagem-bd78f",
//     storageBucket: "vagas-garagem-bd78f.appspot.com",
//     messagingSenderId: "255602450180",
//     appId: "1:255602450180:web:096456bb32b9df37137a51",
//     measurementId: "G-KCN7NX1Y8V"
//   };

// firebase.initializeApp(firebaseConfig);

// function login() {
//     event.preventDefault();
//     const email = document.getElementById("email").value;
//     const password = document.getElementById("password").value;
  
//     const loading = document.getElementById("loading");
//     loading.style.display = "flex";
  
//     firebase.auth().signInWithEmailAndPassword(email, password)
//     .then(() => {
//       loading.style.display = "none";
//       window.location.href = "./color/";
//     })
//     .catch(() => {
//       loading.style.display = "none";
//       fechar.style.display = "flex";
//       background.style.display = "flex";
//     });
//   }
  