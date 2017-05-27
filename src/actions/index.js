import constants from '../constants'

export default {

	weatherReceived: (weather) => {
		return {
			type: constants.WEATHER_RECEIVED,
			weather: weather
		}
	}

}
