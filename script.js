import Health from "./health.js"




var health = 100;

let change = 0;

var fills = document.querySelectorAll(".healthbar_fill");







let character = document.querySelector('.character');
let box = document.querySelector('.box');
let camera = document.querySelector('.camera');

let map = document.querySelector('.map');

let swordbox = document.querySelector('.swordbox');

let mush = document.querySelector('.follow');

let bullet = document.querySelector('.projectile');

let arrow = document.querySelector('.arrow');
let arrowbox = document.querySelector('.arrowbox');

let enemy = document.querySelector('.enemy');

let viewportHeight = window.innerHeight;
let viewportWidth = window.innerWidth;

//enemy variables
let enemySpeedY = 0.02;
let enemySpeedX = 0.008;
let enemyY = 0;
let enemyX = 200;

//mush variables
let mushSpeedY = 0.09;
let mushSpeedX = 0.06;
let mushY = 0;
let mushX = 0;

//variables for main character
let speed= 5;
let slow = 2.5;
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

//arrow variables
let arrowx = 0;
let arrowy = 0;
let on = 0;
let arrowDistance = 0;
let counter = 0;
let counter2 = 0;

//variables for arrow projectile, multiplier makes it go 15 pixels per frame
let velocityX;
let velocityY;
let multiplier = 15;


let mouseX = 0;
let  mouseY = 0;

let centerY = viewportHeight/2;
let centerX = 0;

let radians = Math.atan2(mouseX - centerX, mouseY - centerY);
let degrees = 0;
//Set up the game loop

 
 const placeCharacter = () => {
   if (right === 1) {x += speed - slow;}
   if (left === 1) {x -= speed - slow;}
   if (up === 1) {y -= speed - slow;}
   if (down === 1) {y += speed - slow;}

   character.setAttribute("facing", direction);
    
   bowDirection()

    viewportHeight = window.innerHeight;
    viewportWidth = window.innerWidth;
    
    enemy.style.backgroundColor = " black";


    //50s are location and 30s are width and height
    if (arrowx + 10 >=  + enemyX     &&  
      arrowx        <=  + 30 + enemyX &&
      arrowy + 10   >=  + enemyY    &&
      arrowy        <=  + 30 + enemyY && health > 0){
enemy.style.backgroundColor = "white";
    
    health =  new Health(change).updateHealth(-10);
     new Health(change).renderHealth();

      console.log('hit');
      console.log(health);
      counter = 0;
      arrowDistance = 0;
       }
       

   //console.log(camera.offsetWidth) 
  // console.log(camera.offsetHeight) 

// if (counter2 === 1){
//    arrow.style.transform = `translate3d( ${arrowx + x}px, ${arrowy + y}px, 0 )`;
// counter2=0;
// }
  if(counter > 0 && arrowDistance > 0 ){

 arrowx = arrowx + velocityX;
 arrowy = arrowy + velocityY ;
   arrow.style.transform = `translate3d( ${arrowx}px, ${arrowy}px, 0 )`;

   counter = counter > arrowDistance ? arrowDistance : counter;
   counter = counter - 4;
   arrowDistance = arrowDistance - 4;

  }
if(counter <= 0 || arrowDistance <= 0){
arrowx=x;
arrowy=y;

   arrow.style.transform = `translate3d( ${arrowx}px, ${arrowy}px, 0 )`;
}
   
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
      
       character.style.transform = `translate3d( ${x}px, ${y}px, 0 )`;
       mush.style.transform = `translate3d( ${x}px, ${y}px, 0 )`;
       

      swordbox.style.transform = `translate3d( ${x}px, ${y}px, 0 )`;

       box.style.transform = `translate3d( ${x}px, ${y}px, 0 )`;   
       character.setAttribute("walking", facts);
   
       map.style.transform = `translate3d( ${-x}px, ${-y}px, 0 )`;

facts = "false";

placeEnemy()
placeMushroom()


 }
 






 
 window.addEventListener('keydown', (event) => {
   direction = event.key;
   
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


window.addEventListener







 const step = () => {
    placeCharacter();
    window.requestAnimationFrame(() => {
       step();
    })
 }
 step(); //kick off the first step!

 addEventListener('mousedown', (event) =>{

   swordbox.style.display = "inherit";
    on = 1;

})

addEventListener('mouseup', (event) =>{

   swordbox.style.display = "none";
   on = 0;
})









function bowDirection(){
   if(on === 1 ){

arrowDistance++; 
arrowDistance = arrowDistance > 100 ? 100 : arrowDistance;
//makes the minimum distance 40 
arrowDistance = arrowDistance < 40 ? 40 : arrowDistance;

console.log(arrowDistance)
      window.addEventListener('mousemove', rotatePointer);
slow = 2.5;
   if (degrees < 260 && degrees > 90){

      swordbox.style.zIndex = "1";
      character.setAttribute("facing", "s");
   }
   
   else{
      swordbox.style.zIndex = "0";
      character.setAttribute("facing", "w");
   }

   if (degrees < 130 && degrees > 70){

      swordbox.style.zIndex = "0";
      character.setAttribute("facing", "d");
   }
   if (degrees < 310 && degrees > 250){

      swordbox.style.zIndex = "0";
      character.setAttribute("facing", "a");
   }
}
else{slow = 0;}

}
 

   let pointer = document.getElementById("pointer"),

   centerPoint = window.getComputedStyle(pointer).transformOrigin,
   centers = centerPoint.split(" ");

function rotatePointer(e) {
 

        mouseX = e.clientX;
       mouseY = e.clientY;
 

   centerY = viewportHeight/2;
   centerX = viewportWidth/2;


       radians = Math.atan2(mouseX - centerX, mouseY - centerY),
       degrees = (radians * (180 / Math.PI) * -1) + 180; 






       pointer.style.transform = 'rotate('+degrees+'deg)';
      //  arrowbox.style.transform = 'rotate('+degrees+'deg)';
}






//click for arrow/projectile
addEventListener('click', (event) =>{

   if(counter <= 0){

      

const angle =Math.atan2(event.clientY - viewportHeight/2 , event.clientX - viewportWidth/2 )

const velocity = {
x: Math.cos(angle),
y: Math.sin(angle)
}


//this makes it so it takes the same amount of time for any distance of shot
multiplier = (arrowDistance / 100) * 15;


velocityX = velocity.x * multiplier;
velocityY = velocity.y * multiplier;
counter = 100;
counter2= 1;

   }
})


function projectile(x,y){

   
 if (arrowx + 10 >= bx + x + 30){

console.log("hit");

 }


}


function placeEnemy(){


   enemyY  += enemySpeedY * (y - enemyY);
   enemyX += enemySpeedX * (x - enemyX + 100);
   

//    if(y - enemyY < 0){
//       enemyY += enemySpeedY * (y - enemyY + 130);
      
//        }
    
//        if(y - enemyY > 0){
//           enemyY += enemySpeedY * (y - enemyY - 130);
//            }

//    if(x - enemyX < 0){
//   enemyX += enemySpeedX * (x - enemyX + 100);
  
//    }

//    if(x - enemyX > 0){
//       enemyX += enemySpeedX * (x - enemyX - 130);
//        }


   enemy.style.transform = `translate3d( ${enemyX}px, ${enemyY}px, 0 )`;
  
}

function placeMushroom(){


   mushY  += mushSpeedY * (y - mushY);

   if(x - mushX < 0){
  mushX += mushSpeedX * (x - mushX);
  
   }

   if(x - mushX > 0){
      mushX += mushSpeedX * (x - mushX );
       }
   mush.style.transform = `translate3d( ${mushX}px, ${mushY}px, 0 )`;
  
}






