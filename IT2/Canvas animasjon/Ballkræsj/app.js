var canvas= document.getElementById('canvas');
var c= canvas.getContext("2d");
canvas.width= window.innerWidth-40;
canvas.height= window.innerHeight-40;

function Circle(x, y, r, r2, radians, f){
  this.x = x,
  this.y= y,
  this.r=r,
  this.dx=2,
  this.dy=2,

  this.draw= function(){
    c.beginPath();
    c.arc(this.x, this.y, this.r, 0, 2*Math.PI);
    c.strokeStyle= this.f;
    c.stroke();
  }

  this.update= function(){
    this.x+=this.dx;
    this.y+=this.dy;
    if(this.x+this.r>canvas.width || this.x-this.r<0){
      this.dx=-this.dx;
    }
    if(this.y+this.r>canvas.height || this.y-this.r<0){
      this.dy=-this.dy;
    }


    // if(Math.sqrt(Math.pow(this.posX-mouse.x, 2) + Math.pow(this.posY-mouse.y, 2))>5) {
    // this.posX+=(this.dx/20);
    // this.posY+=(this.dy/20)};
    this.draw();
  }
}

var mouse= {
  x: undefined,
  y: undefined
}

window.addEventListener("mousemove", function(event){
  mouse.x= event.x; mouse.y = event.y;
  }
)



var fargeArr=["#12355B", "#D72638", "#FF570A", "#3F826D", "#A9FFF7"]
var x, y, f, r;
var sirkelArr=[]
var posArr=[]
var rArr=[]

function riktigPlass(){
  x=Math.random()*canvas.width-r;
  y=Math.random()*canvas.height-r;
if(i>0){
for(var j=1; j<posArr.length; j++){
  if(j!=i && x-r<0 || y-r<0 || Math.sqrt(Math.pow(posArr[i][0]-posArr[j][0], 2)+
  Math.pow(posArr[i][1]-posArr[j][1], 2)) < rArr[i]+rArr[j])
  {riktigPlass()}
}}}




for(var i=0; i<2; i++){
  r=Math.random()*40+10
  posArr.push([x, y])
  rArr.push(r);
  riktigPlass();
  f= fargeArr[Math.floor(Math.random()*fargeArr.length)]
  sirkelArr.push(new Circle(x, y, r, f))
}


function animate(){
  requestAnimationFrame(animate);
c.clearRect(0, 0, innerWidth, innerHeight);
  for(var i=0; i<sirkelArr.length; i++){
    sirkelArr[i].update();
  }
}
animate();
