import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Main from './components/main/Main';
import NavBar from './components/navbar/NavBar';
import './App.css';

const App = () => {
  return (
    <Router>
      <div>
       <NavBar />
       <Main />
      </div>
    </Router>
  )

}

export default App;
