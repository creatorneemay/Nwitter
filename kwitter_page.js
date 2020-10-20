//YOUR FIREBASE LINKS
var firebaseConfig = {
      apiKey: "AIzaSyAYxyoHExYjHd9CEiXLT2nHuzZQR9yHCOU",
      authDomain: "nwitter-a8856.firebaseapp.com",
      databaseURL: "https://nwitter-a8856.firebaseio.com",
      projectId: "nwitter-a8856",
      storageBucket: "nwitter-a8856.appspot.com",
      messagingSenderId: "387772725307",
      appId: "1:387772725307:web:9f23871632c7a0bb05c41e",
      measurementId: "G-7HZSJVBGHE"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    user_name=localStorage.getItem("username");
    room_name=localStorage.getItem("roomname");
    function send(){
          msg=document.getElementById("msg").value;
          firebase.database().ref(room_name).push({
                name:user_name, message:msg, like:0
          });
          document.getElementById("msg").value="";
    }
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
