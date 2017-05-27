import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import {  weatherReducer } from '../reducers'

var store
export default {

	configureStore: (initialState) => { // initialState can be null

		const reducers = combineReducers({ // insert reducers here
			weather: weatherReducer
		})

		if (initialState){
			store = createStore(
			    reducers,
			    initialState,
			    applyMiddleware(thunk)
			)

			return store
		}

		store = createStore(
		    reducers,
		    applyMiddleware(thunk)
		)

		return store
	},

	currentStore: () => {
		return store
	}
}
