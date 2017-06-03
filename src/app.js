import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Home, LocationForm, DailyWeather, Radar } from './components'
import store from './stores'
import { Provider } from 'react-redux'
import style from '../assets/css/main.scss'


const leafRain = require('../assets/images/LeafRain.jpg')

class App extends Component {
    render(){

        const headerStyle = {
            backgroundImage: 'url('+ leafRain + ')',
            backgroundSize: "cover",
            backgroundAttachment: "fixed"
        }

        return (
            <Provider store={ store.configureStore() }>
                <div style={headerStyle}>
                    <Home />
                    <DailyWeather />
                    <Radar />
                </div>
            </Provider>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'))
