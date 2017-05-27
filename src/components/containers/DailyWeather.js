import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import actions from '../../actions'
import { connect } from 'react-redux'
import { getWeather } from '../../utils/GetWeather'
import { DayForecast } from '../presentation'
import Moment from 'moment'

class DailyWeather extends Component {

    componentWillMount(){
        getWeather(this.props.weather.city.name, (err, response) => {
            this.props.weatherReceived(response)
            console.log(this.props.weather)
        })
    }

    render(){
        const city = this.props.weather.city.name
        const days = this.props.weather.list

        return (
            <div>
                <h1>{city}</h1>
                    { (days == null) ? null : days.map((day, i) =>{
                                return <div key={i}>
                                        <h2>Max: {days[i].temp.max}</h2>
                                        <h2>Min: {days[i].temp.min}</h2>
                                        <h2>{days[i].weather[0].description}</h2>
                                        <h2>{Moment(days[i].dt * 1000).format('dddd')}</h2>
                                        <hr />
                                    </div>
                            })
                        }
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
