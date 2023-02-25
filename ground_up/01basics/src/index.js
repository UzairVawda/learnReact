import React, { Component } from 'react'
import ReactDOM from 'react-dom/client'
import Header from './components/Header'
import Footer from './components/Footer.js'
import "./styles/Styles.css"
import db from "./db.json"
import NewsList from './components/NewsList'

class App extends Component {

	state = {
		news: db,
		footerText: "this is a footer"
	}

	getKeywords = () => {
		console.log("HELLO")
	}

	render() {
		return (
			<>
				<Header getKeywords={this.getKeywords} />
				<NewsList news={this.state.news} />
				<Footer footerText={this.state.footerText}>
					<p>footer child</p>
				</Footer>
			</>
		)
	}
}

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<App />)