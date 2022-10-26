
/*Series of functions assigned for each button, adjusts positioning of joystick as well as properties of joystick base to fit expected visual*/

function upward(){
  var thestick = document.getElementById("joystick");
  /*adjusts top right bottom left margins respectively*/
  thestick.style.margin = "0px 0px 270px 0px";
  var thejbase = document.getElementById("jstickbase");
  /*adjusts rotation height and margin values of the jstickbase*/
  thejbase.style.rotate = "0deg";
  thejbase.style.height = "120px";
  thejbase.style.margin = "0px 0px 60px 0px";

}

function topright(){
  var thestick = document.getElementById("joystick");
  thestick.style.margin = "0px 0px 250px 250px";
  var thejbase = document.getElementById("jstickbase");
  thejbase.style.rotate = "45deg";
  thejbase.style.height = "120px";
  thejbase.style.margin = "0px 0px 60px 60px";
}

function rightward(){
  var thestick = document.getElementById("joystick");
  thestick.style.margin = "0px 0px 0px 290px";
  var thejbase = document.getElementById("jstickbase");
  thejbase.style.rotate = "90deg";
  thejbase.style.height = "120px";
  thejbase.style.margin = "0px 0px 0px 60px";


}

function bottomright(){
  var thestick = document.getElementById("joystick");
  thestick.style.margin = "250px 0px 0px 250px";
  var thejbase = document.getElementById("jstickbase");
  thejbase.style.rotate = "-45deg";
  thejbase.style.height = "120px";
  thejbase.style.margin = "60px 0px 0px 60px";
}

function downward(){
 var thestick = document.getElementById("joystick");
thestick.style.margin = "290px 0px 0px 0px";
var thejbase = document.getElementById("jstickbase");
thejbase.style.rotate = "0deg";
thejbase.style.height = "120px";
thejbase.style.margin = "60px 0px 0px 0px";
}

function bottomleft(){
  var thestick = document.getElementById("joystick");
  thestick.style.margin = "250px 250px 0px 0px";
  var thejbase = document.getElementById("jstickbase");
  thejbase.style.rotate = "45deg";
  thejbase.style.height = "120px";
  thejbase.style.margin = "60px 60px 0px 0px";
}


function leftward(){
  var thestick = document.getElementById("joystick");
  thestick.style.margin = "0px 290px 0px 0px";
  var thejbase = document.getElementById("jstickbase");
  thejbase.style.rotate = "90deg";
  thejbase.style.height = "120px";
  thejbase.style.margin = "0px 60px 0px 0px";


}

function topleft(){
  var thestick = document.getElementById("joystick");
  thestick.style.margin = "0px 250px 250px 0px";
  var thejbase = document.getElementById("jstickbase");
  thejbase.style.rotate = "-45deg";
  thejbase.style.height = "120px";
  thejbase.style.margin = "0px 60px 60px 0px";
}

function middle(){
  var thestick = document.getElementById("joystick");
  thestick.style.margin = "0px 0px 0px 0px";
  var thejbase = document.getElementById("jstickbase");
  thejbase.style.rotate = "0deg";
  thejbase.style.height = "60px";
  thejbase.style.margin = "0px 0px 0px 0px";
}

/*set sound variable to be called in html for audible feedback*/
var sound = new Audio("click.wav");
