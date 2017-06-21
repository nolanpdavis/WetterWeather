import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import actions from '../actions'
import { connect } from 'react-redux'
import { imgPicker } from '../utils/imgPicker'
import { getWeather } from '../utils/getWeather'
import Home from './Home'
import DailyWeather from './DailyWeather'
import Radar from './Radar'


class Background extends Component {

    componentWillMount(){
        getWeather(this.props.weather.city.name, (err, response) => {
            this.props.weatherReceived(response)
        })
    }

    render(){

        const weatherId = (this.props.weather.list == null) ? 1000 : this.props.weather.list[0].weather[0].id

        const weatherImage = imgPicker(weatherId)

        const backgroundImage = {
            backgroundImage: 'url('+ weatherImage + ')',
            backgroundSize: "cover",
            backgroundAttachment: "fixed"
        }


        return (
            <div style={backgroundImage}>
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
