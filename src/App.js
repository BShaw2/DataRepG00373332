import './App.css';
import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav } from 'react-bootstrap';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { GlobalData } from './components/GlobalData';
import { CountryData } from './components/CountryData';

class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
        <Navbar bg="dark" variant="dark">
          <Nav className="mr-auto">
            <Nav.Link href="/globaldata">GlobalData</Nav.Link>
            <Nav.Link href="/home">Country Specific Data</Nav.Link>
            <Nav.Link href="/editcountries">Edit Countries</Nav.Link>
            <Nav.Link href="/viewcountries">View Countries</Nav.Link>
          </Nav>
        </Navbar>

        <Switch>
          <Route path='/globaldata' component={GlobalData} exact />
          <Route path='/home' component={CountryData} exact />
        </Switch>

      </div>
      </Router>
    );
  }
}

export default App;
