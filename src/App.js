import React,{useState} from 'react';
import './App.css';
import Navbar from './component/Navbar';
import TextArea from './component/TextArea';

function App() {
  const [mode, setMode] = useState("light");
  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor='#35373b';
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
    }
  }

  return (
    <>
        <Navbar title="FunWithText" aboutText="About Us" theme={mode} toggleMode={toggleMode} />
      <div className="container" >
        <TextArea theme={mode}/>
      </div>
      
    </>
  );
}

export default App;
