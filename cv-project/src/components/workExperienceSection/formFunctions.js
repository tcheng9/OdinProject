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

export default displayEdu;