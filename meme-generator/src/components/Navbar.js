import NavImg from "../images/troll-face.png"

export default function Navbar() {
	return (
		<header>
			<nav className="navbar">
				<img src={NavImg} alt="troll face" className="nav--img"/>
				<h2 className="nav--title">MEME GENERATOR</h2>
				<h4 className="nav--description">React Project</h4>
			</nav>
		</header>
	)
}