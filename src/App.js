import React, { Component } from 'react';
import './App.css';
import NavBar from './containers/NavBar'
import PicEditor from './containers/PicEditor'

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar/>
        <PicEditor/>
      </div>
    );
  }
}

export default App;
