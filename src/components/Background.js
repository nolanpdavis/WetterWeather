import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import actions from '../actions'
import { connect } from 'react-redux'
import { imgPicker } from '../utils/imgPicker'
import { getWeather } from '../utils/getWeather'
import Home from './Home'
import DailyWeather from './DailyWeather'
import Radar from './Radar'
import { Parallax } from 'react-parallax'


class Background extends Component {

    componentWillMount(){
        getWeather(this.props.weather.city.name, (err, response) => {
            this.props.weatherReceived(response)
        })
    }

    render(){

        const weatherId = (this.props.weather.list == null) ? 1000 : this.props.weather.list[0].weather[0].id

        const weatherImage = imgPicker(weatherId)



        return (
            <div>
                <Parallax className="parallax"
                    bgImage={weatherImage}
                    strength={200}/>
                <Home />
                <DailyWeather />
                <Radar />
            </div>
        )
    }
}

const stateToProps = (state) => {
    return {
        weather: state.weather.currentWeather
    }
}

const dispatchToProps = (dispatch) => {
    return {
        weatherReceived: (weather) => dispatch(actions.weatherReceived(weather))
    }
}

export default connect(stateToProps, dispatchToProps)(Background)
