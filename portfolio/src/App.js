import './index.css'

import './App.css';
import Header from './components/Header';
import Exprience from './components/Exprience';
import Intro from './components/Intro';
import Skills from './components/Skills';
import Portfolio from './components/Portfolio'
import AboutMe from './components/AboutMe'
import About from './components/About';
function App() {
  return (
    <div className="App">
    <Header/>
    <Intro/>
    
    <About/>
    <Skills/>
    <Portfolio/>
    <Exprience/>
    <AboutMe/>
    
   
    </div>
  );
}

export default App;
