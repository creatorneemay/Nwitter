
//ADD YOUR FIREBASE LINKS HERE
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
    username = localStorage.getItem("username");
    document.getElementById("user_name").innerHTML="Welcome " + username;
    function add_room(){
          roomname=document.getElementById("room_name").value;
          localStorage.setItem("roomname",roomname);
          firebase.database().ref("/").child(roomname).update({
                purpose : "adding roomname"
          });
          window.location="nwitter_page.html";
    }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
       console.log("roomname: "+ Room_names);
       row="<div class='room_name' id="+Room_names+" onclick='redirecttoroomname(this.id)'>#"+Room_names+ "</div> <hr>";
       document.getElementById("output").innerHTML+=row;
      //End code
      });});}
getData();
 
function redirecttoroomname(name){
      console.log(name);
      localStorage.setItem("roomname",name);
      window.location="nwitter_page.html";
}
function logout(){
      localStorage.removeItem("username");
      localStorage.removeItem("roomname");
      window.location= "index.html";
}