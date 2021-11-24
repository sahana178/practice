
//ADD YOUR FIREBASE LINKS
var firebaseConfig = {
    apiKey: "AIzaSyA2XeorLOi6FJpq7xmwji4guUQcUeJ90Oc",
    authDomain: "kwitter-d2ea0.firebaseapp.com",
    databaseURL: "https://kwitter-d2ea0-default-rtdb.firebaseio.com",
    projectId: "kwitter-d2ea0",
    storageBucket: "kwitter-d2ea0.appspot.com",
    messagingSenderId: "738491635151",
    appId: "1:738491635151:web:3ee888f79ab3ecfa1baeba"
  };
  
  // Initialize Firebase
 firebase.initializeApp(firebaseConfig);

  function addUser(){
      user_name = document.getElementById("username").value;
      firebase.database().ref("/").child(user_name).update({
          purpose : "adding user"
      });
  }