//Initial todo list for a task
//QUESTION: is this for a todo LIST or a todo ITEM? 
//ANSWER: todo item I think. -> Make multiple in a todo 
const todoFactory = (title, desc, dueDate, priority, notes, completedStatus) => {
    

    return {
        getTitle: title,
        getDesc : desc,
        getDueDate:dueDate,
        getPriority: priority, 
        getNotes:notes,
        getStatus: completedStatus,

    }
}

//Project function that encompasses one whole project/generic tasks
//QUESTION: What shold the hierarchy be for tasks?
//ANSWER: Project -> Generic Tasks -> Items??
//i.e 

const project = (name, completedStatus) => {
    let todoArray = [];
    
    //Add an item to the existing list
    function addItem(todoItem){
        todoArray.push(todoItem);
    }
    
    //Print out the list to check what is contained inside the project factory function
    function getList(){
        for (let i = 0; i < todoArray.length; i++){
            console.log(todoArray[i]);
        }
    }
    return {
        
        addItem: addItem,
        getList: getList,
        todoArray:todoArray,
        name: name,
        completedStatus:completedStatus, 
    }
}
//Initial variables to check
//Initializing to do items and the parent project factory
let todo1 = todoFactory("task1");
let todo2 = todoFactory("task2");
let list1 = todoFactory("test1", "this is a test for 1");
let project1 = project();


//Add an item to the parent project
project1.addItem(todo1);
project1.addItem(todo2);
project1.addItem(list1);

//Print the list backout to check if it's working
//console.log(project1);
// console.log(project1.todoArray[0].getTitle);
// console.log(project1);

// console.log("break");

//Parent container to contain and eventually display all projects
const allProjects = () => {
    let allProjectsArr = [];
    function appendProject(project){
        allProjectsArr.push(project);
    }

    function printProjects(){
        for (let i = 0; i < allProjectsArr.length; i++){
            console.log(allProjectsArr[i]);
        }
    }
    return {
        allProjectsArr,
        appendProject: appendProject,
        printProjects:printProjects,
    }
}

let project2 = project("prj2");
let project3 = project("proj3");

let parentProject = allProjects();
parentProject.appendProject(project1);
parentProject.appendProject(project2);
parentProject.appendProject(project3);


console.log("foreach function");

//PROBLEM FOR LATER: Maybe this should be inside a "build logic/board factory function"

// function displayProjBtn() {
//     let containerDiv = document.getElementById("projectContainer");
   
//     //Steps needed
//     // Create btns
//     //Iterate through the project arr to get project's name

//     //Iterate through all the project names and create a div
//     parentProject.allProjectsArr.forEach(number => {
//         //This is to go through and get each project's name and append it to the div container
//         let divHolder = document.createElement("div");
//         divHolder.id = "gridSq";
//         divHolder.className = "square";

//         let btn = document.createElement("button");
//         btn.innerHTML = number.name;
//         btn.id = "gridBtn";
//         divHolder.appendChild(btn);

        
//         containerDiv.appendChild(divHolder);

//         //Let's try to add a button within this div

        
//     });

//     //Create a btn within each div


// }


// Next step: Each button should open/hide another box of text
// WHICH will represent the todolists that open up when a project is clicked



let siteLogic = () => {
    function displayProjBtn() {
        let containerDiv = document.getElementById("projectContainer");
        
        //Steps needed
        // Create btns
        //Iterate through the project arr to get project's name
    
        //Iterate through all the project names and create a div
        console.log('inner');
        parentProject.allProjectsArr.forEach(number => {
            //This is to go through and get each project's name and append it to the div container
            let divHolder = document.createElement("div");
            divHolder.id = "gridSq";
            divHolder.className = "square";
    
            let btn = document.createElement("button");
            btn.innerHTML = number.name;
            btn.id = "gridBtn";
            btn.className = "button";
            divHolder.appendChild(btn);
    
            
            containerDiv.appendChild(divHolder);
    
            //Let's try to add a button within this div 
        });
    }

    //For each button, add a toggle button effect to show/hide a div
    function btnToggle(){
        let targetDiv = document.getElementById("testHiding");
        let btns = document.getElementsByClassName("button");
        for (var i = 0 ; i < btns.length; i++){
            btns[i].addEventListener("click", function (){
                //Function 
                if (targetDiv.style.display != "none"){
                    targetDiv.style.display = "none";
                } else {
                    targetDiv.style.display = "block";
                }
            })
        }

    }

    // This function will aim to create a div that contains all todos
    //based on the button that is clicked
    function displayTodos

    return {
        displayProjBtn: displayProjBtn,
        btnToggle:btnToggle,

    }
}

let site = siteLogic();
site.displayProjBtn();
site.btnToggle();

// Next steps:
// 1. For each project, create a div w/ that class name so there will be divs unique to each project
// 2. Turn to do  lists into an html list
