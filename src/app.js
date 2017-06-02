import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Home, LocationForm, DailyWeather, Radar } from './components'
import store from './stores'
import { Provider } from 'react-redux'
import style from '../assets/css/main.scss'

/* The Elements components is a summary of basic presentation componets
 * available for use in this theme
 */

class App extends Component {
    render(){
        return (
            <Provider store={ store.configureStore() }>
                <div>
                    <Home />
                    <DailyWeather />
                    <Radar />
                </div>
            </Provider>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'))
