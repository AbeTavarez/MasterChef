import logo from './logo.svg';
import './App.css';
import { Switch } from 'react-router-dom';
import { Route } from 'react-router-dom';
import About from './pages/About';
import Home from './pages/Home';
import Contact from './pages/Contact';

function App() {
  return (
    <div className="App">
     <Switch>
       <Route exact path="/" component={Home}/>
       <Route path="/about" component={About}/>
       <Route path="/contact" component={Contact}/>
     </Switch>
    </div>
  );
}

export default App;
