import React, { Component } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Footer from "./components/Footer.js";
import "./styles/Styles.css";
import db from "./db.json";
// import NewsList from './components/NewsList'
import LifeCycle from "./components/LifeCycle";

class App extends Component {
  state = {
    news: db,
    filtered: db,
    footerText: "this is a footer",
    active: true,
  };

  getKeywords = (event) => {
    const filtered = this.state.news.filter(
      (item) =>
        item.title.toLowerCase().indexOf(event.target.value.toLowerCase()) > -1
    );
    console.log(filtered);
    this.setState({ filtered });
  };

  render() {
    return (
      <>
        <Header getKeywords={this.getKeywords} />
        {/* <NewsList news={this.state.filtered} /> */}
        {this.state.active && <LifeCycle />}
        <button onClick={() => this.setState({ active: !this.state.active })}>
          Hide
        </button>
        <Footer footerText={this.state.footerText}>
          <p>footer child</p>
        </Footer>
      </>
    );
  }
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
