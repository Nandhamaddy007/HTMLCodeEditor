import {useState} from 'react'
import './CodeEditor.css'
function CodeEditor(){
const [htmlCode ,setHtmlCode]=useState();
const [cssCode ,setcssCode]=useState();
//var code = document.getElementById("code").contentWindow.document;
//  document.body.onkeyup=function(){
// code.open();
// code.writeln(htmlCode);
// code.close();
//  }
return(
  <div id="main">
  <h1>Editor</h1>
  <div className="row align-items-start">
  <div className=""></div>
  <textarea className="form-control col-md-6" onChange={function(e){
    setHtmlCode(e.target.value)
    var code = document.getElementById("code").contentWindow.document;    
    edit(code)    
  }
  }></textarea>
  <iframe id="code" className="col-md-5" title="preview"></iframe>
  </div>
  </div>

)
function edit(code){
    code.open();
code.writeln(htmlCode);
code.close();

}

}
export default CodeEditor;