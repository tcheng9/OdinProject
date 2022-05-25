 import { render } from "@testing-library/react";
import React, { Component } from "react";
import {useState} from "react";
import ReactDOM from 'react-dom';



// let contactArray = [
//   {
//     schoolName: "UIUC",
//     major: "Psychology",
//     dateStart: "09/01/2014",
//     dateEnd: "05/01/2018",
//     degree: "Bachelors",
//   }, 
//   {
//     schoolName: "UIC",
//     major: "Business",
//     dateStart: "10/01/2015",
//     dateEnd: "05/01/2020",
//     degree: "Masters"
//   }
// ];

// class Form extends React.Component{
//   constructor(){
//     super();
//     this.state = {
//       contacts:contactArray
//     };
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }

//   handleSubmit(e) {
//     e.preventDefault();
//     const {contacts} = this.state;
//     let school = this.contacts["schoolName"];
//     let major = this.contacts["major"];
//     let start = this.contacts["dateStart"];
//     let end = this.contacts['dateEnd'];
//     let degree = this.contacts['degree'];

    
//     this.setState({
//       contacts: [...contacts, {
//         school,
//         major,
//         start,
//         end,
//         degree
//       }]
//     }, () => {
//       this.school = '';
//       this.major = '';
//       this.start = '';
//       this.end = '';
//       this.degree = '';
//     });
//   }

//   render(){
//     const {contacts } = this.state;
//     return (
//       <div>
//         <h2> Add someone </h2>
//         <form onsubmit = {this.handleSubmit}>
//         <input type="text" ref="school" placeholder="school" />
//           <input type="text" ref="major" placeholder="major" />
//           <input type="text" ref="start" placeholder="start" />
//           <input type="text" ref="end" placeholder="end" />
//           <input type="text" ref="degree" placeholder="degree" />
//           <button type="submit">Submit</button>
//         </form>

//         <h2> Existing contacts: </h2>
//         <ul> 
//           {contacts.map((contact) => 
//             <li> {
//               `School: ${contact.school} 
//               major: ${contact.major}
//               Start: ${contact.start}
//               End: ${contact.end}
//               Degree: ${contact.degree}
//             `}
//             </li>
//           )}
//         </ul>
//       </div>
//     )
//   }
// }

// ReactDOM.render(<Form />, document.getElementById('root'));

////////////////////////////////////////////////////////
const Education = () => {
  
    const [schoolName, setSchoolName] = useState('');
    const [major, setMajor] = useState('');
    const [dateStart, setDateStart] = useState('');
    const [dateEnd, setDateEnd] = useState('');
    const [degree, setDegree] = useState('');
    
    const [mainArr, setmMainArr] = useState([]);


   const handleSubmit = (e) => {
    e.preventDefault();

    setmMainArr([
      ...mainArr,
      {
        id: mainArr.length + 1,
        schoolName: schoolName,
        major:major,
        dateStart:dateStart,
        dateEnd: dateEnd,
        degree: degree,
      }
    ])

    console.log(mainArr);
    let formDiv = document.getElementById("educationForm");
    formDiv.style.display = "none";
  };

  const addEducation = () => {
    console.log("clicked");
    let formDiv = document.getElementById("educationForm");
    
    if (formDiv.style.display == "none"){
        formDiv.style.display = "flex";
    } else {
        formDiv.style.display = "none";
        
    }
}

  
   return (
       
      <div className = "education">
        <button onClick = {addEducation} id = "addEduExpBtn">
          + Add Education Experience
        </button>

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
            
           
            </form>
            
            
          <div id = "returnEducationList">
            <h1> Education </h1>
            <ul>
              {mainArr.map( m => (
                <div>
                  <h1 key = {m.id}> {m.schoolName}</h1>
                  
                  <li key = {m.id}> {m.major}</li>
                  <li key = {m.id}> {m.dateStart}</li>
                  <li key = {m.id}> {m.dateEnd}</li>
                  <li key = {m.id}> {m.degree}</li>
                </div>
               ))}
            </ul>
            </div>
      </div>
    )
  }
  
  export default Education;