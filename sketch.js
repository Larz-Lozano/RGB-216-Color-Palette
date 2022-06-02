var x=0;
var y=0;
var r,g,b;

function setup (){
  createCanvas(1366,240); 
  background (0);
}
function draw (){ 
     colorMode (RGB,5);
     for (var i=0; i<6; i++) {
      for (var j=0; j<1366; j++) {
        for (var t=0; t<6; t++) {
          //noprotect
     var r=i;
     var g=j;
     var b=t;
     fill (r,g,b);
    rect (x,y,38,40);
    x=x+38;
  }
   }
   if (x>=width){
     x=0;
     y=y+40;
 }
}
}