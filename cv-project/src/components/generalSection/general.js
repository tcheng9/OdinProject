import React, { Component } from "react";
import {useState} from "react";

const General = () => {
    const [title, setTitle] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    


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
        
      <div className = "generalInfo" onSubmit = {handleSubmit}>
        <form id = "testSingleLineForm" className = "generalForm">
          
          <br></br>
          <input 
          type = "text" 
          value={title}
          onChange = {(e) => setTitle(e.target.value)}
          placeholder = "Name"
          id = "generalName" 
          />
          

          <br></br>
          <input 
          type = "text" 
          value={email}
          onChange = {(e) => setEmail(e.target.value)}
          placeholder = "Email"
          id = "generalEmail"
          />
          
          <br></br>
          <input 
          type = "text" 
          value={phoneNumber}
          onChange = {(e) => setPhoneNumber(e.target.value)}
          placeholder = "Phone Number"
          id = "generalPhone"
          />

        
        </form>
     
        {/* <form onSubmit = {handleSubmit} id = "generalForm">
            
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
            
            </form> */}
      </div>
    )
  }
  
  export default General;