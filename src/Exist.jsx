import { Component } from "react";

class Exist extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      password: "",
    };
  }

  render() {
    const { name, email, password } = this.state;
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="flex gap-4">
          <div className="flex flex-col space-y-4 border border-green-500 px-3 py-4">
            <input
              className="border border-gray-500 rounded px-3 py-2"
              placeholder="Type name"
              onChange={(event) => this.setState({ name: event.target.value })}
              value={this.state.name}
            />
            <input
              className="border border-gray-500 rounded px-3 py-2"
              placeholder="Type email"
              onChange={(event) => this.setState({ email: event.target.value })}
              value={this.state.email}
            />
            <input
              className="border border-gray-500 rounded px-3 py-2"
              placeholder="Type password"
              onChange={(event) => this.setState({ password: event.target.value })}
              value={this.state.password}
            />
          </div>
          <div>
            <h1>My name is: {name}</h1>
            <h1>My email is: {email}</h1>
            <h1>My password is: {password}</h1>
          </div>
        </div>
      </div>
    );
  }
}

export default Exist;