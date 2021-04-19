var hr,min,sec
var bl,gn,rd;






function setup() {
  createCanvas(displayWidth,displayHeight);
  angleMode(DEGREES)

  
}

function draw() {
  background(0);  
  translate(200,200)
  rotate(-90)
  hr=hour()
  min=minute()
  sec=second()
  
  rd=map(sec,0,60,0,360)
  gn=map(min,0,60,0,360)
  bl=map(hr%12,0,12,0,360)

  push()
  rotate(rd)
  stroke(255,0,0)
  strokeWeight(7)
  line(0,0,100,0)
  pop()

  push()
  rotate(gn)
  stroke(0,255,0)
  strokeWeight(7)
  line(0,0,75,0)
  pop()

  push()
  rotate(bl)
  stroke(0,0,255)
  strokeWeight(7)
  line(0,0,50,0)
  pop()

  stroke(255,0,255)
  point(0,0)
  strokeWeight(10)
  noFill()

  stroke(255,0,0)
  arc(0,0,300,300,0,rd)

  stroke(0,255,0)
  arc(0,0,280,280,0,gn)

  stroke(0,0,255)
  arc(0,0,260,260,0,bl)









 
}
