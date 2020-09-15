import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import SearchPage from './pages/SearchPage';
import SavedPage from './pages/SavedPage';
import {BrowserRouter, Switch, Route} from 'react-router-dom';


function App() {
  return (
    <div className="App">
     <BrowserRouter>
        <Navbar/>
        <Switch>
          <Route exact path="/" component={SearchPage}/>
          <Route path="/saved" component={SavedPage}/>
        </Switch>
     </BrowserRouter>
    </div>
  );
}

export default App;
