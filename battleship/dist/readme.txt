4.12.22
--------------------------------------------------------------------------------
Project steps:
0. Requirements gathering
1. Figure out how to do TDD
2. Write tests
3. Write functions

--------------------------------------------------------------------------------

Project Requirements Notes

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


--------------------------------------------------------------------------------

Writing TDD
 - Set up a testing file
Notes:
1. Use matchers to test values in different ways
2. Use mock functions to test links between codes 
    a. Mocks allow you to fake actual implementation between 2 codes 
    b. i.e if you have function a and function b AND function b relies on a, 
        you can use a mock to more cleanly test expected values of function a that would go into function b
3. I guess for each function, write out if a function's properties OR function's methods will need a MATCH or a MOCk


Ship tests
Ship factory function:
    1. Ship object properties ------> Run internal test to call all properties I guess?
        a. length
        b. where they have been hit 
        c. whether they are sunk of not (boolean)
    2. Test only the public interface ------> This is need a mock function I guess? (i.e game logic to call the ship) 
        a. methods or properties that are used outside of the 'ship' object need unit test
    3. hit() function ------> I think mock? take
        a. function takes in a number and marks that position as hit
    4. isSunk() function  -----> Mock I guess
        a. calculate it  based on their length and whether all of their positons are 'hit'



Mocks are the general tool -> Mock a test for X function. Matchers are under that umbrella to 
--------------------------------------------------------------------------------
Mocks needed:
(ONLY FUNCTIONS THAT ARE USED OUTSIDE OF THE "x" Object NEED TO BE TESTED)
1. Ship needs mocks for:
    a. hit()
    b. isSunk()
    c. any other methods used outside the function

2. Gameboard
    a. receiveAttack()
    b. trackAttacks()
    c. trackShipStatus()

3. Player(s)
    a. playerMoves
    b. track computer's moves

4. UI / Main game loop
    a. 

 
--------------------------------------------------------------------------------
 Ways to use mocks
 --------------------------------------------------------------------------------

1. Mock a function of a class
2. Mock an exported function or constant
3. Mock third-party library or custom module

4/14/22
1. Mocks help test what you expect to get in each part of a process flow
    a. need to have pretty clear steps between calling objects to use in other objects.
    b. Don't necessarily need to test internals


-----------
4-22-22

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


//Gameloop needs:
/*
    Questions: 
    1. How should the gameboards be displayed?
        ANSWER: player 1's board is seen. Player 2's board is invisible. 
        When you click on player 2's board, it registers as a move u want to make
    2. How to let players pick their ship locations?
        ANSWER: Have preset ships, let users drag and drop them to where they want them to be
    3. Marking hits:
        ANSWER: When you get a hit, it turns into an "X" and when you miss it turns into a "O"
    4. How to connect HTML to gameboard() function?
    5. Should gameboard create HTML?
//Note: Maybe gameboard should have a hits and missed array to match to logos
*/
