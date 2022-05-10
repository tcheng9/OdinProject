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
<<<<<<< HEAD
let todo1 = todoFactory("task1", "desc1", 'dueDate1', 'prio1');
let todo2 = todoFactory("task2", 'desc2', 'dueDate2', 'prio2');
let list1 = todoFactory("task3", "tdesc3", 'prio3');
let project1 = project("proj1");


||||||| 0647b20d
let todo1 = todoFactory("task1");
let todo2 = todoFactory("task2");
let list1 = todoFactory("test1", "this is a test for 1");
let project1 = project();


=======
let todo1 = todoItem("task1");
let todo2 = todoItem("task2");
let list1 = todoItem("test1", "this is a test for 1");

let project1 = project();
>>>>>>> d058fef9e449b3665db896cb65c72988a0574480
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

<<<<<<< HEAD
//Creating a second project w/ todos
let project2 = project("prj2");
let proj2todo = todoFactory("item1");
project2.addItem(proj2todo);
||||||| 0647b20d
//Print the list backout to check if it's working
//console.log(project1);
// console.log(project1.todoArray[0].getTitle);
// console.log(project1);

// console.log("break");
=======

>>>>>>> d058fef9e449b3665db896cb65c72988a0574480

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

console.log(project1);
console.log(project2);
let parentProject = allProjects();
parentProject.appendProject(project1);
parentProject.appendProject(project2);
parentProject.appendProject(project3);


console.log("foreach function");

//PROBLEM FOR LATER: Maybe this should be inside a "build logic/board factory function"





//Factory function for all of the site's logic and functionality

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

                
                
            }

            
            //Function that creats new task button + it's functionality
            addTodoBtnHelper(currentProj);
            
        }
    
    }
    
    //This function takes in all projects and for each project's todo:
    
    
    function todoListPopup(allProjectsList){
        for (var i = 0; i < allProjectsList.allProjectsArr.length; i++){
            let currentProj = allProjectsList.allProjectsArr[i];
            let currentDiv = document.body;
            let todoDiv = document.createElement("div");
            todoDiv.className = "todoPopup";
            for (j = 0; j < currentProj.todoList.length; j++){

                
                let todoText = document.createElement('p');
                
            }
            
        }
    }

    function createTitleDiv(){
        let targetDiv = document.getElementById("projectContainer");
        let titleDiv = document.createElement("div");
        titleDiv.innerText = "Projects";
        titleDiv.id = "titleDiv";
        document.body.appendChild(titleDiv);
        
    }
    createTitleDiv();

    //Button to create a new project with its functionality

    function createNewProj(){
        //Create a button 
        let btn = document.createElement("button");
        btn.id = 
        btn.innerHTML = "test";
        btn.className = "testBtn";
        //Append it to HTML div buttons

        let targetDiv = document.getElementById("titleDiv");
        targetDiv.appendChild(btn);

        
        //Show form for new project form
        btn.addEventListener("click", function(){
            document.querySelector(".bg-modal").style.display = "flex";
        });

        //Close button for new project form

        document.querySelector(".close").addEventListener("click", 
        function(){
            document.querySelector('.bg-modal').style.display = "none";
        })

        //Submit form data for new project
        
        const form = document.querySelectorAll(".form");
        submitInput = form[0].querySelector('input[type = "submit"]');

        function getDataForm(e){
            e.preventDefault();
            var formData = new FormData(form[0]);

           
            const projName = formData.get('name');
            let newProj = project(projName);
            parentProject.appendProject(newProj);
            

            newProjBtn(newProj);
            addTodoBtnHelper(newProj);
            addNewTodo(newProj);
            document.querySelector('.bg-modal').style.display = "none";
        }
        
      
        document.addEventListener('click', function(){
            submitInput.addEventListener('click', getDataForm, false);
        }, false);

    }

    createNewProj();

    //New function to create a new project button
    // and give its corrsponding div and clickevent BASED ON project inputed

    function newProjBtn(project){
        let containerDiv = document.getElementById("projectContainer");
        
        //Creating a div for the button
        let divHolder = document.createElement("div");
        divHolder.id = "gridSq";
        divHolder.className = "square";

        //Creating a button
        let btn = document.createElement("button");
        btn.innerHTML = project.name;
        btn.id = "gridBtn";
        btn.className = "button";
        

        //Function to toggle
        
        divHolder.appendChild(btn);
        
        containerDiv.appendChild(divHolder);

        
        //Function to create a new project div

        let todoDiv = document.getElementById("todoContainer");
        let projDiv = document.createElement("div"); 
        projDiv.id = project.name;
        projDiv.className = "projDiv";    
        projDiv.style.display = "none";
        todoDiv.appendChild(projDiv);    

        let temp = document.getElementById(project.name);
        temp.style.display = "none";
        //Function to toggle
        
        btn.addEventListener("click", function (){
            if (temp.style.display != "none"){
            temp.style.display = "none";
           
        } else {
            temp.style.display = "block";
            
        }
        })
        
        


    }


    /////////////////////////////
    
    //Standalone function to create a new button for a specific div based on div id
        //Standalone function to create a new button for a specific div based on div id
        function addTodoBtnHelper(project){
            let newBtn = document.createElement("button");
            let projDiv = document.getElementById(project.name);
    
         
            newBtn.innerHTML = "Add a new task";
            newBtn.id = "addTask" + String(project.name);
            //This event listener adds functionality to the buttons.
            newBtn.addEventListener("click", createNewTodoFunctionality(newBtn, project))
            projDiv.appendChild(newBtn);
            
        }
    
        //Function for Add todo items modal -> Used within btn.addEventListener()
        function createNewTodoFunctionality(btn, project){
            //No need for a button as one already exists 
             //Show form
             btn.addEventListener("click", function(){
                document.querySelector(".todo-modal").style.display = "flex";
            });
    
            //Close button
    
            document.querySelector(".todo-close").addEventListener("click", 
            function(){
                document.querySelector('.todo-modal').style.display = "none";
            })
            console.log("sadmalmsd");
            console.log(btn.className);
            console.log(btn.id);
            //Function to take in modal form data
            const todoForm = document.querySelectorAll(".todo-form");
            let todoSubmitInput = todoForm[0].querySelector('input[type = "submit"]');
            let todoSubmit = document.getElementById("testSubmit");
            // var todoFormTemp = new FormData(todoForm[0]);

            // //Getting the individual form values
            // const todoTitle = todoFormTemp.get("title");
            // const todoDesc = todoFormTemp.get("desc");
            // const todoDueDate = todoFormTemp.get("dueDate");
            // const todoPriority = todoFormTemp.get("priority");
            // const todoNotes = todoFormTemp.get("notes");
            // const todoCompletedStatus = todoFormTemp.get("completedStatus");
            
            // console.log(todoTitle);

            // let todoItem = todoFactory(todoTitle, todoDesc,todoDueDate, todoPriority, todoNotes, todoCompletedStatus);
            // project.addItem(todoFactory);
            // console.log(todoNotes);
            // //Submit button's event listener
            // todoSubmit.addEventListener("click", function(e){
            //     e.preventDefault();
            //     console.log(project.name);
            //     if (todoNotes == String(project.name)){
            //         console.log("correct");
            //     }

            // })
            let currentProject = document.getElementById(project.name); 
            let newDiv = document.createElement("div");
            newDiv.id = "newDivTest";
            todoSubmit.addEventListener("click", function(e){
                // todoSubmitInput.addEventListener("click", getTodoForm, false);
                e.preventDefault();
                

                //Get current project div
                var todoFormTemp = new FormData(todoForm[0]);

                //Getting the individual form values
                const todoTitle = todoFormTemp.get("title");
                const todoDesc = todoFormTemp.get("desc");
                const todoDueDate = todoFormTemp.get("dueDate");
                const todoPriority = todoFormTemp.get("priority");
                const todoNotes = todoFormTemp.get("notes");
                const todoCompletedStatus = todoFormTemp.get("completedStatus");
            
                newDiv.innerText = todoTitle;
                currentProject.appendChild(newDiv);

                if (todoTitle == currentProject.name){
                    console.log("true");
                }

            }, false);

    
        }
    
        function addTodoToDiv(project){
            
        }

    //Maybe a way for each project to loop through and have a submit
    return {
        displayProjBtn: displayProjBtn,
        createProjDiv:createProjDiv,
        projBtnToggle:projBtnToggle,
        listContents:listContents,
        todoListPopup:todoListPopup,
        createTitleDiv:createTitleDiv,
        
        
    }
}

let site = siteLogic();
site.displayProjBtn();
site.createProjDiv();
site.projBtnToggle();
site.listContents(parentProject);
site.todoListPopup(parentProject);

<<<<<<< HEAD

//Next steps (3/28/22):
//How do I get the "add new task" button to only append to a specific div

//3/30/22:
//I have to redo the project I think. 
//I built this project on a for loop so anytime I want to add something, it will affect all projects
//In retrospect, I should have individual functions that build up certain parts or functions
//As a result, I don't think I can get any further with this project based on using iterators
//Due to me needing to add a task to specific project BUT any time I hit submit, it will add to all projects
||||||| 0647b20d
// Next steps:
// 1. For each project, create a div w/ that class name so there will be divs unique to each project
// 2. Turn to do  lists into an html list
=======
// Next steps:
// 1. For each project, create a div w/ that class name so there will be divs unique to each project

// 2. Turn to do  lists into an html list

>>>>>>> d058fef9e449b3665db896cb65c72988a0574480
