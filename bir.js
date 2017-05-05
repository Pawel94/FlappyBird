var Pipes;
var width= x.width;
var height= x.height;
var tabOfPipes=[];

function Bird(){
this.y= height/2;
  this.x=2;
  this.gravity=0.6;
  this.up=-0.1;
  this.veloctiy=0;
  Pipes=new Pipe();
  tabOfPipes.push(new Pipe());


 this.show = function(bird){
  ctx.clearRect(0, 0, x.width, x.height);
  ctx.beginPath();  //start the path
  ctx.arc(100, this.y, 15, 0, Math.PI*2); //draw the circle
  ctx.closePath(); //close the circle path
  ctx2.fillStyle = "yellow";
  ctx.fill(); //fill the circle
  for(var i=0; i< tabOfPipes.length;i++){
// tabOfPipes[i].show();

    tabOfPipes[i].updatePipe();
    tabOfPipes[i].show();
if(i>2){
       document.getElementById("Yw").textContent=tabOfPipes[i-1].top;
     document.getElementById("Y").textContent=bird.y;
     document.getElementById("X").textContent=tabOfPipes[i-1].x;

    if(bird.y<tabOfPipes[i-1].top){
      if(115>tabOfPipes[i-1].x&&85<tabOfPipes[i-1].x){

        ctx2.fillStyle = "red";
document.getElementById("Y").textContent="!!!";
        ctx.font = '30pt Calibri';
        ctx.fillText("HIT", 150, 255);
        ctx.textAlign = "center";
    }
}
/*
||bird.y>tabOfPipes[i].top+tabOfPipes[i].space
if(bird.x>tabOfPipes[i].x && bird.x < tabOfPipes[i].x+tabOfPipes[i].w){


*/

    }

  }
}
this.update = function(){
//  console.log(this.veloctiy);
    this.veloctiy+=this.gravity;
    this.y+=this.veloctiy;

}

this.up=function(){
  this.veloctiy-=5;

}


this.conditions = function(){
  if(framCount %22==0){
  tabOfPipes.push(new Pipe());
  }
  if(this.y>x.height){
  console.log("TUTAJ");
  this.valocity=0;
  this.y=x.height;

  }
  if(this.y<0){
  console.log("poza!");
  this.valocity =0;
  this.y=0;
  }
  if(this.veloctiy>5){
this.veloctiy=5;
  }
  if(this.veloctiy<-5){
this.veloctiy=-5;
  }



}









}
