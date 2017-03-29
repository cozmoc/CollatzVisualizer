function setup() {
  createCanvas(10000,10000)
  background(204);
  input = createInput();
  input.position(20, 65);

  button = createButton('submit');
  button.position(input.x + input.width, 65);
  button.mousePressed(enter);

  greeting = createElement('h2', 'Enter a number to try?');
  greeting.position(20, 5);

  textAlign(CENTER);
  textSize(50);
}

function enter() {
  var name = input.value();
  greeting.html('Showing CollatzSeq for '+name+'!');
  input.value('');
  clear();
  background(204);
  c = Collatz(name);
  one = true;
}

var c;
var one = false;
function draw() {
  var circs=[];
  var prev=[400,150];
  if(one){
    for (var i = 0; i < c.length; i++) {
      noStroke();
      fill(255);
      ellipse(prev[0],prev[1],50);
      fill(0);
      textAlign(CENTER);
      textSize(20);
      text(c[i], prev[0],prev[1]);
      circs.push(prev[0],prev[1]);
      prev[1]=(i+4)*50
      c[i] % 2 === 0 ? prev[0]+=100 : prev[0]-=100 ;
    }
    for (var i = 0; i < circs.length; i+=2) {
      stroke(255)
      line(circs[i],circs[i+1],circs[i+2],circs[i+3])
    }
    one=false;
  }
}
