import { render } from "@testing-library/react";
import React, {Component} from "react";
import {useState} from "react";
import ReactDOM from "react-dom";

const WorkExperience = () => {
    const [compName, setCompName] = useState('');
    const [jobTitle, setJobTitle] = useState('');
    const [jobTasks, setJobTasks] = useState('');
    const [dateStart, setDateStart] = useState('');
    const [dateEnd, setDateEnd] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("click");
        compNameDiv();
        ///////just use "createWorkDiv()" function to create div on submit"
        //PROPS??? 
        // fetch('http://localhost:3000/', {
        //     method: 'POST',
        //     headers: { "Content-Type": "application/json"},
        // }).then(() => {
        //     console.log("new work experiencee loaded");
        // })
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
    
    function Welcome(props){
        let x = props.name;
        let y = props.jobTitle;
        let z = props.jobTasks;
        
        return (
            <div>
                <h2> {x} </h2>
                <p> {y} </p>
                <p> {z}</p>
            </div>
        )
    }

    function compNameDiv(){
        const root = ReactDOM.createRoot(document.getElementById("placeholderDiv"));
        const element = <Welcome name = {compName} jobTitle = {jobTitle} jobTasks = {jobTasks}/>;

        root.render(element);
    }



    return (
        <div className = "workExperience">
            <button id = "addWorkExpBtn">
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


// ////////////
//working
handleSubmit(e) {
    e.preventDefault();
    const
    { contacts } = this.state,
    name = this.refs.name.value,
    email = this.refs.email.value,
    phone = this.refs.phone.value;
    this.setState({
      contacts: [...contacts, {
        name,
        email,
        phone
      }]
    }, () => {
      this.refs.name.value = '';
      this.refs.email.value = '';
      this.refs.phone.value = '';
    });
  }
//Not working
handleSubmit(e) {
    e.preventDefault();
    const
    { contacts } = this.state,
    name = this.refs.name.value,
    email = this.refs.email.value,
    phone = this.refs.phone.value;
    this.setState({
     contacts: [...contacts, {
        name,
        email,
        phone
      }]
    }, () => {
      this.refs.name.value = '';
      this.refs.email.value = '';
      this.refs.phone.value = '';
    });
  }