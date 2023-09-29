
import React,{useState} from 'react'

export default function Textform(props) {
    const [text,setText] = useState('');
    const handleupclick = ()=>{
        
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("converted to upper case ","success");
    }
    const handleclearclick = ()=>{
        
        let newText = "";
        setText(newText);
    }
    const handlecamelclick = ()=>{
        
        let newText = text.replace(/(?:^\w|[A-Z]|\b\w)/g, function(word, index) {
            return index === 0 ? word.toLowerCase() : word.toUpperCase();
          }).replace(/\s+/g, '');
        setText(newText);
        props.showAlert("converted to camel case ","success");

    }
    const handleLoclick = ()=>{
        
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("converted to lower case ","success");

    }
    const handleonchange =(event)=> {
       
        setText(event.target.value);
    }
    return (
        <>

        <div className="mydiv" style={{color:props.mode==="light"?"black":"white"}}>
            <h1 >{props.heading}</h1>
            <div className="mb-3">

                <textarea className="form-control" id="myBox" rows="8"onChange={handleonchange} value = {text} placeholder="enter text here" style={{backgroundColor:(props.mode==="dark"?"grey":"white"),color:props.mode==="light"?"black":"white"}}></textarea>
            </div>
            <button className={`btn btn-${props.btncol}`} onClick={handleupclick}>convert to uppercase </button>
            <button className={`btn btn-${props.btncol} mx-3`} onClick={handleLoclick}>convert to lowercase </button>
            <button className={`btn btn-${props.btncol} mx-3`} onClick={handlecamelclick}>convert to camelCase</button>
            <button className={`btn btn-${props.btncol} mx-3`} onClick={handleclearclick}>clear text </button>

            <div className="container2 my-3">
                <h2>Your Text Summary</h2>
                <p>{text.split(" ").length} words and {text.length} characters</p>
                <p>{(0.008*text.split(" ").length)} minutes to read </p>
                <h2>Preview</h2>
                <p>{text}</p>
            </div>
            </div>
        </>
    
    )
}
