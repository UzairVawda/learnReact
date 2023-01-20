import React from "react"

export default function Die(props) {
	const dieStyles = {
		backgroundColor : props.held ? "#59E391" : "#E5E5E5"
	}

	return (
		<div className="dieFace" style={dieStyles} onClick={props.holdDie}>
			<h2 className="dieText">{props.value}</h2>
		</div>
	)
}