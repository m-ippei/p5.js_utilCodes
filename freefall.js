var y=0;
var x=0;
var g=10;
var t=0
var v;

function setup() {
  createCanvas(400, 400);
	v = createVector(10,50)
}

function Rect(x,y) {
	translate(0,400)
	rectMode(CENTER)
	rect(x,-y,10,10)
}

function draw() {
  background(220);
	t+=0.2
	if(y<0){t=0}
	//y = (v.y * t) - (g * t * t / 2)
	y = (v.y * t) - (t * t * 5)
	x = v.x * t
	Rect(x,y)
}
