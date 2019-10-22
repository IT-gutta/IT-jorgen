createCanvas(800, 600);
background(100, 0.5);

let hArr = [];
const avstandMellom = 200;
const bredde = 50;
const speed = 2;
const gravity = 0.5;
let jump = false;
let run = false;
let score = 0;

let forbi = true;



let player = {
  pos: { x: 100,
  y:canvas.height/2},
  w: 20,
  h: 20,
  draw: function(){
    color(0, 0, 255)
    rect(this.pos.x, this.pos.y, this.w, this.h);
  }
}
class Obstacle{
  constructor(x, y, w, h){
    this.pos = new Vector(x, y);
    this.vel = new Vector(-speed, 0);
    this.acc = new Vector(0, -gravity);
    this.w = w;
    this.h = h;
  }

  draw(){
    color(255, 0, 0);
    rect(this.pos.x, this.pos.y, this.w, this.h)
  }
  update(){
    this.pos.add(this.vel);
    this.vel.add(this.acc);

    if(doesCollideRect(player, this)){
      die();
    }
    this.draw();
  }
}
function createMap(){
for(let x=400; x<5000; x+= 200){

let startNede = randomInt(canvas.height/2-canvas.height/3 + avstandMellom, canvas.height-canvas.height/3+ 100);
let hoydeNede = 2000;
let startOppe = -2000;
let hoydeOppe = startNede-avstandMellom-startOppe;
hArr.push(new Obstacle(x, startOppe, bredde, hoydeOppe));
hArr.push(new Obstacle(x, startNede, bredde, hoydeNede));
  }
}
createMap();
function loop(){
  if(run){
  requestAnimationFrame(loop)
}
  background(100);

  for(let i = 0; i< hArr.length; i++){
    hArr[i].update()
  }

player.draw()
c.font = "20px Monospace";
c.fillStyle = "black"
c.fillText("Score : " + score, 10, 30)
}
loop()

function hopp(e){
  if(e.keyCode == 32){
    if(run){
    for(let i = 0; i< hArr.length; i++){
      hArr[i].vel.y = 10;
    }
  }
    else if(!run){
      run = true
      loop()
    }
  }
}

window.addEventListener("keydown", hopp)


function die(){
  run = false
  c.font = " 20px Monospace";
  c.fillStyle = "black";
  c.fillText("Du tapte", 200, canvas.height/2);
  setTimeout(function(){
    hArr = [];
    createMap();
    score = 0;
    loop()
  }, 2000);


}

function doesCollideRect(rect1, rect2){
  if(rect1.pos.x > rect2.pos.x + rect2.w){return false}
  if(rect1.pos.x + rect1.w < rect2.pos.x){return false}
  if(rect1.pos.y + rect1.h < rect2.pos.y){return false}
  if(rect1.pos.y > rect2.pos.y + rect2.h){return false}

  return true
}


// for(let i = 0; i< hArr.length; i++){
//   if(hArr[i].pos.x < player.pos.x+player.w && hArr[i].pos.x > player.pos.x && forbi){
//     score++;
//     forbi = false;
//     hvilken = hArr[i]
//   }
//   else if(hvilken.pos.x + hvilken.w < player.pos.x){
//
//   }
// }

let pos1 = {
  pos : {x: 100, y: 100}
}
let pos2 = {
  pos : {x: 0, y: 0}
}
resolveColission(pos1, pos2)
