firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      document.getElementById("name").value = user.email;
    }});
  