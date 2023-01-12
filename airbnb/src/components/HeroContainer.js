import React from "react"
import HeroImg from "../images/photo-grid.png"

export default function Navbar() {
	return (
		<section className="hero">
			<img src={HeroImg} alt="Main Content" className="hero--image"/>
			<h1 className="hero--title">Online Experiences</h1>
			<p className="hero--summary">Join unique interactive activities lead by one of a kind host without leaving home</p>
		</section>
	)
}