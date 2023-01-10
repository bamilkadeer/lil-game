let camera = document.querySelector('.camera');
let map = document.querySelector('.map');
let center = document.querySelector('.center');


let bullet = document.createElement("div");


let position;

export default class Projectile {

constructor(enemyX , enemyY, velocity){


this.x = enemyX;
this.y = enemyY;
this.velocity = velocity;


}


draw(){

bullet.classList.add("enemyprojectile");


  center.append(bullet);

}

update(){
this.draw()
this.x = this.x + this.velocity.x;
this.y = this.y + this.velocity.y; 
bullet.style.transform = `translate3d( ${this.x}px, ${this.y}px, 0 )`;
position = {x:this.x,y: this.y}
return position
}
}






















// let body = document.querySelector('body');

// export default class EnemyProjectile{

// constructor( x , y , enemyX , enemyY){

// this.x = x;
// this.y = y;
// this.enemyX = enemyX;
// this.enemyY = enemyY;
// this.ProjectileX;
// this.velocity.x;
// this.ProjectileY;
// this.velocity.y;


// }
// createProjectile() {
    
//   this.projectile = document.createElement("div");
//   this.projectile.classList.add("enemyprojectile");
//   body.append(this.projectile);
//   this.projectile.setAttribute("class","bullet");
//   this.bullet = document.querySelector('.bullet');
//  }
 
//  deleteProjectile (){
//    this.projectile.remove();
   
//  }
 
//  projectileVelocity(){


//     this.angle =Math.atan2(this.y - this.enemyY, this.x - this.enemyX )

// this.velocity = {
// x: Math.cos(this.angle),
// y: Math.sin(this.angle)
// }


//  }

//  moveProjectile(){

//     this.ProjectileX += this.velocity.x;
//     this.ProjectileY += this.velocity.y
//     this.projectile.style.transform = `translate3d( ${this.ProjectileX}px, ${this.ProjectileY}px, 0 )`;
//  }


// }

