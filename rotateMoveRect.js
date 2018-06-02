var v1,v2;
var r = 0

function setup() {
  createCanvas(400, 400);
	//v1 = createVector(0,0)
	v2 = createVector(10,10)
	r = PI /10
}

function Rect(x,y,rad) {
	rectMode(CENTER)
	translate(200,200)
	translate(x,-y)
	//rotate(rad)
	rect(0,0,10,10)
}

function mouseClicked() {
	//v1.add(v2)
	
}

function m(){
	v2.rotate(r)
}

function draw() {
  background(255);
	//Rect(v1.x,v1.y)
	if(frameCount%3===0){
		m()
	}
	Rect(v2.x,v2.y)
}
