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
