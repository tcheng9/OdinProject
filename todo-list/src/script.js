//Initial todo list for a task
//QUESTION: is this for a todo LIST or a todo ITEM? 
//ANSWER: todo item I think. -> Make multiple in a todo 
const todoFactory = (title, desc, dueDate, priority, notes, completedStatus) => {
    
    function getTitle(title){
        return title;
    }

    return {
        getTitle: getTitle,
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
let todo1 = todoFactory("task1", "desc1", 'dueDate1', 'prio1');
let todo2 = todoFactory("task2", 'desc2', 'dueDate2', 'prio2');
let list1 = todoFactory("task3", "tdesc3", 'prio3');
let project1 = project("proj1");


//Add an item to the parent project
project1.addItem(todo1);
project1.addItem(todo2);
project1.addItem(list1);

//Creating a second project w/ todos
let project2 = project("prj2");
let proj2todo = todoFactory("item1");
project2.addItem(proj2todo);

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

    //This function should:
    //1. Find the approrpriate div
    //2. Find the corresponding proj
    //3. Append all todo list items to it

    //Solution steps:
    //1. Search for the matching project based on ID
    //2 For each proj, get the corresponding project name
    //3. For each div with the right ID (temp variable)
    //4. Append that all to do items to that div
    //5. Update div and append iteratively
    function listContents(allProjectsList){
        //Project1 iterating through all to dos
        
        
        //Loop through the all projects name
        for (var i = 0; i < allProjectsList.allProjectsArr.length; i++){
            
            let currentProj = allProjectsList.allProjectsArr[i];
            let currentDiv = document.getElementById(currentProj.name);
            console.log(currentProj);
           
            //For each proj, iterate through it's todo list
            for (var j = 0; j < currentProj.todoList.length; j++){
                console.log(currentProj.todoList[j].getTitle);
                let pDiv = document.createElement('p');
                
                currentDiv.appendChild(pDiv);
                pDiv.textContent = currentProj.todoList[j].getTitle;
                pDiv.className = "task";

                let pBtn = document.createElement("button");
                pBtn.innerHTML = "test";
                pBtn.className = "testBtn";
                currentDiv.appendChild(pBtn);
            }

            
        }
    
    }
    //Test function: i want to create a div with all the info from a specific todo list item
    function createDivForPopUp(todolist){
        let todoItemDiv = document.createElement("div");
        let currentP = document.getElementById("")
    }
    //This function takes in all projects and for each project's todo:
    //Craft a unique to do
    
    function todoListPopup(allProjectsList){
        for (var i = 0; i < allProjectsList.allProjectsArr.length; i++){
            let currentProj = allProjectsList.allProjectsArr[i];
            let currentDiv = document.body;
            let todoDiv = document.createElement("div");
            todoDiv.className = "todoPopup";
            for (j = 0; j < currentProj.todoList.length; j++){

                
                let todoText = document.createElement('p');
                //How to convert getTitle to somesort of node that can be appended?
                //GOAL: I want to create a div or something with all the todo propreties
                // todoText.innerHTML += currentProj.todoList[j].getTitle;
                // todoText.innerHTML += currentProj.todoList[j].getDesc;
                
                
                todoText = currentProj.getTitle();

                todoDiv.appendChild(todoText);
                currentDiv.appendChild(todoDiv);
                //todoText.appendChild(currentTodo);
                console.log(j);
                
                //LEFT OFF HERE:
                /*
                Created an inidividual div for each todo. 
                From here, I shoud link it to my buttons. 
                When the buttons are clicked, their corresponding
                todolist should pop up with ALL of their info. duedate, 
                title, name, prio, etc.
                */
            }
            
        }
    }

    //Button to create a new project
    function createProject(){
        //Create a button 
        let btn = document.createElement("button");
        //Append it to HTML div buttons
        
        /////---

        btn.addEventListener("click", function() {
            //Open up a form to get info
        }
        //Button on click will open up a form to get info

        //Form creates a project

        //Project gets displayed as a button to click on 

        //Clicking on project button oopens the todo list
    }

    function createAddProj(){

    }

    function onClickForm(){

    }

    function createProj(){

    }

    function displayProj(){

    }

    function displayTodos(){

    }
    return {
        displayProjBtn: displayProjBtn,
        createProjDiv:createProjDiv,
        projBtnToggle:projBtnToggle,
        listContents:listContents,
        todoListPopup:todoListPopup,
    }
}

let site = siteLogic();
site.displayProjBtn();
site.createProjDiv();
site.projBtnToggle();
site.listContents(parentProject);
site.todoListPopup(parentProject);

function togglePopup(){
    document.getElementById("popup-1").classList.toggle("active");
}

// Next steps:
// 1. For each project, create a div w/ that class name so there will be divs unique to each project
// 2. Turn to do  lists into an html list
