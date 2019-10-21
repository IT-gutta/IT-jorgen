var canvas = document.getElementById("canvas");
var c= canvas.getContext("2d");
canvas.width= window.innerWidth-20;
canvas.height= window.innerHeight-20;

// controller-objekt som brukes hele tiden
var controller={
  right: false,
  left: false,
  up: false,
  jumping: false,
}

let spaceState;
// sjekker når man trykker på en knapp og når man slipper den. aka når man holder den inne.
function control(event){

  if(event.keyCode==32){spaceState=true; console.log("space")}

  //hvis premisset==true, så er keyS true, ellers false
  var keyS = (event.type=="keydown")?true:false;
  //så lenge man holder en knapp inne, er også booleanen til (controller.prototype.button) true.

  switch (event.keyCode) {
    case 39: controller.right= keyS;  console.log(controller.right); break;
    case 68: controller.right= keyS; console.log(controller.right); break;
    case 37: controller.left= keyS;  console.log(controller.left);break;
    case 65: controller.left= keyS;  console.log(controller.left);break;
    case 38: controller.up= keyS; console.log(controller.up) ;break;
    case 87: controller.up= keyS; console.log(controller.up); break;
  }
  }


  window.addEventListener("keydown", control)
  window.addEventListener("keyup", control)
  // window.addEventListener("keydown", ball.space)


function doesHit(ball, rect){
  if(ball.y+ball.r> rect.y && ball.x>rect.x && ball.x<rect.x+rect.width){return true}
  return false;
}



  function Ball(x, y, r, farge){
    this.x=x,
    this.y=y,
    this.farge=farge,
    this.r=r,
    this.dx=0,
    this.dy=0,

    this.draw = function(){
      c.beginPath();
      c.fillStyle= this.farge;
      c.arc(this.x, this.y, this.r, 0, 2*Math.PI);
      c.fill();
    },

    this.update = function(){
      this.space();
      this.x+=this.dx;
      this.y+=this.dy;
      this.draw();
    }

    this.space = function(event){
      if(spaceState && this.dx==0){
        spaceState= false;
        this.dx=10
        // this.dx= Math.random()*4-2;
        // this.dy= 10;
      }
    }
  }


  var game= {
    update: function(){
      ball.update();
      plate.update();
      for(var i=0; i<bokser.length; i++){
      bokser[i].draw();
      // if(doesHit(ball, plate)){
      //   ball.dy=-ball.dy;
      // }

      if(ball.x+ball.r>canvas.width || ball.x-ball.r<0){
        ball.dx=-ball.dx;
      }
      if(ball.y+ball.r>canvas.height || ball.y-ball.r<0){
        ball.dy=-ball.dy;
      }


      }
    }


  }

  var ball = new Ball(canvas.width/2, canvas.height-100, 20, "red")

console.log(ball.space)


  var plate = new Brick(canvas.width/2-100, canvas.height-20, 200, 20, "black")

  plate.update = function(){
    if(controller.right){this.x+=10}
    if(controller.left){this.x-=10}
    this.draw();
  }



  var boxHoyde= 40;
  var boxBredde= 80;
  var bokser=[]

function lagBokser(){
  for(var i=0; i<canvas.height/(3*(boxHoyde)); i++){
    for(var j=0; j<canvas.width/(boxBredde); j++){
      bokser.push(new Brick(j*boxBredde+ 5 *j, i*boxHoyde+ 5*i, boxBredde, boxHoyde, "green"));
    }
  }
}
lagBokser();

function Brick(x, y, width, height, farge){
  this.x=x,
  this.y=y,
  this.width=width,
  this.height=height,
  this.farge= farge,

  this.draw = function(){
    c.beginPath();
    c.fillStyle= this.farge;
    c.strokeStyle= "black";
    c.fillRect(this.x, this.y, this.width, this.height);
    c.strokeRect(this.x, this.y, this.width, this.height);

    c.fill();
  }
}

var loop= function(){
  for(var i=0; i<bokser.length; i++){
    bokser[i].draw;
  }
}
function animate(){
  requestAnimationFrame(animate);
  c.clearRect(0, 0, innerWidth, innerHeight)

game.update();
}
animate();
