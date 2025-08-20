import React, {useState} from 'react'

export default function TextForms(props) {
    const ConvertUpCase = () => {
        let newText = text.toUpperCase();
        text2(newText);
        props.showAlert("Text has been converted to Uppercase", "success");
    }

    const ConvertLowerCase = () => {
        let newText = text.toLowerCase();
        text2(newText);
        props.showAlert("Text has been converted to Lowercase", "success");
    } 

    const ClearText = () => {
        let newText = '';
        text2(newText);
        props.showAlert("Text has been Cleared", "success");
    } 
    
    const DoubleSpaceRemove = () => {
        let newText = text.trim();
        text2(newText);
        props.showAlert("Spaces at the start and end of the text have been removed", "success");
    } 

    const CopyText = () => {
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Text has been copied to clipboard", "success");
        document.getSelection().removeAllRanges(); // Deselect the text after copying
    }

    const HandleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        text2(newText.join(" "));
        props.showAlert("Extra spaces have been removed", "success");
    }

    const HandleChange = (event) => {
        text2(event.target.value);
    } 

    const [text, text2] = useState("Enter your text here");
    return (
        <>
            <form className='container'>
                <div>
                    <h3>{props.title}</h3>
                    <textarea name="text-here" value={text} rows = {8} className='form-control w-100' onChange={HandleChange} id = "myBox"></textarea>
                </div>
                <button type="button" className="btn btn-primary mx-1 my-2" onClick={ConvertUpCase}>Convert to Uppercase</button>
                <button type="button" className="btn btn-primary mx-1 my-2" onClick={ConvertLowerCase}>Convert to Lowercase</button>
                <button type="button" className="btn btn-primary mx-1 my-2" onClick={ClearText}>Clear text</button>
                <br />
                <button type="button" className="btn btn-primary mx-1 my-2" onClick={HandleExtraSpaces}>Remove spaces</button>
                <button type="button" className="btn btn-primary mx-1 my-2" onClick={DoubleSpaceRemove}>Remove spaces (front and back)</button>
                <button type="button" className="btn btn-primary mx-1 my-2" onClick={CopyText}>Copy text</button>
            </form>
            <div className="container">
                <h1>Your text summary</h1>
                <p>Your text contains {text.split(" ").length} words and {text.length} characters.</p>
                <p>You will be able to read this text in at least { 0.008 * text.split(" ").length} minutes.</p>
                <h2>Preview</h2>
                <p>{text.length>0?text:"Enter something in the textbox above to preview it here"}</p>
            </div>
        </>
    )
}