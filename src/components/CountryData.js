import React from 'react'
import { Card, ListGroup } from 'react-bootstrap';
import axios from 'axios'

export class CountryData extends React.Component {
    //https://disease.sh/v3/covid-19/countries/ie?strict=true


    state = {
        global: [],
        Title: '',
        Flag: ''
    };

    constructor() {
        super();

        this.onSubmit = this.onSubmit.bind(this);
        this.onChangeTitle = this.onChangeTitle.bind(this);

    }

    onChangeTitle(e) {
        this.setState({
            Title: e.target.value
        });
    }


    onSubmit(e) {
        e.preventDefault();

        axios.get('https://disease.sh/v3/covid-19/countries/' + this.state.Title + '?strict=true')
            .then(
                (response) => {
                    this.setState({ global: response.data })
                    alert("Country name: " + this.state.global.country);
                    this.state.Flag = this.state.global.countryInfo.flag
                })
            .catch((error) => {
                console.log(error)
            }
            );

    }

    render() {
        return (
            <div className='App'>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Country Code:</label>
                        <input type='text'
                            className='form-control'
                            value={this.state.Title}
                            onChange={this.onChangeTitle}></input>
                    </div>

                    <div className="form-group">
                        <input type='submit'
                            value='Search'
                            className='btn btn-primary'></input>
                    </div>
                </form>

                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <Card border="dark" style={{ width: '18rem' }}>
                        <Card.Header>{this.state.global.country}</Card.Header>
                        <Card.Body>
                            <Card.Title><img src={this.state.Flag} width="200" height="100"></img></Card.Title>
                            <Card.Text>
                                Total cases: {this.state.global.cases}
                                <br></br>
                                Today's cases: {this.state.global.todayCases}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <br />

                </div>


            </div>
        );
    }
}