4.12.22 - Project Requirements Notes
--------------------------------------------------------------------------------
Theme: Use TDD concept. All functions should be tested via tests, not console.log() runs
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


Gameboard factory:
    1. Gameboard should be able to place ships at specific coordinates by calling the ship's factory function
    2. receiveAttack() function
        a. Takes a pair of coordinates
        b. determine if the ship was attacked or not
        c. Send a hit function to the correct ship OR record coordinates of missed shot
    3. Game should track missed attack to display them properly
    4. Game should be able to report whether or not all ships have been sunk for a player

Player object/function(??):
    1. player take turns playing the game by attacking the enemy Gameboard
    2. Computer makes random moves


Main game loop AND module for DOM interaction
    1. Build battleship UI.
    2. Game loop should setup a new game by creating Players and gameboards
    3. Ship positions
        a. First hard code it
        b. Later craft a system to allow players to place their ships
    4. HTML implementation of gameboard
        a. Need a method to render the gameboard
        b. take user input for attacking
            i. Attacks, let user click on a coordinate in the enemy gameboard
    5. Game loop should step through game turn by turn using only methods from other objects
        a. if at any point, you are tempted to write a new function inside the game loop, step back and 
            figure out which class or module that function should belong to
    6. Create conditions so that the game ends once one player's ships have all been sunk
        a. should be inside game module

Finish up:
    1. Options for letting user place their ships: 
        a. type coordinates for ships
        b. investigate drag and drop implementation
    2. Polish intelligence of coimputer to having it try adjacent shots afget getting a 'hit'

Next steps:
1. Figure out how to do TDD
2. 






    
 


     