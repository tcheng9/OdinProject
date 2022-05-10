import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Education from './components/educationSection/education';
import General from './components/generalSection/general';
import WorkExperience from './components/workExperienceSection/workExperience';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <General/>
  <Education/>
  <WorkExperience/>
  </React.StrictMode>
);