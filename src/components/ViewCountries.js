import React from 'react';
import { Country_List } from './Country_List';
import axios from 'axios';

export class ViewCountries extends React.Component {

    constructor(){
        super();
        this.ReloadData = this.ReloadData.bind(this);
    }
    state = {
        countries: []
    };

    componentDidMount() {
        axios.get('http://localhost:4000/api/countries')
            .then(
                (response) => {
                    this.setState({ countries: response.data })
                })
            .catch((error) => {
                console.log(error)
            }
            );
    }

    ReloadData(){
        axios.get('http://localhost:4000/api/countries')
            .then(
                (response) => {
                    this.setState({ countries: response.data })
                })
            .catch((error) => {
                console.log(error)
            }
            );
    }

    render() {
        return (
            <div>
                <h1>Read component</h1>
                <Country_List countries={this.state.countries} ReloadData={this.ReloadData}></Country_List>
            </div>
        );
    }
}