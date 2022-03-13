
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

    var newBook = bookMaker(author, title, length, read);
    addBook(newBook);
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
    cell4.id = "readStatusx"
    var cell5 = newRow.insertCell(4);
    var cell6 = newRow.insertCell(5);
    //Creating a button
    let btn = createButton("delete", "deleteBtn", "Delete");
    btn.addEventListener("click", deleteRow);
    
    let btn2 = createButton("changeReadStatus", "readStat", "Change status");
    btn2.addEventListener("click", readStatusChange);

    cell1.innerHTML = author;
    cell2.innerHTML = title;
    cell3.innerHTML = length;
    cell4.innerHTML= read;
    cell5.appendChild(btn);
    cell6.appendChild(btn2);
    
}

function createButton(buttonUse, className,innerText){
    let btn = document.createElement("button");
    btn.type = "button" + buttonUse;
    btn.className = className;
    btn.innerHTML = innerText;
   
    return btn;
}

function deleteRow(e){
    if (!e.target.classList.contains("deleteBtn")){
        return;
    }

    const btn = e.target;
    btn.closest("tr").remove();
}


function readStatusChange(e){
    if (!e.target.classList.contains("buttonchangeReadStatus")){
        return;
    }
    console.log("working");
    const btn = e.target;
    btn.closest("td").innerHTML = "100";

}

function div_show(){
    document.getElementById("container").style.display = "block";
}

function div_hide(){
    document.getElementById("container").style.display = "none";
}

