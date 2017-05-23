import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Home } from './components/layout'
import { LocationForm, DailyWeather, Radar } from './components/containers'
import store from './stores'
import { Provider } from 'react-redux'

/* The Elements components is a summary of basic presentation componets
 * available for use in this theme
 */

class App extends Component {
    render(){
        return (
            <Provider store={ store.configureStore() }>
                <div>
                    <Home />
                    <LocationForm />
                    <DailyWeather />
                    <Radar/>
                </div>
            </Provider>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'))

// containerElement={<div style={{ height: 600, width: 600 }} />}
// mapElement={<div style={{ height: 600, width: 600 }} />}
