// react components are a function that returns react elements (UI) in the form of JSX
// react components are resuable 

import React from "react"
import ReactDOM from "react-dom/client"
import Header from "./components/Header"
import Footer from "./components/Footer"
import MainContent from "./components/MainContent"
import "./index.css"

function Page() {
	return (
		<div>
			<Header />
			<MainContent />
			<Footer />
		</div>
	)
}

const root = ReactDOM.createRoot(document.getElementById("root"));

// "calling" the component
root.render(<Page />)
