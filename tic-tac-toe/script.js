//Gameboard module
var gameBoard = (function(innerVals) {
    //Initial board setup - 3x3 matrix
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
            let div = document.getElementById("sq"+counter);
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
    // document.querySelectorAll('.boardCell').forEach(item => {
    //     item.addEventListener("click", event => {
            
    //         console.log(item.getAttribute("id"));
    //     })
    // })
    
    
   
    function gameLogic(){
        let turnCounter = 0;
        let currentPlayer = 0;
        let player1 = createPlayer("tommy", "1", "O");
        let player2 = createPlayer("michael", "2", "X");
        
        document.querySelectorAll('.boardCell').forEach(item => {
            item.addEventListener("click", event => {
                if (checkWinner() == true){
                    
                    return;
                }
              
                if (turnCounter < 9 && item.textContent != "X" && item.textContent != "O"){
                    if (turnCounter % 2 == 0){
                        item.textContent = player1.getMarker;
                        turnCounter++;
                        checkWinner();
                        
                    } else {
                        item.textContent = player2.getMarker;
                        turnCounter++;
                        checkWinner();
                        
                    }
                   
                } else if (checkWinner() == true){
                    return;
                }
                
                 
        })
        });
        
    }
    
    
    gameLogic();

    function checkWinner(){
        //Player 1 win conditions
        //Diagonals for player1
        if (
            board[0][0].textContent == "O" && board[1][1].textContent == "O" && board[2][2].textContent == "O" ||
            board[0][2].textContent == "O" && board[1][1].textContent == "O" && board[2][0].textContent == "O" ||
            board[0][0].textContent == "O" && board[1][0].textContent == "O" && board[2][0].textContent == "O" ||
            board[0][1].textContent == "O" && board[1][1].textContent == "O" && board[2][1].textContent == "O" ||
            board[0][2].textContent == "O" && board[1][2].textContent == "O" && board[2][2].textContent == "O" ||
            board[0][0].textContent == "O" && board[0][1].textContent == "O" && board[0][2].textContent == "O" ||
            board[1][0].textContent == "O" && board[1][1].textContent == "O" && board[1][2].textContent == "O" ||
            board[2][0].textContent == "O" && board[2][1].textContent == "O" && board[2][2].textContent == "O"
            ){
            console.log("Player 1 wins!");
            return true;
        }

      
    
        //Player 2 win conditions
   
            if (
                board[0][0].textContent == "X" && board[1][1].textContent == "X" && board[2][2].textContent == "X" ||
                board[0][2].textContent == "X" && board[1][1].textContent == "X" && board[2][0].textContent == "X" ||
                board[0][0].textContent == "X" && board[1][0].textContent == "X" && board[2][0].textContent == "X" ||
                board[0][1].textContent == "X" && board[1][1].textContent == "X" && board[2][1].textContent == "X"||
                board[0][2].textContent == "X" && board[1][2].textContent == "X" && board[2][2].textContent == "X" ||
                board[0][0].textContent == "X" && board[0][1].textContent == "X" && board[0][2].textContent == "X" ||
                board[1][0].textContent == "X" && board[1][1].textContent == "X" && board[1][2].textContent == "X"||
                board[2][0].textContent == "X" && board[2][1].textContent == "X" && board[2][2].textContent == "X"
                ){
                console.log("Player 2 wins!");
                return true;
            }
        
       
            //Horizontals for player1
      
    }

    

    function resetGame(){
        
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

