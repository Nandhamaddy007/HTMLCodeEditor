import {useState, useEffect} from 'react'
import './CodeEditor.css'
function CodeEditor(){
const [htmlCode ,setHtmlCode]=useState(`<html>
<body>
<h1>Hello world</h1>
</body>
</html>`);
const [cssCode ,setcssCode]=useState('');
const [activeTab, setActiveTab]=useState(1);
const [fileData, setFileData]=useState('something')

useEffect(()=>{
edit()
//console.log(activeTab)
},[htmlCode,activeTab,cssCode])
function downloadFile(){
  var code =document.getElementById("code").contentWindow.document.documentElement.innerHTML
  //console.log(code)   
  var name=prompt("Please enter the file name...","Htmlcode")
  name=name===null?"Htmlcode":name
  var  temp="<!DOCTYPE html><html>"+ code+"</html>"
  //console.log(temp)
  var element = document.createElement('a');
  element.setAttribute('href', 'data:html;charset=utf-8,' + encodeURIComponent(temp));
  element.setAttribute('download', name+".html");

  element.style.display = 'none';
  document.body.appendChild(element);

  element.click();

  document.body.removeChild(element);
}
return(
  <div id="main">  
  {activeTab===1?<h5 className="float-left">Html Editor</h5>:<h5 className="float-left">
  Css Editor</h5>}
  <div className="btn btn-primary" onClick={()=>setActiveTab(1)}>Html</div>
  <div className="btn btn-primary" onClick={()=>setActiveTab(2)}>CSS</div>   
  <span className="btn btn-success float-right" onClick={downloadFile}>download</span>
  <div className="row align-items-start">  
 
  {activeTab===1?<textarea className="form-control col-md-6" id="htmleditor" value={htmlCode} onChange={
    e=>setHtmlCode(e.target.value)    
    }></textarea>:<textarea className="form-control col-md-6" id="csseditor" placeholder="Css editor" value={cssCode} onChange={
    e=>setcssCode(e.target.value)
    }></textarea>
  }
  <iframe id="code" className="col-md-5" title="preview"></iframe>
  </div>
  </div>
)

function edit(){  
  var code = document.getElementById("code").contentWindow.document;    
  var temp=`<style> ${cssCode}</style>`
  setFileData(htmlCode+temp)
    code.open();
code.writeln(htmlCode+temp);
code.close();

}

}
export default CodeEditor;