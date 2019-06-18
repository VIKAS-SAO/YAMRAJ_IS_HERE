var canvas=document.querySelector("canvas");
 canvas.height=innerHeight;
canvas.width=innerWidth;
var c=canvas.getContext("2d");
var center={x:706,y:357}
//////////////////////////////////////////

// c.beginPath();
// c.arc(300,300,250,0,Math.PI*2,false);
// c.fillStyle="black";
// c.fill();
// c.closePath();

// c.beginPath(); 
// c.arc(300,300,230,0,Math.PI*2,false);
// c.fillStyle="white";
// c.fill();
// c.closePath();

// c.beginPath(); 
// c.arc(300,300,15,0,Math.PI*2,false);
// c.fillStyle="black";
// c.fill();
// c.closePath();

 
var id=0;
var  date=new Date();
var h=date.getHours();
var m=date.getMinutes();
var s=date.getSeconds();
console.log(h+" "+m+" "+s);




function HAND(angle,thick,length,initial_radians){
    this.radians=Math.PI*2;
    this.angle=angle;
    this.initial_radians=initial_radians;

    this.thick=thick;
    this.length=length;
       this.draw=function()
       {
           c.beginPath();
        c.moveTo(center.x,center.y);
        c.lineTo(center.x+Math.sin(this.radians+this.initial_radians)*this.length,center.y-Math.cos(this.radians+this.initial_radians)*this.length);
        c.lineWidth=this.thick;
        c.stroke();
        c.closePath();
        this.radians+=this.angle; 



    }
     
}

var seconds=new HAND(Math.PI/30,3,150,Math.PI/30*s);
var minutes=new HAND(Math.PI/1800,7,120,Math.PI/30*m);
var hours=new HAND(Math.PI/108000,15,100,Math.PI/6*h+Math.PI/6*m/60);

 
// function runtime(){
//     requestAnimationFrame(runtime);
//     c.clearRect(0,0,innerWidth,innerHeight);
// window.setInterval(hand.update(),1000);
// }
// runtime();


function start(){
    c.clearRect(0,0,innerWidth,innerHeight);

    seconds.draw();
    minutes.draw();
    hours.draw();

}
window.setInterval(start,1000)
 
  