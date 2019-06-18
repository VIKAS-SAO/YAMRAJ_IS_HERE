 var canvas=document.querySelector("canvas");
var c=canvas.getContext("2d");
canvas.height=innerHeight;
canvas.width=innerWidth;
var colors=["red","blue","yellow","green","black","powderblue","pink"]

 var  mouse={
     x:undefined,
     y:undefined
 }
 window.addEventListener("mousemove",function(){
mouse.x=event.x;
mouse.y=event.y;
 })
 

 
 
  


    function Circle(x,y,r,dx,dy,color){
        this.x=x;
        this.y=y;
        this.r=r;
        this.dx=dx;
        this.dy=dy;
        this.color=color;

        this.draw=function(){
            c.beginPath();
            c.arc( this.x,this.y,this.r,0,Math.PI*2,false);
            c.stroke();
            c.fillStyle=this.color;
            c.fill();
              
        }

        this.check=function(){
  
            
            if(this.x+this.r>innerWidth||this.x-this.r<0){
                this.dx=-this.dx;
            }
             if(this.y+this.r>innerHeight||this.y-this.r<0){
                 this.dy=-this.dy;
                }
             this.x+=this.dx;
            this.y+=this.dy;

            //interavtivity
if(Math.abs(mouse.x-this.x)<50&&Math.abs(mouse.y-this.y)<50&&this.r<90){
    this.r+=20;
}
else if(this.r>10){
    this.r-=5;
}
            
             this.draw();

        }

    }





    var circlearray= [];
    var circlearray1= [];

    for(var i=0;i<=500;i++)   
    
    {
        var x=Math.random()*innerWidth;
        var y=Math.random()*innerHeight;
        var dx=(Math.random()-.5)*7;
        var dy=(Math.random()-.5)*7;
        var r=Math.random()*35;
        var color=colors[Math.floor(Math.random()*colors.length)];
  circlearray.push( new Circle(x,y,r,dx,dy,color));
    }        

    

     function animate(){
    requestAnimationFrame(animate);
    c.clearRect(0,0,innerWidth,innerHeight);
    for(var i=0;i<circlearray.length;i++)   {
        circlearray[i].check();


    } 

    }
 
 
animate();

