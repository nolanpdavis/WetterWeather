import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import superagent from 'superagent'

class LocationForm extends Component {

    getLocation(){

        const city = "Atlanta"

        const country = "U.S.A"

        superagent
        .get('http://api.openweathermap.org/data/2.5/forecast/daily?q=Atlanta,us&cnt=5&appid=7c33083f5e2dd7eda0bf3020714ae680')
        .query()
        .set('Accept', 'application/json')
        .end((err, response) => {
            if(err)
                alert(err)
            console.log("API Request: "+JSON.stringify(response.body))
        })
    }

    render(){


        return (
            <div>
                <input type="text" placeholder="Where would you like to check the weather?"/>
                <button onClick={this.getLocation.bind(this)}>Submit</button>
            </div>

        )
    }
}

export default LocationForm
