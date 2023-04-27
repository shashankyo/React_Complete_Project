import React, {useState} from 'react'

// console.log(useState('Enter text here'))

export default function TextForm(props) {

    const handleUpClick = () => {
        console.log("Uppercase was clicked!" + text);
        let newText = text.toUpperCase();
        setText(newText)
        props.showalert("Converted to Uppercase", "success")
    }

    const handleLoClick = () => {
        console.log("LowerCase was clicked!" + text);
        let newText = text.toLowerCase();
        setText(newText)
        props.showalert("Converted to Lppercase", "success")

    }

    const handleClear =()=> {
        let newText = '';
        setText(newText);
        props.showalert("Cleared content", "success")

    }

    const handleCapitalize =()=> {
        // let newText = text;
        const newText = text.split(" ");
        for (let i = 0; i < newText.length; i++) {
            newText[i] = newText[i][0].toUpperCase() + newText[i].split(1);
            setText(newText);
            props.showalert("Capitalized content data", "success")

        }
        
    }

    const handleCopy = () => {
        console.log("Copied");
        let text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value)
        props.showalert("Copied text item", "success")

    }

    const handleExtraSpaces = ()=> {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showalert("Removed extra space", "success")

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
            <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode === 'dark'?'grey':'white' }} id="myBox" rows="4"></textarea>
            </div>

            <button className="btn btn-primary  mx-2" onClick={handleUpClick}>Convert to UpperCase</button>
            <button className="btn btn-primary  mx-2 " onClick={handleLoClick}>Convert to LowerCase</button>
            <button className="btn btn-primary  mx-2 " onClick={handleClear}>Clear Text</button>

            <button className="btn btn-primary  mx-2 " onClick={handleCapitalize}>Capitalize text</button>
            <button className="btn btn-primary  mx-2 my-2" onClick={handleCopy}>Copy Text</button>

            <button className="btn btn-primary  mx-2 my-2" onClick={handleExtraSpaces}>Remove Extra Space</button>

        </div>

        <div className="container my-5">
        <h3>Your text summary</h3>
        <p>{text.split(" ").length} <b>words</b>, {text.length} <b>characters</b></p>
        <p>{ 0.008 * text.split(" ").length} Minutes to read</p>
        <h2>Preview</h2>
        <p>{text.length > 0? text:"Enter Something in the textbox above to preview it here"}</p>

        </div>
    </>
  )
}
