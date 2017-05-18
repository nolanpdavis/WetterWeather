import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Home } from './components/layout'
import { LocationForm, DailyWeather, Radar } from './components/containers'

/* The Elements components is a summary of basic presentation componets
 * available for use in this theme
 */

class Example extends Component {
    render(){
        return (
            <div>
                <Home />
                <LocationForm />
                <DailyWeather />
                <Radar/>
            </div>
        )
    }
}

ReactDOM.render(<Example />, document.getElementById('root'))

// containerElement={<div style={{ height: 600, width: 600 }} />}
// mapElement={<div style={{ height: 600, width: 600 }} />}
