import constants from '../constants'

var initialState = {
    currentWeather: {
        city: {
            name: "Los Angeles",
            coord: {
                lat: "",
                lon: ""
            }
        }
    }
}

export default (state = initialState, action) => {
    let updated = Object.assign({}, state)

    switch (action.type) {
        case constants.WEATHER_RECEIVED:
            updated['currentWeather'] = action.weather
            return updated

        default:
            return state
    }

}
