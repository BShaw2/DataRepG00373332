import React from 'react';
import { Button } from 'react-bootstrap';
import axios from 'axios';

export class GlobalData extends React.Component{

    state = {
        global: []
    };

    componentDidMount() {
        axios.get('https://disease.sh/v3/covid-19/all')
            .then(
                (response) => {
                    this.setState({ global: response.data })
                    console.log(response.data)
                })
            .catch((error) => {
                console.log("error")
            }
            );
    }

    render(){
        return(
            <div>
                <h1>Current worldwide cases</h1>
                <h2>{this.state.global.cases}</h2>
            </div>
        );
    }
}