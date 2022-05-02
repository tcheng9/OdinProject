const ship = {

    //function for creating ship and giving its functionality
    createShip(divID, length, text, horizontal) {
        let isHorizontal = horizontal;

        shipCoordinates = [];
        let shipDiv = document.createElement("div");
        shipDiv.id = divID;
        let shipLength = length * 50;
        shipDiv.innerHTML = text;
        shipDiv.style.backgroundColor = '#555';
        shipDiv.top = 0;
        shipDiv.left = 0;
        document.body.appendChild(shipDiv);

        swapOrientation(length, horizontal);        
        //Function to alternate if the ship is horizontal or not
        function swapOrientation(length, isHorizontal){
            if (isHorizontal == true){
                let shipLength = length * 50;
                shipDiv.style.height = '50px';
                shipDiv.style.width = `${ shipLength}` + 'px';
                
            } else {
                //If isHorizontal == false
                let shipLength = length * 50;
                shipDiv.style.height = `${shipLength}` + 'px';
                shipDiv.style.width = '50px';
            }
        }
        
        // Make the DIV element draggable:
        shipDiv.setAttribute("draggable", true);
        
        //now what should happen when the test square is dragged
        shipDiv.addEventListener("dragstart", movingCell);

        function movingCell(event){
            event.dataTransfer.setData("text", event.target.id);
        }

        //2nd, make all squares "droppable"
        var cellsDroppable = document.getElementsByClassName("cell");

        for (let i = 0; i< cellsDroppable.length; i++){
            cellsDroppable[i].addEventListener("dragover", allowDrop);
        }

        function allowDrop(event){
            event.preventDefault();
    
        };

        //3rd drop, let all squares ondrop to get draggable elements

        for (let i = 0; i < cellsDroppable.length; i++){
            cellsDroppable[i].addEventListener("drop", drop);
        }
        


        function drop(ev){
            ev.preventDefault();
            
            var data = ev.dataTransfer.getData("text");
            ev.target.appendChild(document.getElementById(data));
            let targetX = ev.target.id[0];
            let targetY = ev.target.id[1];
            
            
        }

        function addCoordinates(x,y, isHorizontal, length){
            let parentArr = [];
            let arr =[];
            x = parseInt(x);
            y = parseInt(y);
            console.log(shipDiv.id);
            if (isHorizontal == true){
                for (let i = 0; i < length; i++){
                    arr = [x,y];
                    parentArr.push(arr);
                    x = x + 1;
                }
            } else {
                //is horizontal == false
                for (let i = 0; i < length; i++){
                    arr = [x,y];
                    parentArr.push(arr);
                    y = y + 1;
                } 
            }
            console.log(parentArr);
            return parentArr;
        }
    
        
        return shipCoordinates;
    },
    

    //function to return a ship's coordinates
    getCoordinates(){
        console.log(shipCoordinates); 
        return shipCoordinates;
    },

    //Function for calculating if it's been hit
    isHit(x,y){
        length = shipCoordinates.length;
        for (let i = 0; i <= length; i++){
            let shipX = shipCoordinates[i][0];
            let shipY = shipCoordinates[i][1];
            
            if (shipX == 'hit' && shipY == 'hit'){
                return 'already hit';
            }
            
            
            //If the input locations matches a ship's location, change the values to hit
            if (shipX == x && shipY == y){
                shipCoordinates[i][0] = 'hit';
                shipCoordinates[i][1] = 'hit';
                return 'hit';
            }
            
        }

        return 'no hit';
    },
    //Function for calculating if it's sunk
    isSunk(){
        length = shipCoordinates.length;
        
        for (let i = 0; i < length; i++){
            let shipX = shipCoordinates[i][0];
             let shipY = shipCoordinates[i][1];

            if (shipX != 'hit' && shipY != 'hit'){
                return 'not sunk';
            }
        }

        return 'sunk';
    },
   
    
};

////////////////////////////////////////////////////////////////////////

const gameboard = {
    // let coordinates = [];
    // let ships = [];
    // let coordinatesTracker = [];
    //Function that adds a ship to the ships
    addShip(ship){
        ships.push(ship);
    },

    //Function that places ships at specific coordinates
    returnCoordinates(ships){
        for (let i = 0; i < ships.length; i++){
            ships[i].getCoordinates();
        }
    },

    //Function that receiveAttack()
    receiveAttack(x,y){
        let newCoordinates = [x,y];
        coordinates.push(newCoordinates);
        ship.isHit(x,y);
        return coordinates;
    },

    //Function that tracks missed shots or hit shots
    addToTracker(x,y){
        let newCoordinates = [x,y];
        coordinatesTracker.push(newCoordinates);
        return coordinatesTracker;
    },
    //Function that reports if all ships for a player is sunk or not
    //This function tracks the 2 player's shipyards. If all of one's player's ships are sunk then the other player wins
    //NEEEEEEEEEEEED TO WORK ON THIS ONE
    shipStatuses(shipyard1,shipyard2){
        //
        let player1 = shipyard1;
        let player2 = shipyard2;

        /*
            if player1's shipyard is all sunk,
            then show that player losing

            if player2's shipyard is sunk, 
            then show that player losing
        */
    }
    
    // return{
    //     receiveAttack,
    //     addShip,
    //     returnCoordinates,
    //     coordinatesTracker,
    //     addToTracker,
    // }
};


function createPlayer(){
    //Functions needed in createPlayer();
    /*
        1. Function that holds an array of it's ships?
        2. "computer" player should make random moves.

    */
   let name = '';
   let shipyard = [];
   let recordedMoves = [];

   function addPlayerName(nameInput){
        name = nameInput;
   }
   function addShip(ship){
    shipyard.push(ship);
   }
   
   //Add a function that checks if all the ships in a player's shipyard is sunk

   //Function to control if it's a player
   function computerMoves(){
        let lenX = 10;
        let randX = Math.random() * lenX;
        randX = Math.floor(randY);


        let lenY = 10;
        let randY = Math.random() * lenY;
        randY = Math.floor(randY);


        return [randX, randY];
   }
    return {
        addShip,
        computerMoves,
        name,
        addPlayerName,
        recordedMoves
    }
};