 import { render } from "@testing-library/react";
import React, { Component } from "react";
import {useState} from "react";
import ReactDOM from 'react-dom';



let contactArray = [
  {
    schoolName: "UIUC",
    major: "Psychology",
    dateStart: "09/01/2014",
    dateEnd: "05/01/2018",
    degree: "Bachelors",
  }, 
  {
    schoolName: "UIC",
    major: "Business",
    dateStart: "10/01/2015",
    dateEnd: "05/01/2020",
    degree: "Masters"
  }
];

class Form extends React.Component{
  constructor(){
    super();
    this.state = {
      contacts:contactArray
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const {contacts} = this.state;
    let school = this.contacts["schoolName"];
    let major = this.contacts["major"];
    let start = this.contacts["dateStart"];
    let end = this.contacts['dateEnd'];
    let degree = this.contacts['degree'];

    
    this.setState({
      contacts: [...contacts, {
        school,
        major,
        start,
        end,
        degree
      }]
    }, () => {
      this.school = '';
      this.major = '';
      this.start = '';
      this.end = '';
      this.degree = '';
    });
  }

  render(){
    const {contacts } = this.state;
    return (
      <div>
        <h2> Add someone </h2>
        <form onsubmit = {this.handleSubmit}>
        <input type="text" ref="school" placeholder="school" />
          <input type="text" ref="major" placeholder="major" />
          <input type="text" ref="start" placeholder="start" />
          <input type="text" ref="end" placeholder="end" />
          <input type="text" ref="degree" placeholder="degree" />
          <button type="submit">Submit</button>
        </form>

        <h2> Existing contacts: </h2>
        <ul> 
          {contacts.map((contact) => 
            <li> {
              `School: ${contact.school} 
              major: ${contact.major}
              Start: ${contact.start}
              End: ${contact.end}
              Degree: ${contact.degree}
            `}
            </li>
          )}
        </ul>
      </div>
    )
  }
}

ReactDOM.render(<Form />, document.getElementById('root'));


// const Education = () => {
  
//   const [schoolName, setSchoolName] = useState('');
//     const [major, setMajor] = useState('');
//     const [dateStart, setDateStart] = useState('');
//     const [dateEnd, setDateEnd] = useState('');
//     const [degree, setDegree] = useState('');
    
   


//    const data = [{"name" : schoolName}, {"name" : major}];
//    const listItems = data.map((d) => <li key = {d.name}> {d.name} </li>) 
  
//    const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("submitted");
//     testFunction();
    
//     ///////just use "createWorkDiv()" function to create div on submit"
//     //PROPS??? 
//     // fetch('http://localhost:3000/', {
//     //     method: 'POST',
//     //     headers: { "Content-Type": "application/json"},
//     // }).then(() => {
//     //     console.log("new work experiencee loaded");
//     // })
//   };
//   const testFunction = () => {
//     return (
//       <div> {schoolName}</div>
      
//     )
//   }
  
  
//    return (
       
//       <div className = "education">
      
//         <form onSubmit = {handleSubmit} id = "educationForm">
//             <label>
//                 School Name
//             </label>
//             <input 
//             type = "text"
//             required
//             value = {schoolName}
//             onChange = {(e) => setSchoolName(e.target.value)}
//             id = "educationSchoolName"
//             />
  
//             <label id = "educationLabel"> 
//                 Major
//             </label>
//             <input
//                 type = "text"
//                 required
//                 value = {major}
//                 onChange = {(e) => setMajor(e.target.value)}
//                 id = "educationMajor"
//             />
         
       
  
//             <label id = "educationLabel">
//                 Date Start
//             </label>
//             <input 
//             type = "text"
//             required
//             value = {dateStart}
//             onChange = {(e) => setDateStart(e.target.value)}
//             id = "educationDateStart"
//             />

//             <label id = "educationLabel">
//                 Date End
//             </label>
//             <input 
//             type = "text"
//             required
//             value = {dateEnd}
//             onChange = {(e) => setDateEnd(e.target.value)}
//             id = "educationDateEnd"
//             />


//             <label id = "educationLabel"> 
//               Degree
//             </label>
//             <input
//             type = "text"
//             required
//             value = {degree}
//             onChange = {(e) => setDegree(e.target.value)}
//             id = "educationDegree"
//             />

//             <button> Submit Education Info. </button>
            
           
//             </form>
            
            
            
//       </div>
//     )
//   }
  
  // export default Education;