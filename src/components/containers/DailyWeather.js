import React, { Component } from 'react'
import ReactDOM from 'react-dom'

class DailyWeather extends Component {
    constructor(){
        super()
        this.state = {
            location: 'D.C.'
        }
    }

    render(){


        return (
            <div>
                <h1>{this.state.location}</h1>
            </div>

        )
    }
}

export default DailyWeather
