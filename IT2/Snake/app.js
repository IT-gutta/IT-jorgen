const canvas = document.createElement("CANVAS");
const c = canvas.getContext("2d");
document.querySelector("body").appendChild(canvas)
canvas.width = 1000;
canvas.height = 600;

let scale = 20;
let rows = canvas.height/scale;
let cols = canvas.width/scale;
let tailArr, player, apple;
let dir = "r"
let score = 0;
let speed = 100;
let colorArr = ["#001f3f", "#0074D9", "#7FDBFF", "#39CCCC", "#3D9970", "#2ECC40", "#01FF70", "#FFDC00", "#FF851B", "#FF4136", "#85144b", "#F012BE", "#B10DC9"]
let newColor = () => colorArr[Math.floor(Math.random()*colorArr.length)]

function newApple(){
apple = {
  x: (Math.floor(Math.random()*(cols-1)+1)) * scale,
  y: (Math.floor(Math.random()*(rows-1)+1)) * scale,

  draw: function(){
    c.beginPath;
    c.save();
    c.fillStyle = "red";
    c.fillRect(this.x, this.y, scale, scale);
    c.restore();
  }
    }
}

newApple();

player = {
  x: 5*scale,
  y: 5*scale,
  color: newColor(),

  draw: function(){
    c.beginPath();
    c.fillStyle = this.color;
    c.fillRect(this.x, this.y, scale, scale)
  },
  update: function(){
    switch(dir){
      case "r": this.x += scale; break;
      case "l": this.x -= scale; break;
      case "d": this.y += scale; break;
      case "u": this.y -= scale; break
    };
    this.draw();
  }
}

tailArr = [player]

setInterval(function(){
    c.beginPath();
    c.save();
    c.fillStyle= "lightblue";
    c.fillRect(0, 0, canvas.width, canvas.height);
    c.restore();
    c.closePath();

    c.beginPath();
    c.save();

    for(var i = 0; i < cols; i++){
      c.strokeStyle = "rgba(192, 192, 192, 0.7)";
      c.moveTo(i*scale, 0);
      c.lineTo(i*scale, canvas.height);
    }
    for(var i = 0; i < rows; i++){
      c.strokeStyle = "rgba(192, 192, 192, 0.7)";
      c.moveTo(0, i*scale);
      c.lineTo(canvas.width, i*scale);

    }
    c.stroke();
    c.closePath();
    c.restore();



    if(player.x < 0 || player.x + scale > canvas.width || player.y < 0 || player.y + scale > canvas.height){
      restart()
    }

    if(player.x == apple.x && player.y == apple.y){newApple(); score++;
      tailArr.push(new Tail())}

    for(var i = tailArr.length-1; i>0; i--){
      tailArr[i].x = tailArr[i-1].x
      tailArr[i].y = tailArr[i-1].y

        tailArr[i].draw()
    }

    apple.draw();
    player.update();


    for(var i = 1; i<tailArr.length; i++){
      if(player.x == tailArr[i].x && player.y == tailArr[i].y){
        restart();
      }

  }
  newTail = false;
  c.beginPath();
  c.font = "20px Georgia";
  c.fillText(score, 50, canvas.height-50);

  speed += 5

}, speed)

function restart(){
  player.x = 5*scale;
  player.y = 5*scale;
  newApple();
  score = 0;
  tailArr = [player]
  dir = "r"
}


window.addEventListener("keydown", function(e){
    switch(e.keyCode){
      case 37: if(dir!="r") dir = "l"; break;
      case 38: if(dir!="d") dir = "u"; break;
      case 39: if(dir!="l") dir = "r"; break;
      case 40: if(dir!="u") dir = "d"; break;
    }

})


function Tail(){
  this.color = newColor();
  this.draw = function(){
    c.beginPath();
    c.save();
    c.fillStyle = this.color;
    c.fillRect(this.x, this.y, scale, scale);
    c.restore();
  }
}
