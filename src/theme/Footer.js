import React from 'react'
const flag2 = require('../../assets/images/flag-2.png')

export default (props) => {
	return (
        <footer className="text-center space--sm footer-5  ">
            <div className="container">
                <div className="row">
                    <div className="col-sm-12">
                        <div className="heading-block">
                            <ul className="list-inline list--hover">
                                <li>
                                    <a href="#">
                                        <span>Our Company</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <span>Locations</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <span>Products</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <span>Work With Us</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
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
                        </div>
                        <div>
                            <span className="type--fine-print">Made in Melbourne</span>
                            <img alt="Image" className="flag" src={flag2} />
                        </div>
                        <div>
                            <span className="type--fine-print">&copy;
                                <span className="update-year"></span> Stack Inc.</span>
                            <a className="type--fine-print" href="#">Privacy Policy</a>
                            <a className="type--fine-print" href="#">Legal</a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
	)
}