import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Map, Marker, Popup, TileLayer } from 'react-leaflet'
import { connect } from 'react-redux'


class Radar extends Component {

    recenter(){
        let mapCenter = [this.props.weather.city.coord.lat, this.props.weather.city.coord.lon]
        this.refs.map.leafletElement.flyTo(mapCenter, 10)
    }

    render(){

        const mapCenter = [this.props.weather.city.coord.lat, this.props.weather.city.coord.lon]

        return (
            <div className="mapContainer">
                <Map center={mapCenter} zoom={8} useFlyTo={true} ref="map">
                    <TileLayer
                      attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                      url='http://sat.owm.io/sql/{z}/{x}/{y}?select=b4,b3,b2&from=modis&where=now&order=last&color=none&APPID=cb0e986554cfd5cc3e2dae65a53cede3'
                    />
                    <TileLayer
                      attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                      url='http://tile.openweathermap.org/map/precipitation_new/{z}/{x}/{y}.png?appid=7c33083f5e2dd7eda0bf3020714ae680'
                      />
                    <Marker
                        position={mapCenter}
                        onClick={this.recenter.bind(this)}
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
