


let character = document.querySelector('.character');
let box = document.querySelector('.box');
let camera = document.querySelector('.camera');

let map = document.querySelector('.map');

let swordbox = document.querySelector('.swordbox');

let mush = document.querySelector('.follow');

let bullet = document.querySelector('.projectile');

let arrow = document.querySelector('.arrow');



let speed= 5;
let x = 0;
let y = 0;
let right= 0;
let left = 0;
let up= 0;
let down = 0;
let direction;
let facts= "false";

let bx;
let by;
let bulletCheck = 0;


let arrowx = 0;
let arrowy = 0;

let counter = 0;
let counter2 = 0;

let velocityX;
let velocityY;
let multiplier = 15;
//Set up the game loop

 
 const placeCharacter = () => {


   //console.log(camera.offsetWidth) 
  // console.log(camera.offsetHeight) 

// if (counter2 === 1){
//    arrow.style.transform = `translate3d( ${arrowx + x}px, ${arrowy + y}px, 0 )`;
// counter2=0;
// }
  if(counter > 0 ){

 arrowx = arrowx + velocityX;
 arrowy = arrowy + velocityY ;
   arrow.style.transform = `translate3d( ${arrowx}px, ${arrowy}px, 0 )`;
   counter = counter - 4;
  }
if(counter <= 0){
arrowx=x;
arrowy=y;
   arrow.style.transform = `translate3d( ${arrowx}px, ${arrowy}px, 0 )`;
}
       if (right === 1) {x += speed;}
       if (left === 1) {x -= speed;}
       if (up === 1) {y -= speed;}
       if (down === 1) {y += speed;}

       if(bulletCheck === 1){
         bx = mouseX;
         by = mouseY;
        bullet.style.transform = `translate3d( ${x}px, ${y}px, 0 )`
         bullet.style.top = ` ${by}px`;
         bullet.style.left = ` ${bx}px`;
       }
bulletCheck = 0;

if (right === 1 || left === 1 || up === 1 || down === 1 ){

facts = "true";

}
       character.setAttribute("facing", direction);
       character.style.transform = `translate3d( ${x}px, ${y}px, 0 )`;
       mush.style.transform = `translate3d( ${x}px, ${y}px, 0 )`;
       

      swordbox.style.transform = `translate3d( ${x}px, ${y}px, 0 )`;

       box.style.transform = `translate3d( ${x}px, ${y}px, 0 )`;   
       character.setAttribute("walking", facts);
   
       map.style.transform = `translate3d( ${-x}px, ${-y}px, 0 )`;

facts = "false";

window.addEventListener('mousemove', (event) =>{




})






 }
 






 
 window.addEventListener('keydown', (event) => {
   direction = event.key;
   console.log(direction);
    switch (event.key){

            case 'd':

            right = 1;
          
            break


            case 'a':

                left = 1;
    
                break



                case 's':

                    down = 1;
        
                    break
        
        
                    case 'w':
        
                        up = 1;
            
                        break

                        case ' ':
        
                           bulletCheck = 1;
               
                           break
    }

 })


 window.addEventListener('keyup', (event) => {

    switch (event.key){

            case 'd':

            right = 0;

            break

            
            case 'a':

                left = 0;
    
                break

                case 's':

                    down = 0;
        
                    break
        
        
                    case 'w':
        
                        up = 0;
            
                        break
                
    }

 })










 const step = () => {
    placeCharacter();
    window.requestAnimationFrame(() => {
       step();
    })
 }
 step(); //kick off the first step!



 

   var pointer = document.getElementById("pointer"),

   centerPoint = window.getComputedStyle(pointer).transformOrigin,
   centers = centerPoint.split(" ");

function rotatePointer(e) {
 var pointerEvent = e;

       mouseX = e.clientX,
       mouseY = e.clientY;
 

   var centerY = 200,
   centerX = 100,
       radians = Math.atan2(mouseX - centerX, mouseY - centerY),
       degrees = (radians * (180 / Math.PI) * -1) + 180; 
       pointer.style.transform = 'rotate('+degrees+'deg)';
}


window.addEventListener('mousemove', rotatePointer);




addEventListener('click', (event) =>{

   if(counter <= 0){

      

const angle =Math.atan2(event.clientY - 500 , event.clientX - 500 )

const velocity = {
x: Math.cos(angle),
y: Math.sin(angle)
}




velocityX = velocity.x * multiplier;
velocityY = velocity.y * multiplier;
counter = 100;
counter2= 1;
   }
})


function projectile(x,y){

   
   arrow.style.transform = `translate3d( ${x}px, ${y}px, 0 )`;


}