import React, { Component } from "react";
import {useState} from "react";

//ATTEMPT 1
// class App extends Component {
//   constructor() {
//     super();

//     this.state = {
//       task: {text: ""},
//       tasks: [],
//     }
//   }
  
//   handleChange = (e) => {
//     this.setState({
//       task : {
//         text: e.target.value,
//       }  
//     })
//   }

//   onSubmitTask = (e) => {
//     e.preventDefault();
//     this.setState({
//       tasks: this.state.tasks.concat(this.state.task),
//       task: {text: ''},
//     })
//   };

 
//   render() {
//     const {task, tasks } = this.state;
//     const [name, setName] = useState('');

//     return (
//       <div id = "generalInfo"> 
//           (placeholder)

//           <form>
//             <label htmlFor = "tasknput"> Enter Name  </label>
            
//             <input 
             
//               value = {name}
//               type = "text"
//               // id = "nameInput"
//               onChange = {(e) => setName(e.target.value)}
//             />
            
//             <button type = "submit">
//               Edit 
//             </button>
            
//             <button type = "submit">
//               Submit
//             </button>
    
//           </form>

//           <p> {name} </p>
//       </div>
//     )
//   }
// }
////////////////////////////////////////////////////////////
//Attempt 2:

const App = () => {
  const [title, setTitle] = useState('');
  
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
    <div className = "create">
      <form onSubmit = {handleSubmit}>
          <label>
              Blog Title
          </label>
          <input 
          type = "text"
          required
          value = {title}
          onChange = {(e) => setTitle(e.target.value)}
          />

      <label>
              Blog Body
          </label>
         <textarea 
          required>
          </textarea>
     

      <label>
              Blog Auhtor
          </label>
          <select>
            <option value = "mario"> mario </option>
            <option value = "luigi"> luigi </option>
          </select>
          <button> Add Blog</button>
          <p> {title}</p>
          </form>
    </div>
  )
}

export default App;