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
    <nav className="navbar navbar-light  bg-dark ">
  <div className="container-fluid">
    <div className="navbar-brand text-light" href="#">HTMLPad</div>
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
