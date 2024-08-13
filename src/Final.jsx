import { Component } from "react";
class Final extends Component {
  constructor() {
    super();
    this.state = {
      count: 0
    };
    // this.handleClick = this.handleClick.bind(this);
  }

  handleDecrement = () => {
    this.setState({ count: this.state.count - 1 });
  };
  
  handleIncrement = () => {
    this.setState((prevState) => ({ count: prevState.count + 1 }));
  };

  render() {
    const { count } = this.state;
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="flex gap-3">
          <button
            className="text-red-500 text-4xl"
            onClick={this.handleDecrement}
          >
            -
          </button>
          <div
            className={`border p-4 rounded ${
              count === 0 ? "border-blue-500" : "border-black"
            }`}
          >
            <p
              className={`text-lg font-semibold ${
                count === 0 ? "text-blue-500" : "text-black"
              }`}
            >
              {count === 0 ? "Zero" : count}
            </p>
          </div>
          <button
            className="text-green-500 text-4xl"
            onClick={this.handleIncrement}
          >
            +
          </button>
        </div>
      </div>
    );
  }
}

export default Final;
