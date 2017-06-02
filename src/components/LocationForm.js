import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import actions from '../actions'
import { connect } from 'react-redux'
import { getWeather } from '../utils/GetWeather'


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

    updateLocation(){
        if (this.state.location.length < 4) {
            return
        }
        getWeather(this.state.location, (err, response) => {
            this.props.weatherReceived(response)
        })
    }



    render(){


        return (
            <div>
                <input onChange={this.saveLocation.bind(this)} type="text" placeholder="Where would you like to check the weather?"/>
                <button onClick={this.updateLocation.bind(this)}>Submit</button>
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
