import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,  
  Redirect
} from "react-router-dom";
import CodeEditor from './CodeEditor'

function App() {
  return (
    <div className="App">    
    <nav class="navbar navbar-light  bg-dark ">
  <div class="container-fluid">
    <a class="navbar-brand text-light" href="#">HTMLPad</a>
  </div>
  </nav>    
    <Router>
      <Switch>
      <Route path="/CodeEditor">
      <CodeEditor />
      </Route>
      <Route path="*">
      <Redirect to="/CodeEditor" /> 
      </Route>
      
      </Switch>
      </Router>
    </div>
  );
}
export default App;
