import React, { PureComponent } from "react";

// export class PureComp extends Component {
export class PureComp extends PureComponent {
  state = {
    name: "Uzair Vawda",
  };

  // shouldComponentUpdate(nextProps, nextState) {
  //   if (nextState.name === this.state.name) {
  //     return false;
  //   }
  //   return true;
  // }

  render() {
    console.log("rendered");
    return (
      <>
        <p>Pure Component with PureComponent</p>
        <h3>{this.state.name}</h3>
        <button onClick={() => this.setState({ name: "Uzair" })}>
          CLICK TO CHANGE
        </button>
      </>
    );
  }
}

export default PureComp;
