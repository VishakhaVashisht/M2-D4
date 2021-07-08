var names   = [];
var teams = [];

var nameInput   = document.getElementById("name");
var teamInput = document.getElementById("team");

var messageBox  = document.getElementById("display");

function insert ( ) {
 names.push( nameInput.value );
 teams.push( teamInput.value );
  
 clearAndShow();
}

function clearAndShow () {
  // Clear our fields
  nameInput.value = "";
  teamInput.value = "";
  
  // Show our output
  messageBox.innerHTML = "";
  
  messageBox.innerHTML += "Names: " + names.join(", ") + "<br/>";
  messageBox.innerHTML += "Teams: " + teams.join(", ");
}