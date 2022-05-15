import { render } from "@testing-library/react";
import React, { Component } from "react";
import {useState} from "react";
// import Child from "../workExperienceSection/formFunctions";


const Education = () => {
    const [schoolName, setSchoolName] = useState('');
    const [major, setMajor] = useState('');
    const [dateStart, setDateStart] = useState('');
    const [dateEnd, setDateEnd] = useState('');
    const [degree, setDegree] = useState('');
    
    const handleSubmit = (e) => {
      e.preventDefault();
      console.log("click");
      
      ///////just use "createWorkDiv()" function to create div on submit"
      //PROPS??? 
      // fetch('http://localhost:3000/', {
      //     method: 'POST',
      //     headers: { "Content-Type": "application/json"},
      // }).then(() => {
      //     console.log("new work experiencee loaded");
      // })
  };

   
    
    return (
       
      <div className = "education">
        <form onSubmit = {handleSubmit} id = "educationForm">
            <label>
                School Name
            </label>
            <input 
            type = "text"
            required
            value = {schoolName}
            onChange = {(e) => setSchoolName(e.target.value)}
            id = "educationSchoolName"
            />
  
            <label id = "educationLabel"> 
                Major
            </label>
            <input
                type = "text"
                required
                value = {major}
                onChange = {(e) => setMajor(e.target.value)}
                id = "educationMajor"
            />
         
       
  
            <label id = "educationLabel">
                Date Start
            </label>
            <input 
            type = "text"
            required
            value = {dateStart}
            onChange = {(e) => setDateStart(e.target.value)}
            id = "educationDateStart"
            />

            <label id = "educationLabel">
                Date End
            </label>
            <input 
            type = "text"
            required
            value = {dateEnd}
            onChange = {(e) => setDateEnd(e.target.value)}
            id = "educationDateEnd"
            />


            <label id = "educationLabel"> 
              Degree
            </label>
            <input
            type = "text"
            required
            value = {degree}
            onChange = {(e) => setDegree(e.target.value)}
            id = "educationDegree"
            />

            <button> Submit Education Info. </button>
            
            <p> {schoolName}</p>
            <p> {major} </p>
            <p> {dateStart} </p>
            <p> {dateEnd} </p>
            </form>
            
            
      </div>
    )
  }
  
  export default Education;