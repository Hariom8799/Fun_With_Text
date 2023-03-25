import React,{useState} from 'react';
import './App.css';
import Alert from './component/Alert';
import Navbar from './component/Navbar';
import TextArea from './component/TextArea';
import Feedback from './component/Feedback';
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';


function App() {
  const [mode, setMode] = useState("light");
  const [alertText, setAlertText] = useState(null);

  const alert=(message,type)=>{
    setAlertText({
      message : message,
      type : type
    });  
    setTimeout(() => {
      setAlertText(null);
    }, 3000);
  }

  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor='#35373b';
      alert("Dark Mode Enabled","success");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
      alert("Light Mode Enabled","success");
    }
  }

  return (
    <>
    <Router>
    <Navbar title="FunWithText" theme={mode} toggleMode={toggleMode} />
    <Alert alert={alertText}/>
      <Routes>
        <Route path="/" element={<TextArea theme={mode} alert={alert}/>} />
        <Route path="/Feedback" element={<Feedback/>} /> 
      </Routes>
    </Router>
      
    </>
  );
}

export default App;
