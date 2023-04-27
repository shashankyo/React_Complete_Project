import React, {useState} from 'react'

// console.log(useState('Enter text here'))

export default function TextForm(props) {

    const handleUpClick = () => {
        console.log("Uppercase was clicked!" + text);
        let newText = text.toUpperCase();
        setText(newText)
    }

    const handleLoClick = () => {
        console.log("LowerCase was clicked!" + text);
        let newText = text.toLowerCase();
        setText(newText)
    }

    const handleOnChange =(event)=> {
        console.log("On Change");
        setText(event.target.value);
    }

    const [text, setText] = useState("");

    
  return (
    <>
        <div>
        
            <h1>{props.heading}</h1>
            <div className="mb-3">
            <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="4"></textarea>
            </div>

            <button className="btn btn-primary  mx-2" onClick={handleUpClick}>Convert to UpperCase</button>
            <button className="btn btn-primary  mx-2 " onClick={handleLoClick}>Convert to LowerCase</button>

        </div>

        <div className="container my-5">
        <h3>Your text summary</h3>
        <p>{text.split(" ").length} <b>words</b>, {text.length} <b>characters</b></p>
        <p>{ 0.008 * text.split(" ").length} Minutes to read</p>
        <h2>Preview</h2>
        <p>{text}</p>

        </div>
    </>
  )
}
