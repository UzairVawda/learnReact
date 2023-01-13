import React from "react"
import Star from "../images/star.png"

export default function Card(props) {
	
	let badgeText
	if (props.openSpots === 0) {
		badgeText = "SOLD OUT"
	} else if (props.location === "Online") {
		badgeText = "ONLINE" 
	}

	return (
		<div className="card">
			<img src={require(`../images/${props.coverImg}`)} alt="Experience" className="card--image"/>
			{ badgeText &&  <div className="card--badge bold">{badgeText}</div>}
			<div className="card--stats">
				<img src={Star} alt="Star" className="card--star"/>
				<span>{props.stats.rating}</span>
				<span className="grey">({props.stats.reviewCount}) * </span>
				<span className="grey">{props.location}</span>
			</div>
			<p className="card--title">{props.title}</p>
			<p className="card--price"><span className="bold ">From ${props.price}</span> / person</p>
		</div>
	)
}