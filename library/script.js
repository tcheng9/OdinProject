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
