import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import MainContent from "./MainContent";

export default function Card() {
	return (
		<div className="card">
			<Header />
			<MainContent />
			<Footer />
		</div>
	)
}