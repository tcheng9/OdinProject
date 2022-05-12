import React, { Component } from "react";
import {useState} from "react";

const General = () => {
    const [title, setTitle] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [title2, setTitle2] = useState('');  


    const handleSubmit = (e) => {
      e.preventDefault();
      const blog = {title};
  
      fetch('http://localhost:3000/', {
        method: 'POST',
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(blog)
      }).then(() => {
        console.log("new blog loaded");
      })
    }

    return (
        
      <div className = "generalInfo">
        <form id = "testSingleLineForm">
          <label> 
            Name
          </label>
          <br></br>
          <input 
          type = "text" 
          value={title2}
          onChange = {(e) => setTitle2(e.target.value)}>

          </input>
        </form>
     
        <form onSubmit = {handleSubmit} id = "generalForm">
            
            <input 
            type = "text"
            required
            value = {title}
            onChange = {(e) => setTitle(e.target.value)}
            placeholder = "Name"
            id = "generalName"
            />
  
            
            <input
                type = "text"
                required
                value = {email}
                onChange = {(e) => setEmail(e.target.value)}
                placeholder = "Email"
                id = "generalEmail"
            />
         
       
  
           
            <input 
            type = "text"
            required
            value = {phoneNumber}
            onChange = {(e) => setPhoneNumber(e.target.value)}
            placeholder = "Phone Number"
            id = "generalPhoneNumber"
            />

            <button> Add Info</button>
            
            </form>
      </div>
    )
  }
  
  export default General;