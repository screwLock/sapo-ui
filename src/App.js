import React, { Component } from 'react';
import NavBar from './components/NavBar.js';
import Sidebar from './components/Sidebar/Sidebar.js';
import Main from './components/Main.js';

class App extends Component {
  render() {
    return (
      <div>
        <h1>SAPO</h1>
        <NavBar />
        <Main />
      </div>      
    );
  }
}

export default App;
