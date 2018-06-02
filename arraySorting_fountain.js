var a = [0,0,0,0,0,0,0,0,0,0]

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
  a[8] = 200//tarnslate x
  a[9] = 300//translate y
}

function go(arr){
	if(arr[7]===false){
    arr[0].set(0,0)
    arr[0].add(arr[1])
    arr[0].rotate(random(0,PI))
		arr[5].set(0,0)
		arr[5].add(arr[0])
		arr[5].add(arr[4])
		arr[2] = arr[5].copy()
		arr[6].set(arr[2])
		arr[7]=true
	}else{
		arr[5].set(0,0)
		arr[5].add(arr[2])
		arr[5].add(arr[3])
		arr[2] = arr[5].copy()
		arr[6].add(arr[5])
		if(arr[6].y < -100){
			arr[7]=false
			arr[6].set(0,0)
		}
	}
  return arr;
}

function Rect(x,y) {
	rectMode(CENTER)
	translate(a[8],a[9])
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
  a = go(a)
	Rect(a[6].x,a[6].y)
}
