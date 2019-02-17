
console.log("this is vicky kumar");
var canvas=document.querySelector("canvas");
canvas.width= window.innerWidth;
canvas.height= window.innerHeight;
var c = canvas.getContext('2d');
var mouse = {
  x: undefined,
  y: undefined
}
var maxRadius = 40;
//var minRadius = 2;
var colorArray = [
  '#f32efa',
  '#r5sd6a',
  '#34asds',
  '#2de2d3',
  '#e55e5e'
];
window.addEventListener('mousemove' ,
function(){
  mouse.x = event.x;
  mouse.y = event.y;
	console.log(mouse);
})
window.addEventListener('resize' ,
function(){
  canvas.width= window.innerWidth;
  canvas.height= window.innerHeight;

})
function circle(x,y,dx,dy,radius){
	this.x = x;
	this.y = y;
	this.dx = dx;
	this.dy = dy;
	this.radius = radius;
  this.minRadius = radius;
  this.color = colorArray[Math.floor(Math.random()*colorArray.length)];
	this.draw = function(){
		c.beginPath();
		c.arc(this.x,this.y,this.radius,0,Math.PI*2, false);
	//	c.strokeStyle = "red";
    //c.fillStyle = colorArray[Math.floor(Math.random()*colorArray.length)];
    c.fillStyle = this.color;
    c.fill();
		//c.stroke();
	}
	this.update = function(){
		if(this.x+this.radius>innerWidth || this.x-this.radius<0){
			this.dx = -this.dx;
		}
		if(this.y+this.radius>innerHeight || this.y-this.radius<0){
			this.dy = -this.dy;
		}
		this.y+=this.dy;
		this.x+=this.dx;

    // interactivity
    if(mouse.x-this.x<50 && mouse.x-this.x>-50 && mouse.y - this.y<50 && mouse.y - this.y>-50 ){
      if(this.radius<maxRadius){
      this.radius+=1;
    }
  }else if(this.radius>this.minRadius){  //or if(this.radius<minRadius)
      this.radius-= 1;
    }
		this.draw();
	}
}
var circleArray = [];
for(var i =0;i<1000;i++){
		//var radius = 60;
    var radius = Math.random() * 4 +1;
    var x = Math.random()*(innerWidth - 2*radius) + radius;
		var y = Math.random()*(innerHeight - 2*radius) + radius;
		var dx = (Math.random() - .5)  * 2;
		var dy = (Math.random() - .5) * 2;
		circleArray.push(new circle(x,y,dx,dy,radius));
}
function animate(){
		requestAnimationFrame(animate);
		c.clearRect(0,0,innerWidth,innerHeight);
		for(var i=0;i<circleArray.length;i++){
		circleArray[i].update();
		}

}
animate();
console.log(canvas);
