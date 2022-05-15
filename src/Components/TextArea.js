import React,{useState} from 'react'


export default function TextArea(props)
{
    const [text,setText]=useState("");
    let textArea1=document.getElementById('textArea1');
  //  let words=0;
    let Changed=(event)=>{
       // console.log("changed "+text);
        // if(text.length)
        // {
        //     words=text.split(' ').length;
        // }
        setText(event.target.value);
    }
    function upperCaseFun()
    {
       // console.log("converting to uuper case : "+text);
        let s=text;
        s=s.toUpperCase();
        setText(s);
    }
    function lowerCaseFun()
    {
        //console.log("converting to uuper case : "+text);
        let s=text;
        s=s.toLowerCase();
        setText(s);
    }
    function capitalizeFun()
    {
        const mySentence = text;
        const words = mySentence.split(' ');
        
        // let s=words.map((word) => { 
        //     if((word[0]>='A' && word[0]<='Z') || (word[0]>='a' && word[0]<='z'))
        //     return word[0].toUpperCase() + word.substring(1); 
        //     else return word;
        // }).join(" ");
        // setText(s);
      //  const mySentence = "freeCodeCamp is an awesome resource";
      //const words = mySentence.split(" ");

        for (let i = 0; i < words.length; i++) 
        {
            if((words[i]>='A' && words[i]<='Z') ||(words[i]>='a' && words[i]<='z'))
            {
            words[i] = words[i][0].toUpperCase() + words[i].substr(1);
           // console.log("words : "+words[i]);
            }
        }

    let s=words.join(" ");
    const words2=s.split('\n');
    for (let i = 0; i < words2.length; i++) 
        {
            if((words2[i]>='A' && words2[i]<='Z') ||(words2[i]>='a' && words2[i]<='z'))
            {
            words2[i] = words2[i][0].toUpperCase() + words2[i].substr(1);
            //console.log("words : "+words2[i]);
            }
        }
        s=words2.join("\n");
    setText(s);
    }

    function boldFun()
    {
        if(textArea1.style.fontWeight !=="bold")
        {
           textArea1.style.fontWeight="Bold";  
            //console.log("Done bold");
        } 
        else
        {
           // console.log("Already bold!!");
            textArea1.style.removeProperty("font-weight");
        }
    }



    function italicsFun()
    {
        if(textArea1.style.fontStyle!=="italic")
            textArea1.style.fontStyle="italic";
        else
            textArea1.style.removeProperty("font-style");

    }

    function tempAlert(msg,duration)
{
 var el = document.createElement("div");
 el.setAttribute("style","padding:5px;position:absolute;top:80%;left:80%;background-color:#8bcca9;");

 el.innerHTML = msg;
 setTimeout(function(){
  el.parentNode.removeChild(el);
 },duration);
 document.body.appendChild(el);
}
    function copyFun()
    {
        navigator.clipboard.writeText(text);
        tempAlert("Text Copied!!",2300);
    }
    function download(filename, text) {
        var element = document.createElement('a');
        element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
        element.setAttribute('download', filename);
    
        element.style.display = 'none';
        document.body.appendChild(element);
    
        element.click();
    
        document.body.removeChild(element);
    }
    function saveFun()
    {
        download("MyNotes.txt",text);
        alert("Saved Successfully !!");
    }
    function clearFun()
    {
        if(window.confirm("Clear All Text?"))
        setText("");
    }


    return(
        <>
        <div className="mb-1">
        <h1 className='m-3' style={{color:'#eee',fontfamily:'Lucida',textAlign:'center'}}>{props.heading}</h1>
        <textarea className="form-control p-3" value={text} placeholder="Enter Text Here..." id="textArea1" rows="9" onChange={Changed}></textarea>
        <div className='container row mx-auto'>
      <div className='col mt-2'>
      <button className='btn btn-primary' style={{width:'100%'}} onClick={upperCaseFun}>UPPER_CASE</button>
      </div>
      <div className='col mt-2'>
      <button className='btn btn-primary' style={{width:'100%'}} onClick={lowerCaseFun}>lower_case</button>
      </div>
      <div className='col mt-2'>
      <button className='btn btn-primary' style={{width:'100%'}} onClick={capitalizeFun}>Capitalize</button>
      </div>
      <div className='col mt-2'>
      <button className='btn btn-primary' style={{width:'100%'}} onClick={boldFun}>Bold</button>
      </div>
      <div className='col mt-2'>
      <button className='btn btn-primary' style={{width:'100%'}} onClick={italicsFun}>Italicize</button>
      </div>
      
    {/* </div> */}
    {/* <div className='container row mx-auto'> */}
    <div className='col mt-2'>
      <button className='btn btn-info' style={{width:'100%'}} onClick={copyFun}>Copy Text</button>
      </div>
      <div className='col mt-2'>
      <button className='btn btn-success' style={{width:'100%'}} onClick={saveFun}>Save</button>
      </div>
      <div className='col mt-2'>
      <button className='btn btn-danger' style={{width:'100%'}} onClick={clearFun}>Clear</button>
      </div>
      </div>
        </div>


    <div className='container pt-2 text-center' style={{color:'white'}}>
        <h2>Your Text Summary</h2>
        <p className='mb-1'>Total Words : {(text.trim().length)?(text.trim().split(' ').length):(0)}</p>
        <p className='mb-1'> Characters : {text.trim().length}</p>
        <p className='mb-1'>Approx Time to Read : {(text.trim().length)?((text.trim().split(' ').length * 0.008).toPrecision(2)):(0.00)} mins</p>
    </div>  


        </>
    )
}