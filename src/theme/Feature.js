import React from 'react'

export default (props) => {
	return (
        <div className="feature feature-1">
            <img alt="Image" src={props.image} />
            <div className="feature__body boxed boxed--lg boxed--border">
                <h3 className="type--uppercase">
                    <em>
                        <strong>{props.title}</strong>
                    </em>
                </h3>
                <p className="lead">{props.text}</p>
                <a href="#">
                    Learn More
                </a>
            </div>
        </div>

	)
}