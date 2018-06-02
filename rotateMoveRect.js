var x = 0;
var y = 0;
var r = 0;

function setup() {
  createCanvas(400, 400);
	
}

function Rect(x,y,rad) {
	rectMode(CENTER)
	translate(200,200)
	translate(x,-y)
	rotate(rad)
	rect(0,0,10,10)
}

function Move(){
	y += 2
	x += 2
	r += PI/20
}

function mouseClicked() {
	Move()
}

function draw() {
  background(255);
	if(frameCount%2===0){
		Move()
	}
	Rect(x,y,r)
	//rotate()
}

