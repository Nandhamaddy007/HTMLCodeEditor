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

useEffect(()=>{
edit()
//console.log(activeTab)
},[htmlCode,activeTab,cssCode])

return(
  <div id="main">  
  <div className="btn btn-primary" onClick={()=>setActiveTab(1)}>Html</div>
  <div className="btn btn-primary" onClick={()=>setActiveTab(2)}>CSS</div>   

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
    code.open();
code.writeln(htmlCode+temp);
code.close();

}

}
export default CodeEditor;