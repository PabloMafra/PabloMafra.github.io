firebase.auth().onAuthStateChanged(function(user) {
if (user) {
    // document.getElementById("name").value = user.email;
    if(user.email == "dev.pablomafra@gmail.com"){
        document.getElementById("name").value = "Pablo Santos";
    }else{
        if(user.email == "gucostapereira777@gmail.com"){
            document.getElementById("name").value = "Gustavo Costa"
        }    
    }
}});
  