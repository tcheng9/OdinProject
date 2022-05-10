//Initial todo list for a task
//QUESTION: is this for a todo LIST or a todo ITEM? 
//ANSWER: todo item I think. -> Make multiple in a todo 
const todoItem = (title, desc, dueDate, priority, notes, completedStatus) => {
    

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
    let todoList = [];
    
    //Add an item to the existing list
    function addItem(todoItem){
        todoList.push(todoItem);
    }
    
    //Print out the list to check what is contained inside the project factory function
    function getList(){
        for (let i = 0; i < todoList.length; i++){
            console.log(todoList[i]);
        }
    }
    return {
        
        addItem: addItem,
        getList: getList,
        todoList:todoList,
        name: name,
        completedStatus:completedStatus, 
    }
}
//Initial variables to check
//Initializing to do items and the parent project factory
let todo1 = todoItem("task1");
let todo2 = todoItem("task2");
let list1 = todoItem("test1", "this is a test for 1");

let project1 = project();
//Add an item to the parent project
project1.addItem(todo1);
project1.addItem(todo2);
project1.addItem(list1);
project1.addItem("tests");
project1.addItem("tests2");

//Printing out the specific value at each todoList
console.log(project1.todoList[0].getTitle);
console.log(project1.todoList[1].getTitle);
console.log(project1.todoList[2].getTitle);



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

console.log(project1);
console.log(project2);
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
        let projectsArr = parentProject.allProjectsArr;
        //Steps needed
        // Create btns
        //Iterate through the project arr to get project's name
        
        //Iterate through all the project names and create a div
        for (let i = 0; i < projectsArr.length; i++){
            //Creating a div for the button
            let divHolder = document.createElement("div");
            divHolder.id = "gridSq";
            divHolder.className = "square";
            

            //Creating a button
            let btn = document.createElement("button");
            btn.innerHTML = projectsArr[i].name;
            btn.id = "gridBtn";
            btn.className = "button";
            divHolder.appendChild(btn);
    
            
            containerDiv.appendChild(divHolder);
        }


        
    }

    

    // This function will aim to create a div that contains all todos
    //based on the button that is clicked
   function createProjDiv(){
        // parentProject.allProjectsArr.forEach(item => {
        //     let projDiv = document.createElement("div"); 
        //     projDiv.id = item.name;
        //     projDiv.className = "projDiv";
        //     projDiv.innerHTML = item.name;
        //     projDiv.style.display = "none";
        //     document.body.appendChild(projDiv);
            
        // })

        let projectsArr = parentProject.allProjectsArr;
        let todoDiv = document.getElementById("todoContainer");
        //NOTE: Get the div THEN APPEND ALL PROJ DIVS TO THIS ONE
        //Steps needed
        // Create btns
        //Iterate through the project arr to get project's name
        
        //Iterate through all the project names and create a div
        for (let i = 0; i < projectsArr.length; i++){
            let projDiv = document.createElement("div"); 
            projDiv.id = projectsArr[i].name;
            projDiv.className = "projDiv";
            projDiv.innerHTML = projectsArr[i].name;
            projDiv.style.display = "none";

            if (i == 0){
                projDiv.style.display = "block";
            }

            todoDiv.appendChild(projDiv);     
        }
   }
   //Testing button toggle based on project divs
   function projBtnToggle(){
        let projDivs = document.getElementsByClassName("projDiv");
        let btns = document.getElementsByClassName("button");

        for (var i = 0; i < btns.length; i++){
            let temp = projDivs[i];
            btns[i].addEventListener("click", function(){
                if (temp.style.display != "none"){
                    temp.style.display = "none";
                    console.log("running inside");
                } else {
                    temp.style.display = "block";
                    console.log("running inside");
                }
            })
        }
    }

    return {
        displayProjBtn: displayProjBtn,
        createProjDiv:createProjDiv,
        projBtnToggle:projBtnToggle,

    }
}

let site = siteLogic();
site.displayProjBtn();
site.createProjDiv();
site.projBtnToggle();

// Next steps:
// 1. For each project, create a div w/ that class name so there will be divs unique to each project

// 2. Turn to do  lists into an html list

