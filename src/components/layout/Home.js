import React, { Component } from 'react'
import ReactDOM from 'react-dom'

// images:
const leafRain = require('../../../assets/images/LeafRain.jpg')

class Home extends Component {
    constructor(){
        super()
        this.state = {
            selected: null
        }
    }

    render(){


        return (
                <div className="main-container">
                    <section className="imagebg image--light cover cover-blocks bg--secondary">
                        <div className="background-image-holder">
                            <img alt="background" src={leafRain} />
                        </div>
                        <div className="container">
                            <div className="row">
                                <div className="col-sm-6 col-md-5 col-md-offset-1">
                                    <div>
                                        <h1 className="headerLead" style={{color: '#fff7bf'}}>Wetter.Weather</h1>
                                        <p className="lead" style={{color: 'white'}}>
                                            A weather & radar app built using Node, Express, React & Redux.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>

        )
    }
}

export default Home
