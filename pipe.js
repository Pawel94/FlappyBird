
function Pipe(){
  this.top = Math.floor((Math.random() * 150) + 60);
  this.space =Math.floor((Math.random() * 150) + 50);
  this.x =300;
  this.w =20;
  this.spead = 5;

this.show = function() {

  ctx2.fillStyle = "green";

  ctx2.fillRect(this.x, 0,this.w, this.top);
 ctx2.fillRect(this.x,this.top+this.space,this.w, this.top+200);
}

this.updatePipe = function(){
  this.x-=5;
  }

this.hits = function(bird){
if(bird.y<this.top||bird.y>this.space){
return true;
  }
return false;
}

}
