

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


