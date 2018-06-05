var t=0
var Vs = [];
var Rs = [];
var Ps = [];
var a = 0;

function setup() {
  createCanvas(400, 400);
	for(var i=0;i<10;i++){
		Vs[i] = createVector(60,0)
		Vs[i].rotate(random(0,PI))
		Rs[i] = createVector(0,0)
		Ps[i] = createVector(150+i*10,200)
	}
}

function Rect(x,y) {
	translate(x,y)
	rotate(a)
	rectMode(CENTER)
	rect(0,0,10,10)
}

function resetRotate() {
	for(i=0;i<10;i++){
		Vs[i].set(60,0)
		Vs[i].rotate(random(0,PI))
 	}	
}

function draw() {
  background(220);
	t+=0.2
	a+=0.4
	if(t>13){
		resetRotate()
		t=0
	}
	var t2 = t*t
	
	for(i=0;i<10;i++){
		push()
		Rs[i].y =  (-Vs[i].y * t) + (t2*5) + Ps[i].y
		Rs[i].x =  Vs[i].x * t + Ps[i].x
		Rect(Rs[i].x,Rs[i].y)
		pop()
 	}	
}
