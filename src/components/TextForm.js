import React, {useState} from 'react'

// console.log(useState('Enter text here'))

export default function TextForm(props) {

    const handleUpClick = () => {
        console.log("Uppercase was clicked!" + text);
        let newText = text.toUpperCase();
        setText(newText)
    }

    const handleOnChange =(event)=> {
        console.log("On Change");
        setText(event.target.value);
    }

    const [text, setText] = useState("Enter text here 100");

    
  return (

    <div>
            <h1>{props.heading}</h1>
            <div className="mb-3">
            <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="4"></textarea>
            </div>

            <button className="btn btn-primary" onClick={handleUpClick}>Convert to UpperCase</button>
    </div>
  )
}
