import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { withGoogleMap, GoogleMap, Marker } from 'react-google-maps'

class Radar extends Component {
    constructor(){
        super()
        this.state = {
            selected: null
        }
    }

    render(){

        return (
            <h1>Radar map will go here.</h1>
            // <GoogleMap
            // //   ref={props.onMapLoad}
            //   defaultZoom={3}
            //   defaultCenter={{ lat: -25.363882, lng: 131.044922 }}>
            // </GoogleMap>

        )
    }
}

export default Radar
