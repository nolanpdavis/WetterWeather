import React from 'react'

// images:
const logo = require('../../assets/images/logo-light.png')

export default (props) => {
	return (
        <div className="nav-container nav-container--sidebar">
			<div className="nav-sidebar-column bg--dark">
	            <div className="text-center text-block">
	                <a href="index.html">
	                    <img alt="logo" className="logo" src={logo} />
	                </a>
	                <p>Build Something <em>Brilliant.</em></p>
	            </div>
	            <hr />
	            <div className="text-block">
	                <ul className="menu-vertical">
	                    <li><a onClick={props.selectElement.bind(this, null)} href="/"><span>Home</span></a></li>
	                    <li className="dropdown">
	                        <span className="dropdown__trigger">Elements</span>
	                        <div className="dropdown__container">
	                            <div className="dropdown__content">
	                                <ul className="menu-vertical">
	                                	{ ['Table', 'Form', 'Button', 'Boxes', 'Dropdown', 'Feature', 'Pricing'].map((element, i) => {
	                                			return <li key={element}><a onClick={props.selectElement.bind(this, element.toLowerCase())} href="#"><span>{element}</span></a></li>
		                                	})
	                                	}
	                                </ul>
	                            </div>
	                        </div>
	                    </li>
	                   
	                </ul>
	            </div>
	            <hr />
	            <div>
	                <ul className="social-list list-inline list--hover">
	                    <li>
	                        <a href="#">
	                            <i className="socicon socicon-google icon icon--xs"></i>
	                        </a>
	                    </li>
	                    <li>
	                        <a href="#">
	                            <i className="socicon socicon-twitter icon icon--xs"></i>
	                        </a>
	                    </li>
	                    <li>
	                        <a href="#">
	                            <i className="socicon socicon-facebook icon icon--xs"></i>
	                        </a>
	                    </li>
	                    <li>
	                        <a href="#">
	                            <i className="socicon socicon-instagram icon icon--xs"></i>
	                        </a>
	                    </li>
	                </ul>
	                <div>
	                    <span className="type--fine-print type--fade">
	                        &copy; Copyright
	                        <span className="update-year"></span> Medium Rare
	                    </span>
	                </div>
	            </div>
	        </div>

            <div className="nav-sidebar-column-toggle visible-xs visible-sm" data-toggle-className=".nav-sidebar-column;active">
                <i className="stack-menu"></i>
            </div>
        </div>		
	)
}