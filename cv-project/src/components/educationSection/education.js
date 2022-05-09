import React, { Component } from "react";
import {useState} from "react";

const Education = () => {
    const [schoolName, setSchoolName] = useState('');
    const [major, setMajor] = useState('');
    const [dateStart, setDateStart] = useState('');
    const [dateEnd, setDateEnd] = useState('');

    const handleSubmit = (e) => {
      e.preventDefault();
      // const blog = {schoolName};
  
      fetch('http://localhost:3000/', {
        method: 'POST',
        headers: {"Content-Type": "application/json"},
        // body: JSON.stringify(blog)
      }).then(() => {
        console.log("new blog loaded");
      })
    }

    return (
       
      <div className = "education">
        <form onSubmit = {handleSubmit}>
            <label>
                School Name
            </label>
            <input 
            type = "text"
            required
            value = {schoolName}
            onChange = {(e) => setSchoolName(e.target.value)}
            />
  
            <label>
                Major
            </label>
            <input
                type = "text"
                required
                value = {major}
                onChange = {(e) => setMajor(e.target.value)}
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