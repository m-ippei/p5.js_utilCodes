var t=0
var Vs = [];
var Rs = [];
var Ps = [];
var a = 0;

function setup() {
  createCanvas(400, 400);
	
	for(var i=0;i<2;i++){
		Vs[i] = []
		Rs[i] = []
		Ps[i] = []
		for(var j=0;j<10;j++){
			Vs[i][j] = createVector(60,0)
			Vs[i][j].rotate(random(0,PI))
			Rs[i][j] = createVector(0,0)
			Ps[i][j] = createVector(150+j*10,190+i*10)
		}
	}
	frameRate(4)
}

function Rect(x,y) {
	translate(x,y)
	rotate(a)
	rectMode(CENTER)
	rect(0,0,10,10)
}

function resetRotate() {
	for(var i=0;i<2;i++){
		for(j=0;j<10;j++){
			Vs[i][j].set(60,0)
			Vs[i][j].rotate(random(0,PI))
		}	
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
	
	for(var i=0;i<2;i++){
		for(j=0;j<10;j++){
		push()
		Rs[i][j].y =  (-Vs[i][j].y * t) + (t2*5) + Ps[i][j].y
		Rs[i][j].x =  Vs[i][j].x * t + Ps[i][j].x
		Rect(Rs[i][j].x,Rs[i][j].y)
		pop()
 	  }	
	}
}
