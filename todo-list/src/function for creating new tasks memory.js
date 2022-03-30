    //Standalone function to create a new button for a specific div based on div id
    function addTodoBtnHelper(project){
        let newBtn = document.createElement("button");
        let projDiv = document.getElementById(project.name);

     
        newBtn.innerHTML = "Add a new task";
        newBtn.id = "addTask";
        newBtn.addEventListener("click", createNewTodoFunctionality(newBtn, project))
        //CONCLUSION: Maybe, disconnect this function, create a new function that uses a similar thing
        //Where it uses button functionality but returns submission form info to be append project specifically??
        
        //Need a targeted approach for event listeners to get specific project names

        //MAYBE EACH BUTTON NEEDS A UNIQUE ID SO YOU CAN DO A UNIUE GET ELEMENT BY ID?
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

        //Function to take in modal form data
        const todoForm = document.querySelectorAll(".todo-form");
        let todoSubmitInput = todoForm[0].querySelector('input[type = "submit"]');

        function getTodoForm(e){
            //Prevent default submit function from working
            e.preventDefault();

            //Some sort of trick I found online to hold the form data
            var todoFormTemp = new FormData(todoForm[0]);

            //Getting the individual form values
            const todoTitle = todoFormTemp.get("title");
            const todoDesc = todoFormTemp.get("desc");
            const todoDueDate = todoFormTemp.get("dueDate");
            const todoPriority = todoFormTemp.get("priority");
            const todoNotes = todoFormTemp.get("notes");
            const todoCompletedStatus = todoFormTemp.get("completedStatus");
           
            //Fromm this form data, create a new todo and append it to the current project'
            let newTodoTask = todoFactory(todoTitle, todoDesc, 
                                            todoDueDate, todoPriority,
                                            todoNotes, todoCompletedStatus                                  
                                        );
          
            project.addItem(newTodoTask);
            

//             //Add this new form data to the new div
//             let newDiv = document.createElement("p");
//             newDiv.class = "task";
//             newDiv.innerHTML = todoTitle;
// // /I think each task can be given a CSS styling via JS

//             let currentDiv = document.getElementById(project.name)
//             currentDiv.appendChild(newDiv);
            
            //Hide div after submit is clicked
            
            document.querySelector('.todo-modal').style.display = "none";
            
          
        }

       let todoSubmit = document.getElementById("testSubmit");
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

        }, false);

    }
