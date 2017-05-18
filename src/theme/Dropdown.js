import React from 'react'

export default (props) => {
	const className = props.className || 'dropdown'
    const text = props.label || 'Dropdown Menu'
	
	return (
        <div className={className}>
            <span className="dropdown__trigger">
                {text}
                <i className="stack-down-open"></i>
            </span>

            <div className="dropdown__container" style={{left:-600}}>
                <div className="container">
                    <div className="row">
                        <div className="col-sm-3 col-md-2 dropdown__content" style={{left:600}}>
                            <h5>Select an option</h5>
                            <ul className="menu-vertical">
                                <li>
                                    <a href="#">Create</a>
                                </li>
                                <li>
                                    <a href="#">Manage</a>
                                </li>
                                <li>
                                    <a href="#">Share</a>
                                </li>
                                <li>
                                    <a href="#">Logout</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>

	)
}