import React, { Component } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";

class Tgroup extends Component {
  state = {
    items: ["225", "552", "252"],
  };

  showElements() {
    return this.state.items.map((item, i) => (
      <CSSTransition key={i} classNames="item" timeout={500} appear={true}>
        <div className="item">{item}</div>
      </CSSTransition>
    ));
  }

  generateNumber() {
    let newArr = [...this.state.items, Math.floor(Math.random() * 1000) + 1];
    this.setState({ items: newArr });
  }

  removeNumber() {
    let newArr = this.state.items.slice(0, -1);
    this.setState({ items: newArr });
  }

  render() {
    return (
      <div>
        <TransitionGroup component="div" className="list">
          {this.showElements()}
        </TransitionGroup>
        <div className="btns">
          <button onClick={() => this.generateNumber()}>Add Element</button>
          <button onClick={() => this.removeNumber()}>Remove Element</button>
        </div>
      </div>
    );
  }
}

export default Tgroup;
