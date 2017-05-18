import React from 'react'

export default (props) => {
	const className = props.className || 'boxed boxed--border'
	
	return (
        <div className={className}>
            <h4>Modern Aesthetic</h4>
            <p>
                Build a beautifully performant site with Stacks vast collection of modular elements.
            </p>
            <a className="btn btn--primary" href="#">
                <span className="btn__text">
                    Build Now
                </span>
            </a>
        </div>
	)
}