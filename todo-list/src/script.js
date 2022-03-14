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
console.log(project1.todoArray[0].getTitle);
console.log(project1);

console.log("break");

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

parentProject.printProjects();