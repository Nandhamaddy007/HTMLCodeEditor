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
    <nav class="navbar navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">HTML Editor</a>
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
