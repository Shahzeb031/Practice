import React from 'react';
import './App.css'; //To create and import your CSS file

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      email: '',
      password: '',
    };
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    // Add form submission logic here
    console.log('Form submitted:', this.state);
  }
  render() {
    return (
      <div className="form-container">
        <form onSubmit={this.handleSubmit} className="form">
          <div className="form-group">
            <label htmlFor="">FullName:</label>
            <input
              type="text"
              id="text"
              name="text"
              value={this.state.text}
              onChange={this.handleChange}
              className="input"
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={this.state.email}
              onChange={this.handleChange}
              className="input"
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              value={this.state.password}
              onChange={this.handleChange}
              className="input"
            />
          </div>
        
          <div className="form-group">
            <label htmlFor="age">Age:</label>
            <input
            type="date"
            id="age"
            name="age"
            value={this.state.age}
            onChange={this.handleChange}
            className="input"
            
            />
          </div>
          <button type="submit" className="submit-button">Submit</button>    
        </form>
      </div>
    );
  }
}
export default App;
