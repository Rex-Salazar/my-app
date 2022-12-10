import React, { useState } from 'react'

export default function TextForm(props) {
    const UpperClick = ()=>{
        console.log("Text is in Upercase")
        let newText = text.toUpperCase()
        SetText(newText)
        props.showAlert("Text is in Upper Case","succes")
    }

    const LowerClick = ()=>{
        let newText = text.toLowerCase()
        SetText(newText)
        props.showAlert("Text is in Lower Case","success")
    }

    const Capitilize = ()=>{
        for (let i = 0; i < text.length; i++) {
            let newText =  text.toString().charAt(0)
            let t = newText.toUpperCase().concat (text.substring(1))
            SetText(t)
        }
    }

    const Onchange = (event)=>{
        SetText(event.target.value)//this updates value = {value} by adding user text using onChange
    }

    const[text,SetText] = useState("")
  return (
    <>
    <div className='container'>
        <h1 style ={{color:props.Mode === 'dark'?'white':'#042743'}}>{props.heading}</h1>
        <div className="mb-3">
            <textarea className="form-control" value={text} style ={{backgroundColor:props.Mode === 'dark'?'#13466e':'white',color:props.Mode === 'dark'?'white':'#042743'}} onChange = {Onchange} id="My-box" rows="8"></textarea>
        </div>
        <div>
            <button disabled = {text.length === 0} style={{backgroundColor:props.Mode === 'dark'?'grey':'lightblue',color:props.Mode === 'dark'?'black':'#042743'}} className="btn btn-primary mx-1 my-1" onClick={UpperClick}>Convert To Uppercase</button>
            <button disabled = {text.length === 0} style={{backgroundColor:props.Mode === 'dark'?'grey':'lightblue',color:props.Mode === 'dark'?'black':'#042743'}} className="btn btn-primary mx-1 my-1" onClick={LowerClick}>Convert To Lowercase</button>
            <button disabled = {text.length === 0} style={{backgroundColor:props.Mode === 'dark'?'grey':'lightblue',color:props.Mode === 'dark'?'black':'#042743'}} className="btn btn-primary mx-1 my-1" onClick={Capitilize}>Capitilize First Word</button>
        </div>
        
    </div>
    <div className='container my-3' style ={{color:props.Mode === 'dark'?'white':'#042743'}}>
        <h1>Your Text Summary</h1>
        <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} Words and {text.length>0 ? text.trim().split("").length : 0} Chracters</p>
        <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes to Read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Nothing To Preview"}</p>
    </div>
    </>
  )
}