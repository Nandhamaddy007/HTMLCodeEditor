import {useState, useEffect} from 'react'

import './CodeEditor.css'
function CodeEditor(){
const [htmlCode ,setHtmlCode]=useState(`<html>
<body>
<h1>Hello world</h1>
</body>
</html>`);
const [cssCode ,setcssCode]=useState();
useEffect(()=>{
edit()
},[htmlCode])
//var code = document.getElementById("code").contentWindow.document;
//  document.body.onkeyup=function(){
// code.open();
// code.writeln(htmlCode);
// code.close();
//  }
return(
  <div id="main">  
  <div className="tab-align">
  <ul className="nav nav-tabs" id="myTab" role="tablist">
  <li className="nav-item" role="presentation">
    <button className="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">Html</button>
  </li>
  <li className="nav-item" role="presentation">
    <button className="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">CSS</button>
  </li>
</ul>
  </div>
  <div className="tab-content" id="myTabContent">
  <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">Home</div>
  <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">profile</div>
  </div>
  <div className="row align-items-start">
  
  <textarea className="form-control col-md-6" id="editor" value={htmlCode} onChange={e=>changer(e)}></textarea>
  <iframe id="code" className="col-md-5" title="preview"></iframe>
  </div>
  </div>

)

function changer(e){      
   setHtmlCode(e.target.value)    
}

function edit(){  
  var code = document.getElementById("code").contentWindow.document;    
    code.open();
code.writeln(htmlCode);
code.close();

}

}
export default CodeEditor;