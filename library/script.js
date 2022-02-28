
const bookArr = [];

/* Example of making an array */

function bookMaker(title, author, length, read){
    this.title = title;
    this.author = author;
    this.length = length;
    this.read = read;
}

function addBook(book){
    bookArr.push(book);
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
        row.className = counter;

        Object.values(emp).forEach(text => {
            let cell  = document.createElement('td');
            let textNode = document.createTextNode(text);
            cell.appendChild(textNode);
            row.appendChild(cell);
            
        })

        //Function to create buttons -> ISSUE: nested within the bookArr loop. I should make my another loop for this
        let cell = document.createElement('td');
        let btn = document.createElement("input");
        btn.type = "button";
        btn.className = "btn" + counter;
        btn.value = 451;

        cell.append(btn);
        

        row.appendChild(btn);
        counter = counter + 1;
        table.appendChild(row);
       

    });

    myTable.appendChild(table);
}




// row.appendChild(btn);
createTable();

//When button is clicked, I want it to run a functionto run a popup form

// var form = document.getElementById("formPopUp");
// btn.addEventListener("click", openForm());


function openForm(){
    document.getElementById("myForm").style.display = "block";
}

function closeForm(){
    document.getElementById("myForm").style.display = "none";
}

//On form submit click, run this function

/* Document select all form values and run functions to turn
// into a book object and append to array and remake table
*/
function onSubmit(){
    let formAuthor = document.myForm.author.value;
    let formTitle = document.myForm.title.value;
    let formPages = document.myForm.pages.value;
    let formReadStatus = document.myForm.readStatus.value;

    let book = bookMaker(formAuthor, formTitle, formPages, formReadStatus);
    
    
    addBook(book);
    createTable();
}