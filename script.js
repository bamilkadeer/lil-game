


let box = document.querySelector('.box');



let speed= 10;
let x = 0;
let y = 0;
let right= 0;
let left = 0;
let up= 0;
let down = 0;
//Set up the game loop

 
 const placeCharacter = () => {
   



       if (right === 1) {x += speed;}
       if (left === 1) {x -= speed;}
       if (up === 1) {y -= speed;}
       if (down === 1) {y += speed;}
    box.style.transform = `translate3d( ${x}px, ${y}px, 0 )`;  
 }
 

 window.addEventListener('keydown', (event) => {

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