import React from "react"
import navImg from "../images/airbnb-logo.png"

export default function Navbar() {
	return (
		<header>
			<nav>
				<img src={navImg} alt="Airbnb logo" className="nav--logo"/>
			</nav>
		</header>
	)
}