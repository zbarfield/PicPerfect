import React, { Component } from 'react';
import PicViewer from './../components/PicViewer';
import logo from '../logo.svg';

class PicEditor extends Component {
  render(){
    return(
      <React.Fragment>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          <PicViewer/>
        </p>

      </React.Fragment>
    );
  }
}

export default PicEditor
