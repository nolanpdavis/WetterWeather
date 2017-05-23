import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import actions from '../../actions'
import { connect } from 'react-redux'
import { getWeather } from '../../utils/GetWeather'

class DailyWeather extends Component {
    // constructor(){
    //     super()
    //     this.state = {
    //         currentLocation: ''
    //     }
    // }

    componentDidUpdate(){
        getWeather(this.props.location)
    }

    render(){


        return (
            <div>
                <h1>{this.props.location}</h1>
            </div>

        )
    }
}

const stateToProps = (state) => {
    return {
        location: state.location.currentLocation
    }
}

const dispatchToProps = (dispatch) => {
    return {
        locationReceived: (location) => dispatch(actions.locationReceived(location))
    }
}

export default connect(stateToProps, dispatchToProps)(DailyWeather)
