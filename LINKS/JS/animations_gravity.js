var canvas=document.querySelector("canvas");
canvas.height=innerHeight;
canvas.width=innerWidth;
var c=canvas.getContext("2d");

var colors=["red","black","green","blue","powderblue","pink","yellow","purple"];
function numberrange(a,b){
    var x=Math.random()*(b-a)+a;
    return x;
}
 
 var Balls=function(x,y,dx,dy,r,color,gravity,friction){
    this.x=x;this.y=y;this.r=r;this.dx=dx;this.dy=dy,this.color=color;this.gravity=gravity;this.friction=friction;

    this.draw=function(){
        c.beginPath();
        c.arc(this.x,this.y,this.r,0,Math.PI*2,false);
        c.fillStyle=this.color;
        c.fill();
        c.stroke();


    }

    this.update=function(){
        if(this.y+this.r+this.dy>innerHeight){
            this.dy=-this.dy+this.friction;
 

        }else{
            this.dy+=this.gravity;
            this.y+=this.dy;

        }

        if(this.x+this.r>innerWidth||this.x-this.r<0){
            this.dx=-this.dx;
        }
        this.x+=this.dx;
        this.draw();



        
    }
}
var ballarray=[];

 for(var i=0;i<=100;i++){

    var x=numberrange(r,innerWidth-r);
    var y=numberrange(r,innerHeight-r);
    var r=Math.floor(Math.random()*80);
    var dx=Math.floor(Math.random());
    var dy=Math.floor(Math.random());
    var color=colors[Math.floor(Math.random()*colors.length)];
    var gravity=Math.random();

    ballarray.push(new Balls(x,y,10,dy,50,color,gravity,0));

  }

   function animate(){
    requestAnimationFrame(animate);
    c.clearRect(0,0,innerWidth,innerHeight);
    for(var i=0;i<=ballarray.length;i++){

         
        ballarray[i].update();
    
      }
  
 }

 animate();