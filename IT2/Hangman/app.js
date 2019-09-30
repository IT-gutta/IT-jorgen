var c=document.getElementById("myCanvas")
var ctx= c.getContext("2d")

const hangman = {
  stand: function () {
  ctx.beginPath();
  ctx.moveTo(100, 320);
  ctx.lineTo(100, 300);
  ctx.lineTo(500, 300);
  ctx.lineTo(500, 320);
  ctx.moveTo(200, 300);
  ctx.lineTo(200, 20);
  ctx.lineTo(350, 20);
  ctx.lineTo(350, 50);
  ctx.lineWidth = 5;
  ctx.stroke();
},
 drawHead: function(){
   ctx.beginPath();
   ctx.arc(350, 80, 30, 0, 2*Math.PI);
   ctx.stroke();
 },
 drawNeck: function (){
   ctx.beginPath();
   ctx.moveTo(350, 110);
   ctx.lineTo(350, 130);
   ctx.stroke();
 },
 drawLarm: function(){
   ctx.beginPath();
   ctx.moveTo(350, 130);
   ctx.lineTo(300, 170);
   ctx.stroke();
 },
 drawRarm: function(){
   ctx.beginPath();
   ctx.moveTo(350, 130);
   ctx.lineTo(400, 170);
   ctx.stroke();
 },
 drawStomach: function(){
   ctx.beginPath();
   ctx.moveTo(350, 130);
   ctx.lineTo(350, 230);
   ctx.stroke();
 },
 drawLleg: function(){
   ctx.beginPath();
   ctx.moveTo(350, 230);
   ctx.lineTo(300, 265);
   ctx.stroke();
 },
 drawRleg: function(){
   ctx.beginPath();
   ctx.moveTo(350, 230);
   ctx.lineTo(400, 265);
   ctx.stroke();
 }

}
hangman.stand()


var input= document.getElementById("letter")
var button= document.getElementById("button")
var uLetters= document.getElementById("usedLetters");
var sjanser= document.getElementById("chancesLeft")
var svarArr=["LONDON", "HALVOR", "HEIDI", "NYNORSK", "JAVASCRIPT", "BADEKAR"]
var hintArr=["Kjent by", "Guttenavn", "Jentenavn", "Et fag", "Kodespråk", "Noe man har på badet"]
var hint=document.getElementById("hint")
var random= Math.floor(Math.random()*svarArr.length)
hint.innerHTML= "Hint: "+ hintArr[random];
var str= svarArr[random];
var rLetters= document.getElementById("rightLetters");
var str2=[]
var div=document.getElementById("div");
var divIgjen=div;


sjanser.innerHTML+=7
for(var i=0; i<str.length; i++){
str2.push("_")}
rLetters.innerHTML= "Gjettede bokstaver:" + str2.join(" ");
var sum=0;


button.addEventListener("click", function(){
  var inc=0;
if(input.value!=""){
  if(input.value.toUpperCase()==str){
    div.innerHTML= "<img id='canon' src='canon.gif'>"; setTimeout(function(){
      div.innerHTML="<h1 id='vinner'> DU VANT BROR</h1>" + "<img id='confetti' src='confetti.gif'>"}, 1500) }

function enter(event){
  if(event.keyCode==13){
    console.log("hei")
    var inc=0;
  if(input.value!=""){
    if(input.value.toUpperCase()==str){
      div.innerHTML= "<img id='canon' src='canon.gif'>"; setTimeout(function(){
        div.innerHTML="<h1 id='vinner'> DU VANT BROR</h1>" + "<img id='confetti' src='confetti.gif'>"}, 1500)
  }
}
}}
window.addEventListener("keydown", enter)

  for(var i=0; i<str.length; i++){
    if(input.value.toUpperCase() == str[i].toUpperCase()){str2.splice(i, 1, input.value.toUpperCase());
    rLetters.innerHTML= "Gjettede bokstaver:" + str2.join(" "); inc++}
} if(inc==0){
  uLetters.innerHTML+=input.value.toUpperCase(); sjanser.innerHTML= "Antall sjanser igjen:"+ (6-sum);
  if(sum==0){hangman.drawHead(); sum++}
  else if(sum==1){hangman.drawNeck(); sum++}
  else if(sum==2){hangman.drawLarm(); sum++}
  else if(sum==3){hangman.drawRarm(); sum++}
  else if(sum==4){hangman.drawStomach(); sum++}
  else if(sum==5){hangman.drawLleg(); sum++}
  else if(sum==6){hangman.drawRleg(); div.innerHTML="<img id='loose' src='loose.gif'>"}
}
var inc2=0;
for(var i=0; i<str2.length; i++){
  if(str2[i]=="_"){inc2++}
}
if(inc2==0){div.innerHTML= "<img id='canon' src='canon.gif'>"; setTimeout(function(){div.innerHTML="<h1 id='vinner'> DU VANT BROR</h1>" + "<img id='confetti' src='confetti.gif'>"}, 1500); }
input.value="";
}
}
)
