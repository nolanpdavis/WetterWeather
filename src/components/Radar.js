import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Map, Marker, Popup, TileLayer } from 'react-leaflet'
import { connect } from 'react-redux'
import actions from '../actions'
import { getWeatherByLatLng } from '../utils/getWeatherByLatLng'


class Radar extends Component {
  constructor(){
      super()
      this.state = {
          latLng: {
            lat: '',
            lng: ''
          },
          zoom: 3
      }
  }

    componentDidMount(){
      this.refs.map.leafletElement.locate({setView: true, maxZoom: 6, watch: true})
      .on('locationfound', (e) => {
        const latLng = e.latlng
        this.setState({
          latLng: latLng
        })
        getWeatherByLatLng(this.state.latLng, (err, response) => {
            this.props.weatherReceived(response)
        })
      })
    }


    recenter(){
        let mapCenter = [this.props.weather.city.coord.lat, this.props.weather.city.coord.lon]
        this.refs.map.leafletElement.flyTo(mapCenter, 6)
    }

    handleOnZoom(){
        const zoomLevel = this.refs.map.leafletElement.getZoom()
        this.setState({
          zoom: zoomLevel
        })
    }


    render(){

        const mapCenter = [this.props.weather.city.coord.lat, this.props.weather.city.coord.lon]

        return (
            <div>
                <div className="mapContainer">
                    <Map center={mapCenter} onZoomend={this.handleOnZoom.bind(this)} zoom={this.state.zoom} minZoom={2} maxZoom={9} useFlyTo={true} ref="map">
                        <TileLayer
                          attribution='Imagery provided by services from the Global Imagery Browse Services (GIBS), operated by the NASA/GSFC/Earth Science Data and Information System (<a href="https://earthdata.nasa.gov">ESDIS</a>) with funding provided by NASA/HQ.'
                          url='https://gibs.earthdata.nasa.gov/wmts/epsg3857/best/MODIS_Terra_CorrectedReflectance_TrueColor/default/GoogleMapsCompatible_Level9/{z}/{y}/{x}.jpg'
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

const dispatchToProps = (dispatch) => {
    return {
        weatherReceived: (weather) => dispatch(actions.weatherReceived(weather))
    }
}

export default connect(stateToProps, dispatchToProps)(Radar)
