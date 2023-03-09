
import { useState } from "react"
import './App.css';

import Aboutme from './pages/Aboutme';
import Portfolio from "./pages/Portfolio";
import Contactme from "./pages/Contactme";
import Resume from './pages/Resume';

import Navigation from './components/Navigation';
import Footer from './components/Footer';


function App() {
  const [ current, setCurrent ] = useState("about me")
  function getPage(){
    if(current === "about me"){
      return <Aboutme/>
    }else if(current === "portfolio") {
      return <Portfolio/>
    }else if(current === "contact me") {
      return <Contactme/>
    }else if (current === "resume") {
      return <Resume/>
    }
  }
  return (
    <div className="App">
      <Navigation current={current} setCurrent={setCurrent}/>
      {getPage()}
      <Footer/>
    </div>
  );
}

export default App;