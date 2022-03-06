//Gameboard module
var gameBoard = (function(innerVals) {
    //Creating tic tac toe board 
    // let board = [
    //             ["00", "01", "02"],
    //             ["10", "11", "12"],
    //             ["20", "21", "22"]
    //         ];
   
    let board = [
        ["", "", ""],
        ["", "", ""],
        ["", "", ""]
    ];

    //Loop through the board array and connect them to their 
    //corresponding position in the HTML div
    let counter = 1; 
    for (let i = 0; i < 3; i++){
        for (let j = 0; j < 3; j++){
            let div = document.getElementById(counter);
            board[i][j] = div;
            counter++;
        }
    }
    
    function callBoard(){
        let counter = 1; 
        for (let i = 0; i < 3; i++){
            for (let j = 0; j < 3; j++){
                console.log(board[i][j]);
            }
        }
    }
    
    //Code to create a button for each div
    counter = 1; 
    for (let i = 0; i < 3; i++){
        for (let j = 0; j < 3; j++){
            //Create button inside so it's a "new" one each time
            var button = document.createElement("BUTTON");
            button.innerHTML = "test" + counter;
            
            board[i][j].appendChild(button);
            counter++;
        };
    };

    //Create a listener event for each button
    document.querySelectorAll('.boardCell').forEach(item => {
        item.addEventListener("click", event => {
            
            console.log(item.getAttribute("id"));
        })
    })
    
    function getPlayer(){
        let currentPlayer = 0;
        let player1 = createPlayer("tommy", "1", "o");
        let player2 = createPlayer("michael", "2", "x");

        
    }
    //Creating a way to create turns
    function getTurn(){
        //Creating players
        let curreentPlayer = 0;
        let player1 = createPlayer("tommy", "1", "O");
        let player2 = createPlayer("michael", "2", "x");

        let turnCounter = 0;
        
        // while (turnCounter < 9){
        
        //     if (turnCounter % 2 == 0){
        //         //It's player one's marker
        //     } else {
        //         //It's player 2's marker
        //     }
        //     turnCounter++;
        

    }

    //Returning factory functions
    return {
        getBoard: board,
        boardValues: callBoard()
        
        };
    }
)();

//Creating a button within each id


// let counter = 1; 
// for (let i = 0; i < 3; i++){
//     for (let j = 0; j < 3; j++){
//         //Create button inside so it's a "new" one each time
//         var button = document.createElement("BUTTON");
//         button.innerHTML = "test" + counter;
//         button.addEventListener
//         gameBoard.getBoard[i][j].appendChild(button);
//         counter++;
//     }
// }


// var divTest = document.getElementById("5");
// var button = document.createElement("BUTTON");
// button.innerHTML = "test";



//Testing calling the board as a whole + specific positions


//Building a factory function for players
//Example: 
// function createPerson(firstName, lastName){
//     return {
//         firstName: firstName,
//         lastName: lastName,
//         getFullName(){
//             return firstName + " " + lastName;
//         },
//     };
// }

//Function to createPlayer (and future methods/properties a player will need)
function createPlayer(firstName,lastName, marker){
    //Getter function to return name
    function getFullName(){
        return firstName + " " + lastName;
    }

    function getMarker(){
        return marker;
    };
    //properties/functions this variable will have
    return {
        firstName: firstName,
        lastName: lastName,
        getFullName, //Equivalent to getFullName: getFullName (fn)
        getMarker : getMarker()
    }
}

//Function to control game rules

//Testing player's marker
let player1 = createPlayer("tommy", "cheng", "x");
let player2 = createPlayer("tyrion", "lannister", "o");
console.log(player1.getMarker);
console.log(player2.getMarker);