import React from 'react'
import Card from 'react-bootstrap/Card'
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button'
import axios from 'axios'

export class CountryItem extends React.Component {

    constructor(){
        super();

        this.DeleteCountry = this.DeleteCountry.bind(this);
    }

    DeleteCountry(e){
        e.preventDefault();
        console.log("Delete: "+this.props.country._id);

        axios.delete("http://localhost:4000/api/countries/"+this.props.country._id)
        .then(()=>{
            //then when the movie is deleted, reload the data
            this.props.ReloadData();
        })
        .catch();
    }

    render() {
        return (
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Card border="dark" style={{ width: '18rem' }}>
                    <Card.Header>{this.props.country.country_code}</Card.Header>
                    <Card.Body>
                        <Card.Text>
                            {this.props.country.country_code}
                        </Card.Text>
                    </Card.Body>
                    <Button variant="danger" onClick={this.DeleteCountry}>Delete</Button>
                </Card>
                <br />

            </div>
        );
    }
}