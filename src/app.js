import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Background } from './components'
import store from './stores'
import { Provider } from 'react-redux'
import style from '../assets/css/main.scss'


class App extends Component {

    render(){

        return (
            <Provider store={ store.configureStore() }>
                <div id="root">
                    <Background />
                </div>
            </Provider>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'))
