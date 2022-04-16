
function sum(a, b) {
    return a + b;
  }
  module.exports = sum;

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
    let arrayPositions = [];
    let sunk = false;

    //Function for determining positions
    function initPositions(pos1, pos2, pos3, pos4){
        arrayPositions.append(pos1);
        arrayPositions.append(pos2);
        arrayPositions.append(pos3);
        arrayPositions.append(pos4);

        return arrayPositions;
    }

    //Function for calculating if it's been hit

    //Function for calculating if it's sunk

    //
    
    return {
        length,
        arrayPositions,
        sunk,
        hit,
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

const gameboard = ({
    //Function that places ships at specific coordinates

    //Function that receiveAttack()

    //Function that tracks missed shots or hit shots

    //Function that reports if all ships for a player is sunk or not
})();


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