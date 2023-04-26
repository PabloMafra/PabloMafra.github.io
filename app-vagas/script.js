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