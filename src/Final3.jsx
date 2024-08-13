import { Loader2 } from "lucide-react";
import { Component } from "react";

class Final3 extends Component {
  constructor() {
    super();
    this.state = {
      fullName: "",
      email: "",
      password: "",
    //  Age:;
    //  Gender:"";
      //loader: false,
    };
    // this.handleClick = this.handleClick.bind(this);
  }

  handleClick = (event) => {
    event.preventDefault();
    this.setState({ loader: true });
    console.log("button", this.state);
    setTimeout(() => {
      this.setState({ loader: false });
    }, 5000);
  };

  render() {
    return (
      <div className="flex items-center justify-center h-screen">
        <form className="flex flex-col gap-4" onSubmit={this.handleClick}>
          <div className="flex flex-col">
            <label>Full Name</label>
            <input
              className="border border-gray-300 rounded px-2 focus-visible:outline-none"
              placeholder="Type full name..."
              id="name"
              value={this.state.fullName}
              onChange={(event) =>
                this.setState({ ...this.state, fullName: event.target.value })
              }
            />
          </div>
          <div className="flex flex-col">
            <label>Email</label>
            <input
              className="border border-gray-300 rounded px-2 focus-visible:outline-none"
              placeholder="Type your email..."
              id="email"
              value={this.state.email}
              onChange={(event) =>
                this.setState({ ...this.state, email: event.target.value })
              }
            />
          </div>
          <div className="flex flex-col">
            <label>Password</label>
            <input
              className="border border-gray-300 rounded px-2 focus-visible:outline-none"
              placeholder="Type your password..."
              id="password"
              value={this.state.password}
              onChange={(event) =>
                this.setState({ ...this.state, password: event.target.value })
              }
            />
          </div>
          <div className="flex flex-col">
            <label>Age</label>
            <input
              className="border border-gray-300 rounded px-2 focus-visible:outline-none"
              placeholder="Enter your age"
              id="Age"
              value={this.state.Age}
              onChange={(event) =>
                this.setState({ ...this.state, Age: event.target.value })
              }
            />
          </div>
          <div className="flex flex-col">
            <label>Gender</label>
            <input
              className="border border-gray-300 rounded px-2 focus-visible:outline-none"
              placeholder="Enter your Gender"
              id="Gender"
              value={this.state.Gender}
              onChange={(event) =>
                this.setState({ ...this.state, Gender: event.target.value })
              }
            />
          </div>
          <button
            className="border border-blue-500 gap-2 rounded px-3 py-2 flex items-center justify-center"
            type="submit"
          >
            {!this.state.loader && (
              <Loader2 className="animate-spin text-blue-500" />
            )}
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default Final3;
