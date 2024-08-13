import React, { Component } from "react";

class Exercise3 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Java Script",
    };
  }

  handleClick = () => {
    const parts = this.state.name.split(" "); // Splits "Java Script" into ["Java", "Script"]
    const newName = parts[0].charAt(0) + parts[1].charAt(0); // Takes the first character of each part and joins them
    this.setState({ name: newName });
  };

  render() {
    return (
      <div className="p-5">
        <p className="text-lg mb-4">{this.state.name}</p>
        <button
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
          onClick={this.handleClick}
        >
          Split
        </button>
      </div>
    );
  }
}

export default Exercise3;