var pv,v1,v2;
var v0,v;
var r;
var start = false;
var g0,g;
var mp;


function setup() {
  createCanvas(400, 400);
	r = createVector(0,0)
	pv = createVector(0,0)
	v1 = createVector(0,0)
	v2 = createVector(20,80)
	g = createVector(0,-20)
	g0 = g.copy()
	g0 = g.mult(0.5)
	mp = createVector(0,0)
	v0 = createVector(50,0)
	v = createVector(0,0)
	frameRate(20)
}

function Rect(x,y) {
	rectMode(CENTER)
	translate(200,300)
	translate(x,-y)
	rect(0,0,10,10)
}

function go(){
	if(start===false){
		pv.set(0,0)
		pv.add(v)
		pv.add(g0)
		v1 = pv.copy()
		r.set(v1)
		start=true
	}else{
		pv.set(0,0)
		pv.add(v1)
		pv.add(g)
		v1 = pv.copy()
		r.add(pv)
		if(r.y < -100){
			start=false
			r.set(0,0)
		}
	}
}

function a() {
	v.set(0,0)
	v.add(v0)
	v.rotate(random(0,PI))
}

function draw() {
  background(220);
	a()
	go()
	Rect(r.x,r.y)
}
