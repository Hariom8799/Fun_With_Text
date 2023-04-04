import React,{useState} from 'react'

export default function TextArea(props) {
    const [text,settext] = useState("")
    const [respText,setResptext] = useState("")
    const [title,setTitle] = useState("Enter Text Below: ")
// ------------------btnFunctions----------------------------------------------
    const upbtn = ()=>{
        let newtext = text.toUpperCase()
        setResptext(newtext);
        props.alert("Converted to uppercase","success")
    }
    const lowerbtn = ()=>{
        let newtext = text.toLowerCase()
        setResptext(newtext)
        props.alert("Converted to lowercase","success")
    }
    const remSpace = ()=>{
        let newText = text.replace(" ","")
        setResptext(newText);
        props.alert("Spaces removed successfully", "success")
    
    }
    const resetbtn = ()=>{
        settext("")
        setResptext("")
        props.alert("Text box reset ","success")   
    }

    const copybtn = ()=>{
        navigator.clipboard.writeText(text)
        props.alert("Text copied ","success")
    }
    const changing = (event)=>{
        settext(event.target.value)
        setTitle(`Keep Going \u{1F929} `)
        if(event.target.value === ""){
            setTitle("Enter Text Below: ")
        }

    }

  return (
    
    <div className="container">

        <div className="mb-3">
            <h1 style={{color:(props.theme==='dark'?'white':'black')}} className='mt-3 text-center'>{title}</h1>
            <textarea style={{backgroundColor:(props.theme==='dark'?'#35373b':'white'),color:(props.theme==='dark'?'white':'black')}} className="form-control" id="exampleFormControlTextarea1" rows="10" value={text} onChange={changing}></textarea>
            <div className="text-center my-3">
                <button disabled={text.length===0} className={` btn  ${props.theme==='light'?'btn-outline-success':'btnhover'} my-3 mx-1 my-1`} onClick={upbtn} >Convert To UpperCase</button>
                <button disabled={text.length===0} className={` btn  ${props.theme==='light'?'btn-outline-success':'btnhover'} my-3 mx-1 my-1`} onClick={lowerbtn}>Convert To LowerCase</button>
                <button disabled={text.length===0} className={` btn  ${props.theme==='light'?'btn-outline-success':'btnhover'} my-3 mx-1 my-1`}  onClick={remSpace}>Remove Space</button>
                <button disabled={text.length===0} className={` btn  ${props.theme==='light'?'btn-outline-success':'btnhover'} my-3 mx-1 my-1`} onClick={resetbtn}>Reset</button>
                <button disabled={text.length===0} className={` btn  ${props.theme==='light'?'btn-outline-success':'btnhover'} my-3 mx-1 my-1`} onClick={copybtn}>Copy To Clipboard</button>
            </div>
            <h1 style={{color:(props.theme==='dark'?'white':'black')}} className='text-center'>Response</h1>
            <textarea style={{backgroundColor:(props.theme==='dark'?'#35373b':'white')}} className="form-control my-3" id="exampleFormControlTextarea1" rows="10" value={respText} onChange={()=>{}} ></textarea>
              
        </div>
        <div style={{color:(props.theme==='dark'?'white':'black')}} className="container my-3 text-center">
            <h2 >Your Text Summary: </h2>
            <p>{ text.split(/\s+/).filter((element)=>{return element.length!==0}).length} Words and {text.length} Character</p>
            <p>{0.008 * ( text.split(/\s+/).filter((element)=>{return element.length!==0}).length)} Minutes to read</p>
            <h2 >Preview</h2>
            <p>{text.length>0 ? text : "Enter something in textbox to preview here..."}</p>
        </div>
    
    </div>

    
  )
}
