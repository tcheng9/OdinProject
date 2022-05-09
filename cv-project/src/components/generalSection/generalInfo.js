import React, { Component } from "react";
import {useState} from "react";

const general = () => {
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
       
      <div className = "generalInfo">
        <form onSubmit = {handleSubmit}>
            <label>
                Name
            </label>
            <input 
            type = "text"
            required
            value = {title}
            onChange = {(e) => setTitle(e.target.value)}
            />
  
            <label>
                Email
            </label>
            <input
                type = "text"
                required
                value = {email}
                onChange = {(e) => setEmail(e.target.value)}
            />
         
       
  
            <label>
                Phone Number
            </label>
            <input 
            type = "text"
            required
            value = {phoneNumber}
            onChange = {(e) => setPhoneNumber(e.target.value)}
            />

            <button> Add Info</button>
            
            <p> {title}</p>
            <p> {email} </p>
            <p> {phoneNumber} </p>
            </form>
      </div>
    )
  }
  
  export default general;