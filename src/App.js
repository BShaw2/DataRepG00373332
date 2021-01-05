import './App.css';
import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav } from 'react-bootstrap';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { GlobalData } from './components/GlobalData';
import { CountryData } from './components/CountryData';
import { Countries } from './components/Countries';
import { ViewCountries } from './components/ViewCountries';

class App extends Component {
  render() {
    return (
      
      <Router>
      <div className="App" >
        <Navbar bg="dark" variant="dark">
          <Nav className="mr-auto">
            <Nav.Link href="/globaldata">GlobalData</Nav.Link>
            <Nav.Link href="/countrydata">Country Specific Data</Nav.Link>
            <Nav.Link href="/editcountries">Edit Countries</Nav.Link>
            <Nav.Link href="/viewcountries">View Countries</Nav.Link>
          </Nav>
        </Navbar>

        <Switch>
          <Route path='/globaldata' component={GlobalData} exact />
          <Route path='/countrydata' component={CountryData} exact />
          <Route path='/editcountries' component={Countries} exact />
          <Route path='/viewcountries' component={ViewCountries} exact />
        </Switch>

      </div>
      </Router>
    );
  }
}

export default App;
