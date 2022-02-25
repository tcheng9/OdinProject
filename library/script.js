let bookArr = [];


function Book(name, author, length, read, button1, button2, button3){
             this.name = name;
             this.author = author;
             this.length = length;
             this.read = read;
             this.button1 = button1; //placeholder
             this.button2 = button2; //placeholder
             this.button3 = button3; //placeholder
      };
// Calling a new book
let newBook = new Book("Harry potter", "JK Rowling", "362", "true");


// Thinking ---> 
//1. Make book object
let book1 = new Book("tommy", "cheng", "312", "Didn't read", "1", "2","3");
//2. Push book obj into the array

bookArr.push(book1);



let book2 = new Book("hing", "cheng", "634", "Read","1", "2","3");
//2. Push book obj into the array

bookArr.push(book2);

let book3 = new Book("wendy", "cheng", "634", "Read", "1", "2","3");
//2. Push book obj into the array

bookArr.push(book3);
//3. Getting info from the book object
// bookArr[0].info;

//Correct thinking?? -> How to test? 
//ANSWER: Pull up the html page that it's connected to
    //-> Connect html to this js page



// FUNCTION TO LOOP THROUGH AND PRINT/RETURN ARRAY OBJECTS


function createTable(bookArr){
    var rows = bookArr;
    var html = '<table>';
    html += '<tr>';
    for (var j in rows[0]){
        html += '<th>' + j + '</th>';
    }

    html += '</tr>';

    for (var i =0; i< rows.length ;i++){
        html += '<tr>';
        for (var j in rows[i]){
            html += '<td>' + rows[i][j] + '</td>';
        }
        html += '</tr>';
        
    }
    html += '</table>';
    document.getElementById("container").innerHTML = html;

}
`${}`
//TEST TO CHANGE AN OBJECT'S VALUE AND REDISPLAY THE TABLE
createTable(bookArr);
console.log(bookArr[0].button1);
bookArr[0].button1 = 2;
console.log(bookArr[0].button1);

function alterRead(readStatus){
    /*
    If readStatus == "read"{
        switch object read value to "not read"
    } else { //Thisi s the "not read" TO "read" scenario
        switch object's read value to "read"
    }
    */
}


//Detecting if a button was click

//Example:

// const element = document.getElementById("profile_title");

// element.addEventListener("click", () => {
//     alert("hello");
// });

//Creating a button element

function makeBtn(){
    let btn = document.createElement("button");
    btn.innerHTML = "click me";
    btn.addEventListener("click", function(){
        alert("Button is clicked");
    })
};

bookArr[0].button1 = makeBtn();

function generateTableHead(table, data) {
    let thead = table.createTHead();
    let row = thead.insertRow();
    for (let key of data) {
        let th = document.createElement("th");
        let text = document.createTextNode(key);
        th.appendChild(text);
        row.appendChild(th);
    }
}
let table = document.querySelector("table");
let data = Object.keys(mountains[0]);
generateTableHead(table, data);
  
