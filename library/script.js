<<<<<<< HEAD


const bookArr = [];

/* Example of making an array */

function bookMaker(title, author, length, read){
    this.title = title;
    this.author = author;
    this.length = length;
    this.read = read;
}

let headers = ['title', 'author', 'page count', 'read?'];

let book1 = new bookMaker("harry potter 1", "jk rowling", 342, true);
let book2 = new bookMaker("GoT", "Dude", "645", false);
let book3 = new bookMaker("Witcher 1", "writer", "432", false);

bookArr.push(book1, book2, book3);

console.log(bookArr);

let myTable = document.querySelector("#table");

let btn = document.createElement("input");
btn.type = "button";
btn.className = "btn";
btn.value = 451;

let counter = 0;

function createTable(){
    let table = document.createElement("table");
    let headerRow = document.createElement('tr');

    headers.forEach(headElem => {
        let header = document.createElement('th');
        let textNode = document.createTextNode(headElem);
        header.append(textNode);
        headerRow.appendChild(header);
    });

    table.appendChild(headerRow);

    bookArr.forEach( emp => {
        let row = document.createElement('tr');

        Object.values(emp).forEach(text => {
            let cell  = document.createElement('td');
            let textNode = document.createTextNode(text);
            cell.className = counter;
            cell.appendChild(textNode);
            row.appendChild(cell);
            row.appendChild(btn);
        })
        counter = counter + 1;
        table.appendChild(row);
        

    });

    
    
    myTable.appendChild(table);

    
    
}
// var btn = document.createElement('input');
// btn.type = "button";
// btn.className = "btn";
// btn.value = "451";


// row.appendChild(btn);
createTable();


||||||| a743047
=======
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
  
>>>>>>> bee06ace8a5d85e3731017873227e56832974291
