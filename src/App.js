import './App.css';
import React from 'react';
import Header from './components/Header/Header';
import TopContainer from './components/topContainer/topContainer';
import SkillContainer from './components/skillcontainer/skillContainer';
import ProjectContainer from './components/projectContainer/projectContainer';
import ExperienceContainer from './components/ExperienceContainer/ExperienceContainer';
import Contact from './components/Contact/Contact';



function App() {
  return (
    <div>
    <Header/>
    <TopContainer/>
    <SkillContainer/>
    <ProjectContainer/>
    <ExperienceContainer/>
    <Contact />
    </div>
   
  );
}

export default App;
