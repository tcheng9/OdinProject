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

module.exports.ship = ship;

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
        return coordinates;
    }

    //Function that tracks missed shots or hit shots
    function addToTracker(x,y){
        let newCoordinates = [x,y];
        coordinatesTracker.push(newCoordinates);
        return coordinatesTracker;
    }
    //Function that reports if all ships for a player is sunk or not
    return{
        receiveAttack,
        addShip,
        returnCoordinates,
        coordinatesTracker,
        addToTracker,
    }
})();

module.exports.gameboard = gameboard;
////////////////////////////////////////////////////////////////////
//Player function that should be a repeatable function

function createPlayer(x,y,z){
    //Functions needed in createPlayer();
    /*
        1. Function that holds an array of it's ships?
        2. "computer" player should make random moves.

    */
    return {
        x,
        y,
        z
    }
}

////////////////////////////////////////////////////////////////////
//Function / thoughts on how will game function work and use other functions

function gameLogic(){
    //Should interact with HTML/CSS as well as internal JS

    //Function 1: Should introduce taking turns with each player

    //Function 2: implements the HTML of the game board

    //Function 3: function that takes in user's input to attack the opponent's ship

    //Function 4Check if all of a player's ship is sunk, if so, declare that player the winner    


}

//////////////////////////////////////////////////////////////////////////
//Summary of functions each function needs

/*
Ship: 
    - Length
    - some way to track if the ship has been hit and keep it as such
    - Whether the ship is sunk or not
    - hit() function to take in hits and mark it as hit
    - isSunk() to track if all positions are hit or not
Question: how to track hits?
-Array that has coordinates BUT if hit, turn that coordinate to "x" or "hit" or some sort of hit marker

Gameboad:
    - receiveAttack() -> take in attack, check if any ships are at that position, mark it as hit or not hit if there is/isn't a ship
    - tracker of all attacks made
    - track if all ships of a player is sunk -> declare winner if so

Player:
    - Let each player takes turns
    - Computer needs to make random moves

Main game loop:
    - Builds battleship HTML / builds the board
    - setup players and ships on the board
    - Logic to take in user's inputs for making an attack
    - Logic to take turn


Question: where does a computer's attacks logic go?

Gameboard VS. Gameloop??

Gameboard:
1. should place specific ships at specific coordinates by calling the ship factory function
2, receiveAttack function
3. Track missed attacks so they can be properly displayed

Gameloop:
1. Creates UI
2. should setup players and gameboard and ships
3. HTML implementation to display both player's boards
4. game loop should go turn by turn based on other objects. No functions inside the game loop for this
5. Create a condition that once all ships have been sunk, the game should end and declare a winner
*/

