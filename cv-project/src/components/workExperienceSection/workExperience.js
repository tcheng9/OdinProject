import React, {Component} from "react";
import {useState} from "react";

const WorkExperience = () => {
    const [compName, setCompName] = useState('');
    const [jobTitle, setJobTitle] = useState('');
    const [jobTasks, setJobTasks] = useState('');
    const [dateStart, setDateStart] = useState('');
    const [dateEnd, setDateEnd] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        fetch('http://localhost:3000/', {
            method: 'POST',
            headers: { "Content-Type": "application/json"},
        }).then(() => {
            console.log("new work experiencee loaded");
        })
    };

    return (
       
        <div className = "workExperience">
          <form onSubmit = {handleSubmit}>
              <label>
                  Company Name
              </label>
              <input 
              type = "text"
              required
              value = {compName}
              onChange = {(e) => setCompName(e.target.value)}
              />
    
              <label>
                  Job Title
              </label>
              <input
                  type = "text"
                  required
                  value = {jobTitle}
                  onChange = {(e) => setJobTitle(e.target.value)}
              />
           
         
    
              <label>
                  Job Tasks
              </label>
              <input 
              type = "text"
              required
              value = {jobTasks}
              onChange = {(e) => setJobTasks(e.target.value)}
              />
  
              <label>
                  Date Start
              </label>
              <input 
              type = "text"
              required
              value = {dateStart}
              onChange = {(e) => setDateStart(e.target.value)}
              />
  
            <label>
                  Date End
              </label>
              <input 
              type = "text"
              required
              value = {dateEnd}
              onChange = {(e) => setDateEnd(e.target.value)}
              />
              <button> Submit Work Info. </button>
              
              <p> {compName}</p>
              <p> {jobTitle} </p>
              <p> {jobTasks} </p>
              <p> {dateStart} </p>
              <p> {dateEnd} </p>
              </form>
        </div>
      ) 
}

export default WorkExperience