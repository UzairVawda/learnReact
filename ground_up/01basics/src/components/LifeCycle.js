import React, { Component } from "react";

export default class LifeCycle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Uzair",
    };
    console.log("1-constructor");
  }

  static getDerivedStateFromProps(props, state) {
    console.log("2-getDerivedStateFromProps");
    console.log(props, state);
    if (state.name === "ron") {
      return {
        name: "Vawda",
      };
    }
    return null;
  }

  componentDidMount() {
    console.log("4-componentDidMount");
  }

  componentWillUnmount() {
    console.log("5-componentWillUnmount");
  }

  shouldComponentUpdate(nestProps, nextState) {
    console.log("x-shouldComponentUpdate");
    console.log(nestProps, nextState);
    if (nextState.name === "vawda") {
      return false;
    }
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("x-getSnapshotBeforeUpdate");
    // console.log(prevProps, prevState);
    let age = 23;
    return age;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("x-componentDidUpdate");
    // console.log(prevProps, prevState);
    console.log(snapshot);
  }

  render() {
    console.log("3-render");
    return (
      <div>
        <p>{this.state.name}</p>
        <div onClick={() => this.setState({ name: "ron" })}>
          {this.state.name}
        </div>
      </div>
    );
  }
}
