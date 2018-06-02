var a = [0,0,0,0,0,0,0,0]

function setting() {
  a[0] = createVector(0,0)  //v
	a[1] = createVector(50,0)//v0
  a[2] = createVector(0,0)//v1
	a[3] = createVector(0,-20)//g
	a[4] = a[3].copy()//g0
	a[4] = a[3].mult(0.5)///g0
	a[5] = createVector(0,0)//pv
	a[6] = createVector(0,0)//r
  a[7] = false//start
}

function go(){
	if(a[7]===false){
    a[0].set(0,0)
    a[0].add(a[1])
    a[0].rotate(random(0,PI))
		a[5].set(0,0)
		a[5].add(a[0])
		a[5].add(a[4])
		a[2] = a[5].copy()
		a[6].set(a[2])
		a[7]=true
	}else{
		a[5].set(0,0)
		a[5].add(a[2])
		a[5].add(a[3])
		a[2] = a[5].copy()
		a[6].add(a[5])
		if(a[6].y < -100){
			a[7]=false
			a[6].set(0,0)
		}
	}
}

function Rect(x,y) {
	rectMode(CENTER)
	translate(200,300)
	translate(x,-y)
	rect(0,0,10,10)
}

function setup() {
  createCanvas(400, 400);
  setting()
  frameRate(20)
}

function draw() {
  background(220);
  go()
	Rect(a[6].x,a[6].y)
}
