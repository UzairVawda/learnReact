import React from "react"
import Star from "../images/star.png"

export default function Card(props) {
	
	return (
		<div className="card">
			<img src={require(`../images/${props.img}`)} alt="Experience" className="card--image"/>
			{/* <p className="card--soldout">SOLD OUT</p> */}
			<div className="card--stats">
				<img src={Star} alt="Star" className="card--star"/>
				<span>{props.rating}</span>
				<span className="grey">({props.reviewCount}) * </span>
				<span className="grey">{props.country}</span>
			</div>
			<p className="card--title">{props.title}</p>
			<p><span className="bold">From ${props.price}</span> / person</p>
		</div>
	)
}