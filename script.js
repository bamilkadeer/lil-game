import Health from "./health.js";
import CharacterHealth from "./CharacterHealth.js";
import Projectile from "./enemyprojectile.js";

// let projectiles=[];


var health = 100;

let Characterhealth = 100;
let change = 0;

var fills = document.querySelectorAll(".healthbar_fill");







let character = document.querySelector('.character');
let box = document.querySelector('.box');
let camera = document.querySelector('.camera');
let center = document.querySelector('.center');
let map = document.querySelector('.map');

let swordbox = document.querySelector('.swordbox');

let mush = document.querySelector('.follow');

// let bullet = document.querySelector('.projectile');

let arrow = document.querySelector('.arrow');
let arrowpicture = document.querySelector('.arrowpicture');
let arrowpicturebox = document.querySelector('.arrowpicturebox');
let arrowbox = document.querySelector('.arrowbox');
let moveback = document.querySelector('.moveback');
let arrowangle;

let rotate = document.querySelector('.rotate');

let enemy = document.querySelector('.enemy');

let viewportHeight = window.innerHeight;
let viewportWidth = window.innerWidth;

//enemy variables
let enemySpeedY = 0.02;
let enemySpeedX = 0.008;
let enemyY = 0;
let enemyX = 200;

let enemyAngle;
let enemyVelocity;

let enemyProjectile
let bulletvelocity = {x:0,y:0}

let enemyProjectileX ;
let enemyProjectileY;
// bulletvelocity.x =0;
// bulletvelocity.y =0;
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

let lastHeldDirectionX = "left";
let lastHeldDirectionY = "up";
//momentum should actually be momentumX
let momentum = 0;
let momentumY = 0;


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

function randomNumber(min, max) {
   return Math.floor(Math.random() * (max - min) + min);
   }

// let projectile = document.createElement("div");
// projectile.classList.add("enemyprojectile");
// map.append(projectile);

         //this stops right click
// document.addEventListener('contextmenu', event => event.preventDefault());

const projectile = new Projectile(enemyX,enemyY,{x:300,y:100});
const projectiles = [];

// setTimeout(EnemyProjectiles, randomNumber(1000,5000));
setInterval(time, 2000);
// console.log(randomNumber(1000,5000))

function time (){

   setTimeout(EnemyProjectiles, randomNumber(1000,2000));
   console.log('go')
}


function EnemyProjectiles(){

//calculations
const bulletangle = Math.atan2(y - enemyY , x - enemyX )

 bulletvelocity = {
x: Math.cos(bulletangle),
y: Math.sin(bulletangle)
}
bulletvelocity.x *=10;
bulletvelocity.y *=10;

enemyProjectileX = enemyX;
enemyProjectileY = enemyY;
  
  projectiles.push(new Projectile(enemyX,enemyY,bulletvelocity))
  
}


function EnemyProjectileCollision(){
let enemyProjectile = projectile.update();

// console.log(enemyProjectile.y)
   if (x + 16 + 32 >=  + enemyProjectileX  &&  
      x + 16       <=  + 30 + enemyProjectileX &&
      y + 10 + 40  >=  + enemyProjectileY    &&
      y + 10       <=  + 30 + enemyProjectileY && Characterhealth > 0 && health > 0){
         
         //  enemy.style.backgroundColor = "white";
    Characterhealth =  new CharacterHealth(change).updateHealth(-1);
     new CharacterHealth(change).renderHealth();
 
      console.log('hit');
      console.log(Characterhealth);

       }
       
 

}

function ProjectilePosition(){

   enemyProjectileX = enemyProjectileX + bulletvelocity.x;
   enemyProjectileY = enemyProjectileY + bulletvelocity.y;
}
//game loop
//game loop
//game loop
//game loop
//game loop
//game loop

 const placeCharacter = () => {
 
   
EnemyProjectileCollision();
   projectiles.forEach((projectile) => {
  
      projectile.update()
    
    })
    ProjectilePosition()

if(!document.hasFocus()){left = 0; right = 0; up = 0; down =0;}
vectorNormalize();

   if (right === 1) {x += speed - slow; lastHeldDirectionX = "right";}
   if (left === 1) {x -= speed - slow; lastHeldDirectionX = "left"; }
   if (up === 1) {y -= speed - slow; lastHeldDirectionY = "up";}
   if (down === 1) {y += speed - slow; lastHeldDirectionY = "down";}

   MomentumCalculations()

   if(lastHeldDirectionX === "left" && lastHeldDirectionY === "up"){
      character.setAttribute("facing", "a");
   }

   if(lastHeldDirectionX === "right" && lastHeldDirectionY === "up"){
      character.setAttribute("facing", "d");
   }
   if(lastHeldDirectionY === "down" && lastHeldDirectionX === "right"){
      character.setAttribute("facing", "w");
   }

   if(lastHeldDirectionY === "down" && lastHeldDirectionX === "left"){
      character.setAttribute("facing", "s");
   }




    
   bowDirection()

    viewportHeight = window.innerHeight;
    viewportWidth = window.innerWidth;
    
arrowcalculations()
stick()

//checks if character is moving 
//then  makes the walking animation start
if (right === 1 || left === 1 || up === 1 || down === 1 ){

facts = "true";

}
      
       character.style.transform = `translate3d( ${x + momentum}px, ${y + momentumY }px, 0 )`;
       mush.style.transform = `translate3d( ${x}px, ${y}px, 0 )`;
       

      swordbox.style.transform = `translate3d( ${x + momentum}px, ${y + momentumY}px, 0 )`;

       box.style.transform = `translate3d( ${x}px, ${y}px, 0 )`;   
       character.setAttribute("walking", facts);
   
       map.style.transform = `translate3d( ${-x - momentum}px, ${-y - momentumY}px, 0 )`;

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
   //  console.log(lastHeldDirectionX)

   //  console.log(lastHeldDirectionY)
    
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






//game loop
 const step = () => {
    placeCharacter();
    window.requestAnimationFrame(() => {
       step();
    })
 }
 step(); //kick off the first step!




 //bow visibility

 addEventListener('mousedown', (event) =>{

   swordbox.style.display = "inherit";
   arrowpicture.style.display = "inherit";
    on = 1;

})

addEventListener('mouseup', (event) =>{

   swordbox.style.display = "none";

   on = 0;
})



function bowDirection(){
   if(on === 1 ){
      arrowpicture.style.transform = 'rotate('+degrees+'deg)';
arrowDistance++; 
arrowDistance = arrowDistance > 100 ? 100 : arrowDistance;
//makes the minimum distance 40 
arrowDistance = arrowDistance < 40 ? 40 : arrowDistance;

// arrowpicturebox.style.transform = `translate3d( ${0}px, ${arrowDistance}px, 0 )`;  

// console.log(arrowDistance)
      window.addEventListener('mousemove', rotatePointer);
slow = 2.5;
//    if (degrees < 270 && degrees > 180){
// // bottom left
//       swordbox.style.zIndex = "1";
//       character.setAttribute("facing", "a");
//    }
   
   if(degrees < 270 && degrees > 0){
      //bottom left
      swordbox.style.zIndex = "1";
      arrowbox.style.zIndex = "1";
      character.setAttribute("facing", "s");
      lastHeldDirectionX = "left";
      lastHeldDirectionY = "down";
   }
else{
   // top left
      swordbox.style.zIndex = "0";
      arrowbox.style.zIndex = "0";
      character.setAttribute("facing", "a");
      lastHeldDirectionX = "left";
      lastHeldDirectionY = "up";
}
   if (degrees < 90 && degrees > 0){
//top right
      swordbox.style.zIndex = "0";
      arrowbox.style.zIndex = "0";
      character.setAttribute("facing", "d");
      lastHeldDirectionX = "right";
      lastHeldDirectionY = "up";
   }
   if (degrees < 180 && degrees > 90){
//bottom right
      swordbox.style.zIndex = "1";
      arrowbox.style.zIndex = "1";
      character.setAttribute("facing", "w");
      lastHeldDirectionX = "right";
      lastHeldDirectionY = "down";
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

      arrowpicture.style.transform = 'rotate('+degrees+'deg)';
      arrowangle = degrees;

const angle =Math.atan2(event.clientY - viewportHeight/2 + momentumY , event.clientX - viewportWidth/2 + momentum)

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




function placeEnemy(){

   //calculates enemy direction towards character
   enemyAngle =Math.atan2(y - enemyY, x - enemyX )

   enemyVelocity = {
   x: Math.cos(enemyAngle),
   y: Math.sin(enemyAngle)
   }
//
enemyY  += enemySpeedY * enemyVelocity.y;
enemyX += enemySpeedX *enemyVelocity.x;
   

   if(y - enemyY < 0){
      enemyY += enemySpeedY * (y - enemyY + 130);
      
       }
    
       if(y - enemyY > 0){
          enemyY += enemySpeedY * (y - enemyY - 130);
           }

   if(x - enemyX < 0){
  enemyX += enemySpeedX * (x - enemyX + 100);
  
   }

   if(x - enemyX > 0){
      enemyX += enemySpeedX * (x - enemyX - 130);
       }


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

function MomentumCalculations(){

   if (left ===1 ){
      momentum = momentum + 1

      momentum = momentum > 5 ? 5 : momentum;
   }
else if(momentum > 0){momentum = momentum -1

      momentum = momentum < 0 ? 0 : momentum;

}

if (right ===1 ){
   momentum = momentum - 1

   momentum = momentum < -5 ? -5 : momentum;
}
else if (momentum < 0){momentum = momentum + 1

   momentum = momentum > 0 ? 0 : momentum;

}
//up and down
if (up ===1 ){
   momentumY = momentumY + 1

   momentumY = momentumY > 5 ? 5 : momentumY;
}
else if(momentumY > 0){momentumY = momentumY -1

   momentumY = momentumY < 0 ? 0 : momentumY;

}

if (down ===1 ){
momentumY = momentumY - 1

momentumY = momentumY < -5 ? -5 : momentumY;
}
else if (momentumY < 0){momentumY = momentumY + 1

momentumY = momentumY > 0 ? 0 : momentumY;

}

}

//arrow distance and collision calculations

function arrowcalculations(){
   enemy.style.backgroundColor = " transparent";


   //50s are location and 30s are width and height
   if (arrowx + 10 >=  + enemyX     &&  
     arrowx        <=  + 100 + enemyX &&
     arrowy + 10   >=  + enemyY    &&
     arrowy        <=  + 100 + enemyY && health > 0){
enemy.style.backgroundColor = "white";
   
   health =  new Health(change).updateHealth(-10);
    new Health(change).renderHealth();

     console.log('hit');
     console.log(health);
     counter = 0;
     arrowDistance = 0;
     arrowpicture.style.display = "none";
      }
      

 if(counter > 0 && arrowDistance > 0 ){

arrowx = arrowx + velocityX;
arrowy = arrowy + velocityY ;
  arrow.style.transform = `translate3d( ${arrowx}px, ${arrowy}px, 0 )`;

  counter = counter > arrowDistance ? arrowDistance : counter;
  counter = counter - 4;
  arrowDistance = arrowDistance - 4;
  arrowpicture.style.display = "inherit";

 }
if(counter <= 0 || arrowDistance <= 0){
arrowx=x;
arrowy=y;

  arrow.style.transform = `translate3d( ${arrowx + momentum}px, ${arrowy + momentumY}px, 0 )`;

  //delete this if you want to add arrow in bow animation
if(on != 1){arrowpicture.style.display = "none";}
}
  
  
}

function stick(){

if(arrowDistance < 5 && arrowDistance > 0){


   let stick = document.createElement("div");
   let rotate = document.createElement("div");
   rotate.classList.add("stick");
   stick.classList.add("underground");
 

  moveback.append(stick);
  stick.append(rotate);
  stick.style.transform = `translate3d( ${arrowx + momentum}px, ${arrowy + momentumY}px, 0 )`;
  rotate.style.transform = 'rotate('+arrowangle+'deg)';
  stick.style.zIndex = "0";
  rotate.style.zIndex = "0";

}

}

function vectorNormalize(){

if(left===1 && up ===1 || left === 1 && down ===1 || right===1 && up ===1 || right === 1 && down ===1 ){


   speed = 4;

}

else{

   speed = 5;
}
}



// setInterval(refresh, 5000)

// function refresh(){

// location.reload()



// }