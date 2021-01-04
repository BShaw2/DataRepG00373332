import React from 'react';
import axios from 'axios';

export class Countries extends React.Component {

    constructor() {
        super();

        this.onSubmit = this.onSubmit.bind(this);
        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeCode = this.onChangeCode.bind(this);


        this.state = {
            country_name: '',
            country_code: ''
        }
    }

    onChangeName(e) {
        this.setState({ country_name: e.target.value });
    }

    onChangeCode(e) {
        this.setState({ country_code: e.target.value });
    }

    onSubmit(e) {
        e.preventDefault();
        const newCountry = {
            country_name: this.state.country_name,
            country_code: this.state.country_code
        }


        axios.post('http://localhost:4000/api/countries', newCountry)
            .then((res) => {
                console.log(res);
                console.log("success")
            })
            .catch((err) => {
                console.log(err);
                console.log("fail")
            });
    }


    render() {
        return (


            <div className='App' style={{
                justifyContent: "center",
            }}>
                <form onSubmit={this.onSubmit}>
                    <div className='form-group'>
                        <label>
                            Country Name:
                    </label>
                        <input type='text' className='form-control' value={this.state.Name} onChange={this.onChangeName}>
                        </input>
                    </div>
                    <div className='form-group'>
                        <label> Country Code:</label>
                        <input type='text' className='form-control' value={this.state.Code} onChange={this.onChangeCode}>
                        </input>
                    </div>

                    <div className='form-group'>
                        <input type='submit' value='Add Country' className='btn btn-dark'
                        ></input>

                    </div>
                </form>
            </div>
        );
    }
}
