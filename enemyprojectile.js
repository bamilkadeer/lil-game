


export default class EnemyProjectile{

constructor( x , y , enemyX , enemyY){

this.x = x;
this.y = y;
this.enemyX = enemyX;
this.enemyY = enemyY;


}
createProjectile() {
    
  this.projectile = document.createElement("div");
  this.projectile.classList.add("enemyprojectile");
  this.projectile.setAttribute("class","bullet");
  this.bullet = document.querySelector('.bullet');
 }
 
 deleteProjectile (){
   this.projectile.remove();
   
 }
 
 projectileVelocity(){


    this.angle =Math.atan2(this.y - this.enemyY, this.x - this.enemyX )

this.velocity = {
x: Math.cos(this.angle),
y: Math.sin(this.angle)
}


 }

 moveProjectile(){

    this.ProjectileX += this.velocity.x;
    this.ProjectileY += this.velocity.y
    this.projectile.style.transform = `translate3d( ${this.ProjectileX}px, ${this.ProjectileY}px, 0 )`;
 }


}

