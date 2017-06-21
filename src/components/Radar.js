import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Map, Marker, Popup, TileLayer } from 'react-leaflet'
import { connect } from 'react-redux'


class Radar extends Component {

    recenter(){
        let mapCenter = [this.props.weather.city.coord.lat, this.props.weather.city.coord.lon]
        this.refs.map.leafletElement.flyTo(mapCenter, 9)
    }

    render(){

        const mapCenter = [this.props.weather.city.coord.lat, this.props.weather.city.coord.lon]

        return (
            <div>
                <div className="radar">
                    <h2>Weather Forecast Radar</h2>
                </div>
                <div className="mapContainer">
                    <Map center={mapCenter} zoom={8} maxZoom={9} minZoom={6} useFlyTo={true} ref="map">
                        <TileLayer
                          attribution='Imagery provided by services from the Global Imagery Browse Services (GIBS), operated by the NASA/GSFC/Earth Science Data and Information System (<a href="https://earthdata.nasa.gov">ESDIS</a>) with funding provided by NASA/HQ.'
                          url='//map1.vis.earthdata.nasa.gov/wmts-webmerc/MODIS_Terra_CorrectedReflectance_TrueColor/default/GoogleMapsCompatible_Level9/{z}/{y}/{x}.jpg'
                        />
                        <TileLayer
                          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                          url='//tile.openweathermap.org/map/precipitation_new/{z}/{x}/{y}.png?appid=7c33083f5e2dd7eda0bf3020714ae680'
                          />
                          <TileLayer
                            attribution='Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
                            url='//stamen-tiles-{s}.a.ssl.fastly.net/toner-hybrid/{z}/{x}/{y}.png'
                            />
                        <Marker
                            position={mapCenter}
                            onClick={this.recenter.bind(this)}
                            />
                    </Map>
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

export default connect(stateToProps)(Radar)
