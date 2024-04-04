import React from 'react'
import { useState } from 'react'


export default function TextForm(props) {
const [text,SetText]=useState('Enter text here');

const handleUpClick = () =>{
    let newText=text.toUpperCase();
    SetText(newText);
}

const handleChange = (e) =>{
    SetText(e.target.value);
}

const handleLowClick = ()=>{
    SetText(text.toLowerCase());
}

const handleClearClick = () =>{
    SetText('');
}

const handleCopyClick = () =>{
  navigator.clipboard.writeText(text);
  props.showAlert("Copied to clipboard","success");
}

  return (
    <>
    <div className="container text-start" style={{color:props.mode==='dark'?'white':'black'}}>
   <h1>{props.heading}</h1>
   <div className="mb-3">
  <textarea className="form-control" onChange={handleChange} id="myBox" rows="8" value={text} style={{backgroundColor:props.mode==='dark'?'grey':'white',color: props.mode==='dark'?'white':'black'}}></textarea>
  </div>
  <button className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to Uppercase</button>
  <button className="btn btn-primary mx-1 my-1" onClick={handleLowClick}>Convert to Lowercase</button>
  <button className="btn btn-primary mx-1 my-1" onClick={handleClearClick}>Clear Text</button>
  <button className="btn btn-primary mx-1 my-1" onClick={handleCopyClick}>Copy Text</button>
  </div>
  <div className="container my-3 text-start" style={{color:props.mode==='dark'?'white':'black'}}>
    <h2>You text Summary</h2>
    <p>{text.trim().length > 0 ? text.trim().split(/\s+/).length : 0} words, {text.trim().length} characters</p>
   <h2>Preview</h2>
    <p>{text.length>0? text:'Enter something to preview...'}</p>
  </div>
</>
  )
}
