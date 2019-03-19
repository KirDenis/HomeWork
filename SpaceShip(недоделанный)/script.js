var ship = document.querySelector(".ship");
var shipPosition = ship.getBoundingClientRect();
var ShipLeft = 0;
var ShipTop = 0;
var ShipBottom = 0;
var ShipRight = 0;
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
function moveShip(a){
    switch(a.keyCode){

        case 37:  //лево
            ship.classList.add("rorateShipLeft");
                
            break;
        case 38:  //вверх
        	ShipTop -=10;
            ship.style.top = ShipTop + 'px';
            console.log("top" + ShipTop);
            
                
            break;
        case 39:   //право
            ship.classList.add("rorateShipRight");
                
            break;
        case 40:   //низ
        	ShipTop +=10;
            ship.style.top = ShipTop + 'px';
            console.log("top" + ShipTop);
            
                
            break;
        case 32:   //пробел
            
                
            break;
    }
}

addEventListener("keydown", moveShip);

