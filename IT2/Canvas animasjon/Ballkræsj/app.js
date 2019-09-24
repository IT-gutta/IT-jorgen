var canvas= document.getElementById('canvas');
var c= canvas.getContext("2d");
canvas.width= window.innerWidth-40;
canvas.height= window.innerHeight-40;


function kollisjon(particle, otherparticle){
  const diffX= otherparticle.x - particle.x;
  const diffY= otherparticle.y - particle.y;

  const fartDiffX= otherparticle.fart.x - particle.fart.x;
  const fartDiffY= otherparticle.fart.y - particle.fart.y;

  if(fartDiffX*diffX + fartDiffY*diffY >=0){

  const angle= Math.atan2(diffY/diffX);

  const m1= particle.mass;
  const m2= otherparticle.mass;

  const vFor1= particle.fart.rotate(angle);
  const vFor2= otherparticle.fart.rotate(angle);

  const v1= { x: (m1-m2)*vFor1.x/(m1+m2) + 2*m2*vFor2.x/(m1+m2), y:vFor1.y}
  const v2= { x: 2*m1*vFor1.x/(m1+m2) - (m1-m2)*vFor2.x/(m1+m2), y:vFor2.y}

  const vEtter1= rotate(v1, -angle);
  const vEtter2= rotate(v2, -angle);

  particle.fart.x= vEtter1.x
  particle.fart.y= vEtter1.y

  otherparticle.fart.x= vEtter2.x
  otherparticle.fart.y= vEtter2.y
}
}

function Circle(x, y, r, r2, radians, f){
  this.x = x,
  this.y= y,
  this.r=r,
  this.fart= {
    x:2,
    y:2,
  },

  this.mass=1,

  this.draw= function(){
    c.beginPath();
    c.arc(this.x, this.y, this.r, 0, 2*Math.PI);
    c.strokeStyle= this.f;
    c.stroke();
  }

  this.update= function(){
    this.x+=this.fart.x;
    this.y+=this.fart.y;
    if(this.x+this.r>=canvas.width || this.x-this.r<=0){
      this.fart.x=-this.fart.x;
    }
    if(this.y+this.r>=canvas.height || this.y-this.r<=0){
      this.fart.y=-this.fart.y;
    }

    for(var i=0; i<sirkelArr.length; i++){
      if(this===sirkelArr[i]){continue;}
      if(distance(this.x, this.y, sirkelArr[i].x, sirkelArr[i].y)< this.r + sirkelArr[i].r){
        console.log("Kollisjon")
        kollisjon(this, sirkelArr[i])
      }
    }


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
var sirkelArr=[]
var rArr=[]

// function riktigPlass(){
//   x=Math.random()*canvas.width-r;
//   y=Math.random()*canvas.height-r;
// if(i>0){
// for(var j=1; j<posArr.length; j++){
//   if(j!=i && x-r<0 || y-r<0 || Math.sqrt(Math.pow(posArr[i][0]-posArr[j][0], 2)+
//   Math.pow(posArr[i][1]-posArr[j][1], 2)) < rArr[i]+rArr[j])
//   {x=Math.random()*canvas.width-r;
//   y=Math.random()*canvas.height-r;
// j=-1}
// }}}
function distance(x1, y1, x2, y2){
  return Math.sqrt(Math.pow(x2-x1, 2) + Math.pow(y2-y1, 2))
}




for(var i=0; i<5; i++){
  const r=Math.random()*20+30
  let x=Math.random()* (canvas.width-2*r)+ r;
  let y=Math.random()* (canvas.height-2*r)+ r;
  let f= fargeArr[Math.floor(Math.random()*fargeArr.length)]
  for(var j=0; j<sirkelArr.length; j++){
if(distance(x, y, sirkelArr[j].x, sirkelArr[j].y)< sirkelArr[j].r+r){
  x=Math.random()* (canvas.width-2*r)+ r;
  y=Math.random()* (canvas.height-2*r)+ r;
  j=-1
}
  }

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
