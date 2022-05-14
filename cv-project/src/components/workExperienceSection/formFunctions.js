import React from "react";

function displayEdu(props){
    const {eduHist} = props;

    return (
       
        <div className="render-info">
        
          <h4 className="main-title">{eduHist.schoolName}</h4>
          <p className="sub-info">{eduHist.major}</p>
          <p className="sub-info">{eduHist.dateStart}</p>
          <p className="sub-info">{eduHist.dateEnd}</p>
          <p className="date-info">{eduHist.degree}</p>
          
        </div>
      );
}

// const Child = (props) => {
//     return (
//         <div>
//             <p> {props.schoolName2} </p>
//             <p> {props.Major} </p>
//             <p> {props.dateStart} </p>
//             <p> {props.dataEnd} </p>
//             <p> {props.data} </p>
//         </div>
//         );
// }

export default displayEdu;