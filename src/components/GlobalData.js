import React from 'react';
import { Card, ListGroup } from 'react-bootstrap';
import axios from 'axios';

export class GlobalData extends React.Component {

    

    state = {
        global: [],
        yesterday: []
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
            axios.get('https://disease.sh/v3/covid-19/all?yesterday=true')
            .then(
                (response) => {
                    this.setState({ yesterday: response.data })
                    console.log(response.data)
                })
            .catch((error) => {
                console.log("error")
            }
            );
            
    }

    

    render() {
        return (
            <div>
                <Card className = "bg-danger text-center">
                    <Card.Header>Current worldwide cases</Card.Header>
                    <ListGroup variant="flush">
                        <ListGroup.Item >Total Cases - {this.state.global.cases}</ListGroup.Item>
                        <ListGroup.Item>Cases Today - {this.state.global.todayCases}</ListGroup.Item>
                        <ListGroup.Item>Cases Yesterday - {this.state.yesterday.todayCases}</ListGroup.Item>
                    </ListGroup>
                </Card>
            </div>
        );
    }
}