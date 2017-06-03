import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import LocationForm from './LocationForm'

// images:
const leafRain = require('../../assets/images/LeafRain.jpg')

class Home extends Component {

    render(){

        return (
                <div className="homeHeader" >
                    <h1>Wetter.Weather</h1>
                    <p className="homeText">A weather & radar app built using Node, Express, React & Redux.</p>
                    <LocationForm />
                </div>
        )
    }
}

export default Home
