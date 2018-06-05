var y=0;
var x=0;
var g=10;
var t=0
var v;
var Vs = [];
var Rs = [];
var Ps = [];

function setup() {
  createCanvas(400, 400);
	v = createVector(10,50)
	for(var i=0;i<10;i++){
		Vs[i] = createVector(60,0)
		Vs[i].rotate(random(0,PI))
		Rs[i] = createVector(0,0)
		Ps[i] = createVector(-50 + i*10,0)
	}
	frameRate(4)
}

function Rect(x,y) {
	translate(200,200)
	rectMode(CENTER)
	rect(x,-y,10,10)
}

function draw() {
  background(220);
	t+=0.2
	if(t>13){t=0}
	var t2 = t*t
	
	for(i=0;i<10;i++){
		push()
		Rs[i].y =  (Vs[i].y * t) - (t2*5)
		Rs[i].x =  Vs[i].x * t + Ps[i].x
		Rect(Rs[i].x,Rs[i].y)
		pop()
 	}	
}
