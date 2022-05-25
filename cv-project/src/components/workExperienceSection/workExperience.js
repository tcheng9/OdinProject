import React, {Component} from "react";
import {useState} from "react";

const WorkExperience = () => {
    const [compName, setCompName] = useState('');
    const [jobTitle, setJobTitle] = useState('');
    const [jobTasks, setJobTasks] = useState('');
    const [dateStart, setDateStart] = useState('');
    const [dateEnd, setDateEnd] = useState('');

    const [mainArr, setmMainArr] = useState([]);
    

    const handleSubmit = (e) => {
        e.preventDefault();
        
        setmMainArr([
            ...mainArr,
            {
                id1: mainArr.lenght + 1,
                compName: compName,
                jobTitle: jobTitle,
                jobTasks:jobTasks,
                dateStart: dateStart,
                dateEnd: dateEnd,
            }
        ])

        console.log(mainArr);
        let formDiv = document.getElementById("workExperienceForm");
        formDiv.style.display = "none";
    };

    const addExperience = () => {
        console.log("clicked");
        let formDiv = document.getElementById("workExperienceForm");
    
        if (formDiv.style.display == "none"){
            formDiv.style.display = "flex";
        } else {
            formDiv.style.display = "none";
            
        }
    }
    
   
    
    return (
        <div className = "workExperience">
            <button onClick = {addExperience} id = "addWorkExpBtn">
                + Add Work Experience
            </button>


          <form onSubmit = {handleSubmit} id = "workExperienceForm">
              <label id = "workLabel">
                  Company Name
              </label>
              <input 
              type = "text"
              required
              value = {compName}
              onChange = {(e) => setCompName(e.target.value)}
            
              />
    
              <label id = "workLabel">
                  Job Title
              </label>
              <input
                  type = "text"
                  required
                  value = {jobTitle}
                  onChange = {(e) => setJobTitle(e.target.value)}
              />
           
              <label id = "workLabel">
                  Job Tasks
              </label>
              <input 
              type = "text"
              required
              value = {jobTasks}
              onChange = {(e) => setJobTasks(e.target.value)}
              />
  
              <label id = "workLabel">
                  Date Start
              </label>
              <input 
              type = "text"
              required
              value = {dateStart}
              onChange = {(e) => setDateStart(e.target.value)}
              />
  
            <label id = "workLabel">
                  Date End
              </label>
              <input 
              type = "text"
              required
              value = {dateEnd}
              onChange = {(e) => setDateEnd(e.target.value)}
              />
              <button> Submit Work Info. </button>
              
        
              </form>
            <div id = "returnWorkList">
            <h1> Work Experience </h1>
            <ul>
              {mainArr.map( m => (
                <div key = {m.id1}>
                  <h1> {m.compName}</h1>
                  <li> {m.jobTitle}</li>
                  <li> {m.jobTasks}</li>
                  <li> {m.dateStart}</li>
                  <li> {m.dateEnd}</li>
                </div>
               ))}
            </ul>
            </div>
            
        
        </div>
      ) 
}

export default WorkExperience
