import React from 'react'

export default (props) => {

	const className = props.className || 'pricing pricing-2 boxed boxed--border boxed--lg'
	return (
        <div className={className}>
            <span className="label">Value</span>
            <div className="col-md-6 text-center">
                <h5>Medium User</h5>
                <span className="h1">
                    <span className="pricing__dollar">$</span>50</span>
                <p className="type--fine-print">Per Month, AUD.</p>
                <a className="btn btn--primary" href="#">
                    <span className="btn__text">Purchase Plan</span>
                </a>
            </div>
            <div className="col-md-6">
                <ul>
                    <li>
                        <span className="checkmark bg--primary-1"></span>
                        <span>24/7 Phone Support</span>
                    </li>
                    <li>
                        <span className="checkmark bg--primary-1"></span>
                        <span>Unlimited Skips</span>
                    </li>
                    <li>
                        <span className="checkmark bg--primary-1"></span>
                        <span>Import CSV Data</span>
                    </li>
                    <li>
                        <span className="checkmark bg--primary-1"></span>
                        <span>Automatic Transfer</span>
                    </li>
                    <li>
                        <span className="checkmark bg--primary-1"></span>
                        <span>100GB Storage</span>
                    </li>
                </ul>
            </div>
        </div>
	)

}