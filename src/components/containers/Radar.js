import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { withGoogleMap, GoogleMap, Marker } from 'react-google-maps'
import withScriptjs from "react-google-maps/lib/async/withScriptjs"
import FaSpinner from "react-icons/lib/fa/spinner"
import { connect } from 'react-redux'

class Radar extends Component {

    render(){

        const AsyncGettingStartedGoogleMap = withScriptjs(
            withGoogleMap(
                props => (
                  <GoogleMap
                    defaultZoom={10}
                    defaultCenter={{ lat: this.props.weather.city.coord.lat, lng: this.props.weather.city.coord.lon }}>
                  </GoogleMap>
              )))

        return (
            <div>
                <h1>Radar Map</h1>
                <AsyncGettingStartedGoogleMap
                    googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyAGEaUeMMeJv7Sr6WMV4ClussJmDg4Q1K8"
                    loadingElement={
                      <div style={{ height: `100%` }}>
                        <FaSpinner
                          style={{
                            display: `block`,
                            width: `80px`,
                            height: `80px`,
                            margin: `150px auto`,
                            animation: `fa-spin 2s infinite linear`,
                          }}
                        />
                      </div>
                    }
                    containerElement={<div style={{ height: `600px`, width: `600px` }} />}
                    mapElement={<div style={{ height: `600px`, width: `600px` }} />}
                />
            </div>

        )
    }
}

const stateToProps = (state) => {
    return {
        weather: state.weather.currentWeather
    }
}

export default connect(stateToProps)(Radar)
