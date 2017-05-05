
  var x = document.createElement("CANVAS");
  var ctx = x.getContext("2d");
  var ctx2 = x.getContext("2d");
   x.width  = 400;
   x.height = 400;

   var sekundy= 100;
   var  Bird;
   var framCount=0;

function setup(){
document.body.appendChild(x);
  Bird = new Bird();
}

function draw(){

Bird.show(Bird);
Bird.update();
Bird.conditions();
framCount++;

}
function keyPresed(){
  if(key="SPACE"){
    Bird.up();

  }

}
setInterval('draw()',100);
