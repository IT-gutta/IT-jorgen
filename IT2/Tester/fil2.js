var t1=document.getElementById("t1")
var t2=document.getElementById("t2")
var t3=document.getElementById("t3")
var t4=document.getElementById("t4")
var t5=document.getElementById("t5")
var t6=document.getElementById("t6")
var t7=document.getElementById("t7")
var t8=document.getElementById("t8")
var t9=document.getElementById("t9")
var t0=document.getElementById("t0")
var bK=document.getElementById("bK")
var bG=document.getElementById("bG")
var bD=document.getElementById("bD")
var bL=document.getElementById("bL")
var bM=document.getElementById("bM")
var bP=document.getElementById("bP")
var bC=document.getElementById("bC")
var display=document.getElementById("display")

var tall1=0;
var tall2=0;
var sum=0;

function logTall(tall, oP){
if(oP== "+"){sum=display.innerHTML+tall}
else if(oP== "-"){sum=display.innerHTML-tall}

}

t1.onclick= function(){ logTall(1, "+")}
t2.onclick= function(){ logTall(2, "+")}
t3.onclick= function(){ console.log("3"); sum+=3; display.innerHTML=sum}

bL.onclick= function(){display.innerHTML=sum}
bC.onclick= function(){display.innerHTML="0"; sum=0;}
bD.onclick= function(){logTall(100)}
