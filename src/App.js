import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      password: "",
    };
  }

  handleNameChange = (event) => {
    this.setState({ name: event.target.value });
  };

  handleEmailChange = (event) => {
    this.setState({ email: event.target.value });
  };

  handlePasswordChange = (event) => {
    this.setState({ password: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
  };

  render() {
    console.log(this.state.name);
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          onChange={this.handleNameChange}
          value={this.state.name}
          type="text"
          placeholder="Enter your name"
        />
        <input
          onChange={this.handleEmailChange}
          value={this.state.email}
          type="email"
          placeholder="Enter your email"
        />
        <input
          onChange={this.handlePasswordChange}
          value={this.state.password}
          type="password"
          placeholder="Enter your password"
        />
        <input type="submit" />
      </form>
    );
  }
}

export default App;
