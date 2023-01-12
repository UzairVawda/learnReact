import React from "react"
import Avatar from "../images/avatar.png"

export default function Header() {
	return (
		<header>
			<img src={Avatar} alt="Business Card" className="card--headshot" />
			<h1 className="card--name">Uzair Vawda</h1>
			<h3 className="card--title">Web Dveloper</h3>
			<a href="uzairvawd.me" className="card--website">uzairvawda.me</a>
			<div className="card--btn_group">
				<button><i className="fa fa-envelope"></i>Email</button>
				<button><i className="fa-brands fa-linkedin"></i>LinkedIn</button>
			</div>
			<hr />
		</header>
	)
}