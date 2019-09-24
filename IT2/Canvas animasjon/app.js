var canvas= document.getElementById("canvas")
var c= canvas.getContext("2d")
canvas.width= window.innerWidth;
canvas.height=window.innerHeight;
var tekst=document.getElementById("tekst")

function Circle(x, y, r, dx, dy, f){
  this.x=x;
  this.y=y;
  this.r=r;
  this.dx=dx;
  this.dy=dy;
  this.f=f;
  // this.acc=acc;

  this.draw = function(){
      c.beginPath();
      c.strokeStyle=this.f;
      c.fillStyle=this.f;
      c.arc(this.x, this.y, this.r, 0, 2*Math.PI);
      c.stroke();
      c.fill();
    }
this.update= function(){
  this.x+=this.dx
  this.y+=this.dy;
  // this.dy+=this.acc;
  if(this.y+this.r>innerHeight){this.dy=-this.dy}
  else if(this.y<0){this.dy=-this.dy}
  else if(this.x<0){this.dx=-this.dx}
  else if(this.x+this.r>innerWidth){this.dx=-this.dx}

  this.draw();
}
}
let x, y, r, dx, dy, f;
var fargeArr=["#FF0018", "#FFA52C", "#FFFF41", "#008018", "#0000F9", "#86007D"]
var nyFargeArr=[];
 var sirkelArr=[];
 var radiusArr=[];

 for(var i=0; i<300; i++){
f=fargeArr[Math.floor(Math.random()*fargeArr.length)];
nyFargeArr.push(f);
x=Math.random()*innerWidth
y=Math.random()*innerHeight
r=Math.random()*10+1
dx=Math.random()*3+2
dy=Math.random()*3+2
radiusArr.push(r);
   sirkelArr.push(new Circle(x, y, 20, dx, dy, "grey"))
 }

var mouse={
  x: undefined,
  y: undefined,
}
window.addEventListener("mousemove", function(event){
  mouse.x=event.x;
  mouse.y=event.y;
})



function animate(){
  requestAnimationFrame(animate);
  c.clearRect(0, 0, innerWidth, innerHeight)
  for(var i=0; i<sirkelArr.length; i++){
    sirkelArr[i].update();
    if(Math.sqrt(Math.pow(sirkelArr[i].x-mouse.x, 2)+Math.pow(sirkelArr[i].y-mouse.y, 2))<100 && sirkelArr[i].r<100){
  sirkelArr[i].r+=0.5; sirkelArr[i].f=nyFargeArr[i]
    }
else if(Math.sqrt(Math.pow(sirkelArr[i].x-mouse.x, 2)+Math.pow(sirkelArr[i].y-mouse.y, 2))>100){sirkelArr[i].r+=-0.05; sirkelArr[i].f="grey";
if(sirkelArr[i].r<0.1){sirkelArr.splice(i, 1)}}
}
}
animate();
