import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>hello</h1>
        <Button variant="primary" size="lg" block>Global Covid Data</Button>
        <br></br>
        <Button variant="primary" size="lg" block>Country Specific Data</Button>
        <br></br>
        <Button variant="primary" size="lg" block>Edit Countries</Button>
        <br></br>
        <Button variant="primary" size="lg" block>View Countries</Button>
      </div>
    );
  }
}

export default App;
