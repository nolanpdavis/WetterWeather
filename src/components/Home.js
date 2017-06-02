import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import LocationForm from './LocationForm'

// images:
const leafRain = require('../../assets/images/LeafRain.jpg')

class Home extends Component {

    render(){

        const headerStyle = {
            backgroundImage: 'url('+ leafRain + ')',
            backgroundSize: "100% 100%"
        }

        return (
                <div style={ headerStyle }>
                    <h1>Wetter.Weather</h1>
                    <p>A weather & radar app built using Node, Express, React & Redux.</p>
                    <LocationForm />
                </div>
        )
    }
}

export default Home
