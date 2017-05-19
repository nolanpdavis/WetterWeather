import constants from '../constants'

export default {

	locationReceived: (location) => {
		return {
			type: constants.LOCATION_RECEIVED,
			location: location
		}
	}

}
