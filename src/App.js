import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import './App.css';
import HomePage from './Containers/HomePage';
import UserPage from './Containers/UserPage';

function App() {
  return (
    <Router>
      <div className="App">
      <Switch>
    <Route exact path="/" component={HomePage} />
    <Route exact path="/user/:userId" component={UserPage} />
    <Route path="*">Not Found</Route>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
