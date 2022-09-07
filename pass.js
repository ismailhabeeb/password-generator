var chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var abc = "abcdefghijkmnopqrstuvwxyz";
var numb = "01234567890123456789"
var upper ="ABCDEFGHIJKMNOPQRSTUVWXYZ"
var symbols ="~!@#$%^&*()_+><?/{}[]|";

var up =document.getElementById('up');
var down =document.getElementById('down');
var no =document.getElementById('no');
var Symbo = document.getElementById('symbo');

var alpBTN =document.getElementById('alf');
var SpecialBTN= document.getElementById('Special');
var numberBTN = document.getElementById('number');
let Digit = document.getElementById("digit");
let typ = document.getElementById("type");

function you(){
Digit.value = document.getElementById("range").value
}

function tYpe(){
    display(abc)
    down.checked = false
    down.checked = true
    no.disabled = true
    Symbo.disabled = true
    up.checked = false
    up.disabled = false
    no.checked = false
    down.disabled = false
    Symbo.checked = false
}

function sPecial(){
    display(chars)
    up.checked = true
    up.disabled = true
    no.checked = true
    no.disabled = true
    down.checked = true
    down.disabled = true
    Symbo.checked = true
    Symbo.disabled = true
}

function nUmber(){
    display(numb)
    up.checked = false
    up.disabled = true
    down.checked = false
    down.disabled = true
    Symbo.checked = false
    Symbo.disabled = false
    no.checked = true
    no.disabled = false
}
 function display(value) {
    var passwordLength = Digit.value;//*** */
    var password = "";
 for (var i = 0; i <= passwordLength; i++) {
   var randomNumber = Math.floor(Math.random() * value.length);///** */
   password += value.substring(randomNumber, randomNumber +1);
  }
  document.getElementById("password").value = password.slice(1);
 }

 function genPassword(){
    display(chars)
 }

function copyPassword() {
  var copyText = document.getElementById("password");
  copyText.select();
  // document.execCommand("copy");   
}

function copyPassword() {
    var copyText = document.getElementById("password");
    copyText.select();
    document.execCommand("copy");  
}

function upp(){
  if(up.checked == true & down.checked != true){
    display(upper)
}
  else if(up.checked != true){
      display(abc)
      down.checked = true
  }
  else if(down.checked == true & up.checked == true){
  arr = abc + upper
  display(arr)
}
///
if(no.checked == true & Symbo.checked == true & up.checked == true & down.checked == true){
  display(chars)
}
///

}

function low(){
  if(down.checked == true & up.checked != true){
    display(abc)
}
  else if(down.checked != true){
      display(upper)
      up.checked = true
  }
  else if(up.checked == true & down.checked == true){
  arr = abc + upper
  display(arr)
}
///
if(no.checked == true & Symbo.checked == true & up.checked == true & down.checked == true){
  display(chars)
}
///

}

function figure() {
  if(no.checked == true & Symbo.checked != true){
    display(numb)
}
  else if(no.checked != true){
      display(symbols)
      Symbo.checked = true
  }
  else if(Symbo.checked == true & no.checked == true){
    yyy = numb + symbols
  display(yyy)
}
///
if(no.checked == true & Symbo.checked == true & up.checked == true & down.checked == true){
  display(chars)
}
///
}

function symbol(){
  if(Symbo.checked == true & no.checked != true){
    display(symbols)
}
  else if(Symbo.checked != true){
      display(numb)
      no.checked = true
  }
  else if(no.checked == true & Symbo.checked == true){
    yyy = numb + symbols
  display(yyy)
}
///
if(no.checked == true & Symbo.checked == true & up.checked == true & down.checked == true){
  display(chars)
}
///
}
