import React, { Component } from "react";
import { Transition } from "react-transition-group";

class TransitionComp extends Component {
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
        {/* {this.state.show && (
          <div style={{ background: "red", height: "100px" }}>Transition</div>
        )} */}
        <Transition in={this.state.show} timeout={1000}>
          {(state) => (
            <div className={`square square-${state}`}>square-{state}</div>
          )}
        </Transition>
        <button onClick={this.showDiv}>toggle div</button>
      </>
    );
  }
}

export default TransitionComp;
