
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


function createTable(){
    let table = document.createElement("table");
    table.id = "libraryTable";
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
            cell.appendChild(textNode);
            row.appendChild(cell);
            
        })


        table.appendChild(row);
       

    });

    myTable.appendChild(table);
}





// row.appendChild(btn);
createTable();

//
var entry = document.getElementById("entry");
entry.addEventListener("click", addToTable);

var row = 1;

function addToTable(){
    var author = document.getElementById("bookName").value;
    var title = document.getElementById("bookTitle").value;
    var length = document.getElementById("bookPageLen").value;
    var read = document.getElementById("bookReadStatus").value;

    if (!author || !title || !length || !read){
        alert("please fill in all the boxes");
        return;
    }

    var libraryTable = document.getElementById("libraryTable");
    var newRow = libraryTable.insertRow(-1);

    var cell1 = newRow.insertCell(0);
    var cell2 = newRow.insertCell(1);
    var cell3 = newRow.insertCell(2);
    var cell4 = newRow.insertCell(3);

    cell1.innerHTML = author;
    cell2.innerHTML = title;
    cell3.innerHTML = length;
    cell4.innerHTML= read;
}

function div_show(){
    document.getElementById("container").style.display = "block";
}

function div_hide(){
    document.getElementById("container").style.display = "none";
}

