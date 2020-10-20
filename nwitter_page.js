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
console.log(firebase_message_id);
console.log(message_data);
name=message_data["name"];
message=message_data["message"];
like=message_data["like"];
name_tag="<h4>"+name+" <img class='user_tick' src='tick.png'></h4>";
message_tag="<h4 class='message_h4'>"+message+"</h4>";
like_tag="<button class='btn btn-warning' id="+firebase_message_id+" value="+like+" onclick='updatelike(this.id)'>";
span_tag="<span class='glyphicon glyphicon-thumbs-up'>Like: "+like+"</span> </button><hr>";
row=name_tag+message_tag+like_tag+span_tag;
document.getElementById("output").innerHTML+=row;
//End code
      } });  }); }
getData();
function logout(){
      localStorage.removeItem("username");
      localStorage.removeItem("roomname");
      window.location= "index.html";
}
function updatelike(message_id){
      button_id=message_id
      likes=document.getElementById(button_id).value;
      updated_like=Number(likes)+1;
      console.log(updated_like);
      firebase.database().ref(room_name).child(message_id).update({
            like:updated_like
      });
}