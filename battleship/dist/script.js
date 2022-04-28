//Exaple
// function sum(a, b) {
//     return a + b;
//   }
//   module.exports = sum;




  /*
  Ship factory function:
    1. Ship object includes
        a. length
        b. where they have been hit 
        c. whether they are sunk of not (boolean)
    2. Test only the public interface
        a. methods or properties that are used outside of the 'ship' object need unit test
    3. hit() function
        a. function takes in a number and marks that position as hit
    4. isSunk() function  
        a. calculate it  based on their length and whether all of their positons are 'hit'
*/

const ship = (() => {
    let length = 0;
    let shipCoordinates = [];
    // let sunk = false;

    //Function for determining positions
    function addCoordinates(x,y){
        let coordinates = [x,y];

        shipCoordinates.push(coordinates);
        return shipCoordinates
    }

    //function to return a ship's coordinates
    function getCoordinates(){
        return shipCoordinates;
    }
    //Function for calculating if it's been hit
    function isHit(x,y){
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
    }
    //Function for calculating if it's sunk
    function isSunk(){
        length = shipCoordinates.length;
        
        for (let i = 0; i < length; i++){
            let shipX = shipCoordinates[i][0];
             let shipY = shipCoordinates[i][1];

            if (shipX != 'hit' && shipY != 'hit'){
                return 'not sunk';
            }
        }

        return 'sunk';
    }
   
    
    return {
        length,
        shipCoordinates,
        addCoordinates,
        getCoordinates,
        isHit,
        isSunk,
    }
})();

//module.exports.ship = ship;

//Mock testing ideas for ship()
/*
    write a test that (1)takes in coordinates , 
    - Takes in coordinate
    - Appends them to coordinatesArray
    -returns array to be used for later game logic as needed

    (2) checks if it's been hit and reports that back someway and
        -INPUT: coordinate
        - If coordinates matches one of the ones in the array, return hit
        -OUTPUT: return hit or not
     (3) reports if it's been sunk
        -INPUT: arrayPoisitions
        -constantly check if all arrayPositions are hit
        -OUTPUT: return sunk or not sunk status
*/

///////////////////////////////////////////////////////////////
//Gameboar funciton
/*
Gameboard factory:
    1. Gameboard should be able to place ships at specific coordinates by calling the ship's factory function
    2. receiveAttack() function
        a. Takes a pair of coordinates
        b. determine if the ship was attacked or not
        c. Send a hit function to the correct ship OR record coordinates of missed shot
    3. Game should track missed attack to display them properly
    4. Game should be able to report whether or not all ships have been sunk for a player
*/

const gameboard = ((ship) => {
    let coordinates = [];
    let ships = [];
    let coordinatesTracker = [];
    //Function that adds a ship to the ships
    function addShip(ship){
        ships.push(ship);
    }

    //Function that places ships at specific coordinates
    function returnCoordinates(ships){
        for (let i = 0; i < ships.length; i++){
            ships[i].getCoordinates();
        }
    }
    //Function that receiveAttack()
    function receiveAttack(x,y){
        let newCoordinates = [x,y];
        coordinates.push(newCoordinates);
        ship.isHit(x,y);
        return coordinates;
    }

    //Function that tracks missed shots or hit shots
    function addToTracker(x,y){
        let newCoordinates = [x,y];
        coordinatesTracker.push(newCoordinates);
        return coordinatesTracker;
    }
    //Function that reports if all ships for a player is sunk or not
    //This function tracks the 2 player's shipyards. If all of one's player's ships are sunk then the other player wins
    //NEEEEEEEEEEEED TO WORK ON THIS ONE
    function shipStatuses(shipyard1,shipyard2){
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
    
    return{
        receiveAttack,
        addShip,
        returnCoordinates,
        coordinatesTracker,
        addToTracker,
    }
})();

//module.exports.gameboard = gameboard;
////////////////////////////////////////////////////////////////////
//Player function that should be a repeatable function

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
    /*If the player is registed as a computer,
        make a random move for x and y within the length of the array

        Note: check if move is already made in the array
    */
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
}

//module.exports.createPlayer = createPlayer;
////////////////////////////////////////////////////////////////////
//Function / thoughts on how will game function work and use other functions

const gameLogic = (() => {
    //Should interact with HTML/CSS as well as internal JS

    //Function 1: Should introduce taking turns with each player

    //Function 2: implements the HTML of the game board

    //Function 3: function that takes in user's input to attack the opponent's ship

    //Function 4Check if all of a player's ship is sunk, if so, declare that player the winner    
    
    //Creating a board function (not sure if this should be unique to individual or what)
    function createBoard(parentID) {
        let currentGrid = document.getElementById(parentID);
        let lenX = 10;
        let lenY = 10;

        for (let i = 0; i < lenX; i++){
            for (let j = 0; j < lenY; j++){
                let cell = document.createElement("div");
                cell.className = "cell";
                cell.id = `${i}` + `${j}` + `${parentID}`
                cell.innerHTML = "test";
                
                //Css style of cells

                cell.style.border = 'solid black 1px';
                
                cell.addEventListener('click', () => {
                    console.log(`${i}` + `${j}` + `${parentID}`);
                })
                currentGrid.appendChild(cell);
            }
        }
        }
    
    
    function createStartBtn(parentID){
        let btn = document. createElement("button");
        btn.innerHTML = "Start Game";
        btn.className = "startBtn";
        btn.style.position = "absolute";
        btn.style.top = "23%";
        btn.style.left = "65%";
        
       
        //Eventlistener to start game + change oopacity of grid2
        btn.addEventListener('click', (e) => {
            let cpuGrid = document.getElementById('grid2');
            cpuGrid.style.opacity = 1;
            btn.style.opacity = 0;
            console.log("pressed");
        });

        document.body.append(btn);
        



    }
    return { 
        createBoard,
        createStartBtn,
    }  

})();

gameLogic.createBoard("grid1");
gameLogic.createBoard('grid2');
gameLogic.createStartBtn('grid2');

/*
Building gameloop requirements/steps:
1. Build HTML board
2. On one side, display my actual board, on the other side, display a CPU board
    a. This is what I need to focus on as I'm most confused about this
3. Logic to let player's click on the board and send coordinates
4. Logic to decide winner
5. Logic to let player decide where their ships go
6. Button to start game
7. Opponent's board + play button on top of each other,
    opponent's board is transparent until game starts
*/

/*
Steps for creating a grid/gameboard
1. Make a parent div
2. create a square var

*/

//Testing drag and drop element

// Make the DIV element draggable:
//make the test draggable
document.getElementById("test").setAttribute("draggable", true);

//now what should happen when the test square is dragged
document.getElementById("test").addEventListener("dragstart", movingCell);

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
    event.dataTransfer.dropEffect = "move";
    console.log('allowdrop');
};

//3rd drop, let all squares ondrop to get draggable elements

for (let i = 0; i < cellsDroppable.length; i++){
    cellsDroppable[i].addEventListener("drop", drop);
}

function drop(ev){
    ev.preventDefault();

    var data = ev.dataTransfer.getData("text");

    ev.target.appendChild(document.getElementById(data));

}