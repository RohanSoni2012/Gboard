import "./App.css";
// import About from "./components/About";
import Navbar from "./components/Navbar";
import Textform from "./components/Textform";
import React ,{useState} from "react";
import Alert from "./components/Alert";

function App() {
 const [mode,setMode]=useState('light');
//  const [modeM,setMode2]=useState('light')
const [alert,setAlert]=useState(null);
const showAlert = (message,type) => {
  setAlert({
    msg:message, 
    type:type
  })

  setTimeout(() => {
   setAlert(null)
  }, 1500);
}
 
 const toggleMode = ()=>{
    if(mode==='light'){
      setMode("dark")
      document.body.style.backgroundColor = '#042743'
      showAlert('dark mode has been enable','succes');
      
    }else {
      setMode("light")
      document.body.style.backgroundColor = 'White'
      showAlert('light mode has been enable','succes');
    }
 }

//  const toggleModeM =()=>{
//     if(modeM==='light'){
//       setMode2('#ff0000')
//       document.body.style.backgroundColor='#ff0000'
//       showAlert('Red mode has been enable','succes:');
//     }else {
//       setMode2('light')
//       document.body.backgroundColor='White'
//       showAlert('light mode has been enable','succes:');
//     }
//  }
  return (
    <>
      <Alert alert={alert}/>    
      <Navbar title="Caps" showAlert={showAlert}about="About Us" mode={mode} toggleMode={toggleMode} />
      
      <div className="container my-3">
      
        <Textform showAlert={showAlert} heading="Enter the text to analyze" mode={mode}  />
        {/* <About /> */}
        
      </div>
    </>
  );
}

export default App;
