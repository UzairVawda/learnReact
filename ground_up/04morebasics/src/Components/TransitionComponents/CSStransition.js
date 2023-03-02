import React, { Component } from "react";
import { CSSTransition } from "react-transition-group";

class CssTr extends Component {
  state = {
    show: true,
  };

  showDiv = () => {
    console.log("toggle");
    this.setState({ show: !this.state.show });
  };

  render() {
    return (
      <>
        <CSSTransition in={this.state.show} timeout={1000} classNames="uniq">
          {(state) => <div className="uniq">square-{state}</div>}
        </CSSTransition>
        <button onClick={this.showDiv}>toggle div</button>
      </>
    );
  }
}

export default CssTr;
