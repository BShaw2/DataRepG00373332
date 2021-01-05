import React from 'react'
import { CountryItem } from './CountryItem'

export class Country_List extends React.Component{

    render(){
        return this.props.countries.map( (country)=>{
            return <CountryItem country={country} ReloadData={this.props.ReloadData}></CountryItem>
        })
    }
}