import constants from '../constants'

var initialState = {
    currentLocation: 'Los Angeles'
}

export default (state = initialState, action) => {
    let updated = Object.assign({}, state)

    switch (action.type) {
        case constants.LOCATION_RECEIVED:
            updated['currentLocation'] = action.location
            return updated

        default:
            return state
    }

}
