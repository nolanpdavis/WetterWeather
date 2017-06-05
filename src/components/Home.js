import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import LocationForm from './LocationForm'

class Home extends Component {

    render(){

        return (
                <div className="homeHeader" >
                    <div className="headerBox">
                        <h1 className="wetter">Wetter</h1><h1>.Weather</h1>
                    </div>
                    <p className="homeText">A weather & radar app built using Node, Express, React & Redux.</p>
                    <LocationForm />
                </div>
        )
    }
}

export default Home
