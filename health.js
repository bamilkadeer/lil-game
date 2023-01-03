var health = 100;
var maxHp = 100;
let change = 0;
let button = document.querySelector(".button");
var fills = document.querySelectorAll(".healthbar_fill");






export default class Health{

constructor(change){

this.change = change;

}
updateHealth(change) {
    
    health += change;
    health = health > maxHp ? maxHp : health;
    health = health < 0 ? 0 : health;
 
    // console.log(health);
    return health
 }
 
 renderHealth (){
   var percent = health / maxHp * 100;
     fills.forEach(fill => {
       fill.style.width = percent+"%";})
   
 }
 
 


}

