import './App.scss';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home'
import Reports from './pages/Reports'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <Navbar />
          <Sidebar />
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/reports' component={Reports} />
            {/* <Route path='/products' component={Products} /> */}
          </Switch>
        </Router>
      </header>
    </div>
  );
}

export default App;
