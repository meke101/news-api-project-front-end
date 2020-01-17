import React, { Component } from "react";

export default class UserBar extends Component {
  state = {
    currentUser: "grumpy19",
    isLoading: true
  };

  render() {
    const { isLoading } = this.state;
    if (isLoading) return <p>Loading...</p>;
    return <div>Logged in as: {this.state.currentUser}</div>;
  }

  componentDidMount() {
    this.setState({ isLoading: false });
  }
}
