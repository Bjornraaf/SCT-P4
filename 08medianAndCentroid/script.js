const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

const width = window.innerWidth;
const height = window.innerHeight;

canvas.width = width;
canvas.height = height;

// begin hier met jouw code voor deze opdracht

// create namespace
let A,B,C;
let lAB,lBC,lCA;
let MAB,MBC,MCA;
let lAMBC,lBMCA,lCMAB;
let ALL;


A = new Point(100,100,20,"red",true,"A");
B = new Point(600,150,20,"green",true,"B");
C = new Point(300,300,20,"blue",true,"C");

MAB = new Point(300,75,10,"white",false,"mAB");
MBC = new Point(50,50,10,"white",false,"mBC");
MCA = new Point(150,150,10,"white",false,"mCA");

ALL = new Point(150,150,10,"white",false,"All");

lAB = new LinearFunction(1,1);
lBC = new LinearFunction(1,1);
lCA = new LinearFunction(1,1);
lAMBC = new LinearFunction(2,100);
lBMCA = new LinearFunction(2,100);
lCMAB = new LinearFunction(2,100);


function animate()
{
  context.clearRect(0,0,width,height)
  A.draw();
  B.draw();
  C.draw();

  MAB.x = (A.x + B.x)/2;
  MAB.y = (A.y + B.y)/2;
  MAB.draw();

  MBC.x = (B.x + C.x)/2;
  MBC.y = (B.y + C.y)/2;
  MBC.draw()

  MCA.x = (C.x + A.x)/2;
  MCA.y = (C.y + A.y)/2;
  MCA.draw()

  ALL.x = (A.x + B.x + C.x)/3;
  ALL.y = (A.y + B.y + C.y)/3;
  ALL.draw();

  lAB.slope = (B.y - A.y)/(B.x - A.x);
  lAB.intercept = B.y - B.x * lAB.slope;
  lBC.slope = (C.y - B.y)/(C.x - B.x);
  lBC.intercept = C.y - C.x * lBC.slope;
  lCA.slope = (A.y - C.y)/(A.x - C.x);
  lCA.intercept = A.y - A.x * lCA.slope;

  lAMBC.slope = (A.y - MBC.y)/(A.x - MBC.x);
  lAMBC.intercept = A.y - A.x * lAMBC.slope;
  lBMCA.slope = (B.y - MCA.y)/(B.x - MCA.x);
  lBMCA.intercept = B.y - B.x * lBMCA.slope;
  lCMAB.slope = (C.y - MAB.y)/(C.x - MAB.x);
  lCMAB.intercept = C.y - C.x * lCMAB.slope;

  lAB.draw(context,"red");
  lBC.draw(context,"red");
  lCA.draw(context,"red");
  
  lAMBC.draw(context,"gray");
  lCMAB.draw(context,"gray");
  lBMCA.draw(context,"gray");
}



setInterval(animate,10)

