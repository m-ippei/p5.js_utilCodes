var pv,v1,v2;
var r;
var start = false;
var g0,g;

function setup() {
  createCanvas(400, 400);
	r = createVector(0,0)
	pv = createVector(0,0)
	v1 = createVector(0,0)
	v2 = createVector(20,80)
	g = createVector(0,-20)
	g0 = g.copy()
	g0 = g.mult(0.5)
}

function Rect(x,y) {
	rectMode(CENTER)
	translate(0,400)
	translate(x,-y)
	rect(0,0,10,10)
}

function mouseClicked(){
	console.log(v1.toString())
	if(start===false){
		v2.add(g0)
		v1 = v2.copy()
		r.set(v1)
		start=true
	}else{
		pv.set(0,0)
		pv.add(v1)
		pv.add(g)
		v1 = pv.copy()
		r.add(pv)
	}
}

function draw() {
  background(220);
	Rect(r.x,r.y)
}
