import React, { Component } from "react";

export default class UserBar extends Component {
  state = {
    // change
    currentUser: "testUser",
    isLoading: true
  };

  render() {
    const { isLoading } = this.state;
    if (isLoading) return <p>Loading...</p>;
  return <div>Logged in as:  {this.state.currentUser}</div>;
  }

  componentDidMount() {
    console.log("UserBar didmount");
    this.setState({ isLoading: false });
  }
}
