import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import actions from '../actions'
import { connect } from 'react-redux'
import { getWeather } from '../utils/GetWeather'
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


        return (
            <div>
                <h1>{city}</h1>
                <div className="weatherList">
                    { (days == null) ? null : days.map((day, i) =>{
                                return <div key={i} >
                                        <i className={"wi wi-owm-" + this.props.weather.list[i].weather[0].id}></i>
                                        <p>Max: {days[i].temp.max}</p>
                                        <p>Min: {days[i].temp.min}</p>
                                        <p>{days[i].weather[0].description}</p>
                                        <p>{Moment(days[i].dt * 1000).format('dddd')}</p>
                                        <hr />
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
