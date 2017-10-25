import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import actions from '../actions'
import { connect } from 'react-redux'
import { getWeather } from '../utils/getWeather'
import { getWeatherByZip } from '../utils/getWeatherByZip'


class LocationForm extends Component {
    constructor(){
        super()
        this.state = {
            location: ''
        }
    }

    saveLocation(event){
        this.setState({
            location: event.target.value
        })

    }

    updateLocation(event){
        event.preventDefault()

        if (this.state.location.length < 3) {
            return
        }

        if (Number.isNaN(parseInt(this.state.location))) {
          getWeather(this.state.location, (err, response) => {
              this.props.weatherReceived(response)
            })
        }

        else {
          getWeatherByZip(this.state.location, (err, response) => {
              this.props.weatherReceived(response)
            })
        }

    }



    render(){


        return (
            <div className="locationForm">
                <form className="inputContainer" type="submit" onSubmit={this.updateLocation.bind(this)}>
                    <button className="noShowBtn">Submit</button>
                    <input onChange={this.saveLocation.bind(this)} type="text" placeholder="Where would you like to check the weather?"/>
                    <button onClick={this.updateLocation.bind(this)} type="submit">Submit</button>
                </form>
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

export default connect(stateToProps, dispatchToProps)(LocationForm)
