import './App.css';
import Bot from './Components/Bot';
import Login from './Components/Login';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Login} exact></Route>
        <Route path="/quiz" component={Bot} exact></Route>
      </Switch>
    </Router>
  );
}

export default App;
