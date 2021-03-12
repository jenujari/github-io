import React from "react";
import './App.css';

import {
  Title,
  Objective,
  Profile,
  Experience,
  Skills,
  Grad,
  Personal,
  Projects
} from './components';

function App() {
  return (
    <React.Fragment>
      
      <div className="container-fluid grd-one-bg vh-100 pt-1">
        <Title />
        <Objective />
        <Profile />
        <Experience />
        <Skills />
        <Grad />
        <Personal />
        <Projects />
      </div>
      
    </React.Fragment>
  );
}

export default App;