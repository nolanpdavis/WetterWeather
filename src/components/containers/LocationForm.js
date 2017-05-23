import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import actions from '../../actions'
import { connect } from 'react-redux'


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
        this.props.locationReceived(this.state.location)
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
        location: state.location.currentLocation
    }
}

const dispatchToProps = (dispatch) => {
    return {
        locationReceived: (location) => dispatch(actions.locationReceived(location))
    }
}

export default connect(stateToProps, dispatchToProps)(LocationForm)
