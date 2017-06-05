import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import actions from '../actions'
import { connect } from 'react-redux'
import { getWeather } from '../utils/getWeather'
import Moment from 'moment'

class DailyWeather extends Component {

    componentWillMount(){
        getWeather(this.props.weather.city.name, (err, response) => {
            this.props.weatherReceived(response)
        })
    }

    render(){
        const city = this.props.weather.city.name
        const days = this.props.weather.list

        const toFahrenheit = (num) => {
            return Math.round(num * 10) / 10 + "°F"
        }


        return (
            <div>
                <h2>{city}</h2>
                <div className="weatherList">
                    { (days == null) ? null : days.map((day, i) =>{
                                return <div key={i} className="weatherDay">
                                        <h3>{Moment(days[i].dt * 1000).format('dddd')}</h3>
                                        <i className={"wi wi-owm-" + this.props.weather.list[i].weather[0].id}></i>
                                        <p className="weatherDescription">{days[i].weather[0].description}</p>
                                        <p className="weatherTemp">High: {toFahrenheit(days[i].temp.max)}</p>
                                        <p className="weatherTemp">Low: {toFahrenheit(days[i].temp.min)}</p>
                                    </div>
                            })
                        }
                </div>
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

export default connect(stateToProps, dispatchToProps)(DailyWeather)
