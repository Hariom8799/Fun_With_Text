import React,{useState} from 'react'

export default function TextArea(props) {
    const [text,settext] = useState("")
    const [respText,setResptext] = useState("")
// ------------------btnFunctions----------------------------------------------
    const upbtn = ()=>{
        let newtext = text.toUpperCase()
        setResptext(newtext)
    }
    const lowerbtn = ()=>{
        let newtext = text.toLowerCase()
        setResptext(newtext)
    }
    const cursivebtn = ()=>{
        // let newtext = text.toUpperCase()
    
    }
    const resetbtn = ()=>{
        settext("")
        setResptext("")   
    }

    const copybtn = ()=>{
        console.log("upbtn clicked")
        let newtext = text.toUpperCase()
        settext(newtext)
    }
    const changing = (event)=>{
        settext(event.target.value)
    }

// -----------------------------btn style--------------------------------------
// const btnStyle={
//     border:'1px solid crimson',
//     backgroundColor:'transparent'
// }
  return (
    <> 
        <div className="mb-3">
            <h1 style={{color:(props.theme==='dark'?'crimson':'black')}} className='mt-3 text-center'>Enter Text Below: </h1>
            <textarea style={{backgroundColor:(props.theme==='dark'?'#35373b':'white'),color:(props.theme==='dark'?'white':'black')}} className="form-control" id="exampleFormControlTextarea1" rows="10" value={text} onChange={changing}></textarea>
            <div className="text-center my-3">
                <button  className={` btn  ${props.theme==='light'?'btn-outline-success':'btnhover'} my-3 mx-1`} onClick={upbtn} >Convert To UpperCase</button>
                <button className={` btn  ${props.theme==='light'?'btn-outline-success':'btnhover'} my-3 mx-1`} onClick={lowerbtn}>Convert To LowerCase</button>
                <button className={` btn  ${props.theme==='light'?'btn-outline-success':'btnhover'} my-3 mx-1`}  onClick={cursivebtn}>Convert To Cursive</button>
                <button className={` btn  ${props.theme==='light'?'btn-outline-success':'btnhover'} my-3 mx-1`} onClick={resetbtn}>Reset</button>
                <button className={` btn  ${props.theme==='light'?'btn-outline-success':'btnhover'} my-3 mx-1`} onClick={copybtn}>Copy To Clipboard</button>
            </div>
            <h1 style={{color:(props.theme==='dark'?'crimson':'black')}} className='text-center'>Response</h1>
            <textarea style={{backgroundColor:(props.theme==='dark'?'#35373b':'white')}} className="form-control my-3" id="exampleFormControlTextarea1" rows="10" value={respText} onChange={()=>{}} ></textarea>
              
        </div>
        <div style={{color:(props.theme==='dark'?'white':'black')}} className="container my-3 text-center">
            <h2 style={{color:(props.theme==='dark'?'crimson':'black')}}>Your Text Summary: </h2>
            <p>{text==="" ? 0 : text.split(" ").length} Words and {text.length} Character</p>
            <p>{0.008 * (text==="" ? 0 : text.split(" ").length)} Minutes to read</p>
            <h2 style={{color:(props.theme==='dark'?'crimson':'black')}}>Preview</h2>
            <p>{text.length>0 ? text : "Enter something in textbox to preview here..."}</p>
        </div>
    
    </>
  )
}
