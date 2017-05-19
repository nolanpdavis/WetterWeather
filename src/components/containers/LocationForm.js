import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { getWeather } from '../../utils/GetWeather'


class LocationForm extends Component {



    render(){


        return (
            <div>
                <input type="text" placeholder="Where would you like to check the weather?"/>
                <button onClick={getWeather}>Submit</button>
            </div>

        )
    }
}

export default LocationForm
