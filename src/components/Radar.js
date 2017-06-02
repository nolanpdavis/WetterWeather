import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Map, Marker, Popup, TileLayer } from 'react-leaflet'
import { connect } from 'react-redux'


class Radar extends Component {

    render(){

        const mapCenter = [this.props.weather.city.coord.lat, this.props.weather.city.coord.lon]

        return (
            <div className="mapContainer">
                <Map center={mapCenter} zoom={10}>
                    <TileLayer
                      attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                      url='http://stamen-tiles-{s}.a.ssl.fastly.net/toner-lite/{z}/{x}/{y}.png'
                    />
                    <TileLayer
                      attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                      url='http://tile.openweathermap.org/map/precipitation_new/{z}/{x}/{y}.png?appid=7c33083f5e2dd7eda0bf3020714ae680'
                      />
                </Map>
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
