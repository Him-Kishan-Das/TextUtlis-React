import React, {useState} from 'react'


export default function Textform(props) {

    const handleUpClick = () =>{
        // console.log("UpperCase was Clicked",text);
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted it into UpperCase", "success");
    }
    const handleLowClick = () =>{
        // console.log("UpperCase was Clicked",text);
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted it into LowerCase", "success");
    }

    const handleCapitalClick = () =>{
        let newText = text.split(" ").map(el=> el.charAt(0).toUpperCase() + el.slice(1)).join(" ");
        setText(newText);
        props.showAlert("Each word is Capitalized", "success");
    }

    const handleClearClick = () =>{
        // console.log("UpperCase was Clicked",text);
        let newText = "";
        setText(newText)
        props.showAlert("The Text Box is cleared", "success");
    }

    const handleonChange = (event)=>{
        // console.log("on Change");
        setText(event.target.value);
    }


    const [text, setText] = useState("");
    return (
        <>
        <div className="container" style={{color: props.mode==='dark'?'white':'black'}}>
            <h3>{props.heading}</h3>
            <div className="mb-3">
                <textarea className="form-control" value={text} style={{backgroundColor: props.mode==='dark'? 'rgb(44, 58, 87)': 'white', color:props.mode=== 'dark'?'white': 'black'}} id="myBox" rows="8" onChange={handleonChange}></textarea>
            </div>
            <button onClick={handleUpClick} className="btn btn-primary mx-1">Convert to UpperCase</button>
            <button onClick={handleLowClick} className="btn btn-primary mx-1">Convert to LowerCase</button>
            <button onClick={handleCapitalClick} className="btn btn-primary mx-1 my-2">Capitalize Each Word</button>
            <button onClick={handleClearClick} className="btn btn-primary mx-1 my-2">Clear</button>
            
        </div>
        <div className="container my-3" style={{color: props.mode==='dark'?'white':'black'}}>
            <h2>Your text summary</h2>
            <p>{text.length>0?text.trim().split(/[ ]+/).length: 0} words, {text.length} characters</p>
            <p>{0.008 * text.split(" ").length} Minutes read</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Enter something in the text box above to preview it here"}</p>
        </div>
        </>
    )
}
