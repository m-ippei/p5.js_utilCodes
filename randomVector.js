var v0,v;

function setup() {
  createCanvas(400, 400);
	v0 = createVector(100,0)
	v = createVector(0,0)
	frameRate(1)
}

function draw() {
  background(220);
	translate(200,200)
	v.set(0,0)
	v.add(v0)
	v.rotate(random(PI,TWO_PI))
	line(0,0,v.x,v.y)
}
