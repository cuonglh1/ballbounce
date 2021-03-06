const Ball = function(x, y, radius) {

    this.color = "rgb(" + Math.floor(Math.random() * 256) + "," + Math.floor(Math.random() * 256) + "," + Math.floor(Math.random() * 256) + ")";
    this.radius = radius;
    this.x = x;
    this.y = y;

};

var dx = Math.floor(Math.random() * 10) + 1; //movement horizonal
var dy = Math.floor(Math.random() * 10) + 1; //vertical movement

document.addEventListener('keydown', function(event) {
    // press 1 to increase speed
    if (event.key == 1) {

        clearInterval(a);
        time -= 20;
        console.log(time);
        a = setInterval(loop, time);

    }
    //press 2 to decrease speed
    if (event.key == 2) {
        clearInterval(a);
        time += 20;
        console.log(time);
        a = setInterval(loop, time);

    }
});
Ball.prototype = {


    updatePosition: function(width, height) {

        this.x = this.x + dx; //Update position horizontally
        this.y = this.y + dy; //Update postion vertically


        //x:horizontal ball coordinates
        //y:vertical ball coordinates
        //radius:radius of ball
        //width:width of screen  
        //height:hieght of screen 

        if (this.x - this.radius < 0) {
            this.x = this.radius;
            dx = -dx;
            this.x = this.x + dx; //increase horizontal ball coordinates


        } else if (this.x + this.radius > width) {

            this.x = width - this.radius;
            dx = -dx;
            this.x += dx; //decrease horizontal ball coordinates

        }

        if (this.y - this.radius < 0) {

            this.y = this.radius;
            dy = -dy;
            this.y = this.y + dy; //increase vertical ball coordinates

        } else if (this.y + this.radius > height) {

            this.y = height - this.radius;
            dy = -dy;
            this.y = this.y + dy; //decrease vertical ball coordinates

        }

    }

};

var context = document.querySelector("canvas").getContext("2d");

var balls = new Array();

let x = document.documentElement.clientWidth * Math.random(); //random movement horizontal first
let y = document.documentElement.clientHeight * Math.random(); //random movement vertical first

for (let index = 0; index < 1; index++) {

    balls.push(new Ball(x, y, Math.floor(Math.random() * 10 + 20)));

}

function loop() {

    let height = document.documentElement.clientHeight;
    let width = document.documentElement.clientWidth;

    context.canvas.height = height;
    context.canvas.width = width;

    for (let index = 0; index < balls.length; index++) {

        let ball = balls[index];

        context.fillStyle = ball.color;
        context.beginPath();
        context.arc(ball.x, ball.y, ball.radius, 0, Math.PI * 2);
        context.fill();
        ball.updatePosition(width, height);

    }

}

var time = 50; //duration invoke funtion loop
var a = setInterval(loop, time); //start function loop