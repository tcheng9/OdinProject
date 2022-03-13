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

let todo1 = todoFactory("task1");
let todo2 = todoFactory("task2");
let todoArray = []

const project = (todoItem) => {
    function addItem(todoItem){
        todoArray.push()
    }
    

    function getList(){
        print(todoArray);
    }
    return {
        getTodoItem: todoItem,
        addItem: addItem,
        getList: getList,
    }
}

let project1 = project(todoArray);
project1.addItem("Bananas");
console.log(project1);