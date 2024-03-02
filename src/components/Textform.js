import React, { useState } from "react";

export default function Textform(props) {
  const handleUpclick = () => {
    // console.log("uppercase  was clicked"+text);
    let newText=text.toUpperCase();
    setText(newText);
    props.showAlert('Converted to uppercase!','succes:');
  };
  const handleClearclick=()=>{
    let newText=" ";
    setText(newText); 
    props.showAlert('The text is cleared!','succes:');
  };
   
  const handleLoclick=()=>{
    let newText=text.toLowerCase();
    setText(newText);
    props.showAlert('Converted to lowercase!','succes:');
  }

  const handleonChange = (event) => {
    // console.log("Uppercase was clicked"+text);
    setText(event.target.value);
    
  };
  const [text, setText] = useState(" ");
  // tex="newtext" wrong way to change the state in react
  // setText=("new text"); //correct way to chnage the state
  return (
    <>
    <div className="container" style={{color:props.mode==='dark'?'white':'#042743'}}>
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea name="form-control" value={text} onChange={handleonChange} style={{backgroundColor:props.mode==='dark'?'rgb(21 80 128 ':'White',color:props.mode==='dark'?'White':'#042743'}}  id="myBox"cols="100"rows="15"></textarea>
        
      </div>
      
      <button className="btn btn-primary mx-2" onClick={handleUpclick}>
          {" "}
          Convert to Uppercase
        </button>
        <button className="btn btn-primary mx-1" onClick={handleLoclick}>{" "}convert to lowercase</button>
        <button className="btn btn-primary" onClick={handleClearclick}>{" "} clear</button>
    </div>
    <div className="conatiner my-3" style={{color:props.mode==='dark'?'white':'#042743'}} >
        <h1>Your Text Summary</h1>
        <p>{text.split(" ").length}words and {text.length}characters</p>
        <p>{0.008*text.split(" ").length} minutes  to read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"write something in the textbox to preview it here"}</p>
      </div>
    </>
  );
}
