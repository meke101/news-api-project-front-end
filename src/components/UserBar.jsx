import React, { Component } from "react";

export default class UserBar extends Component {
  state = {
    isLoading: true
  };

  render() {
    const { isLoading } = this.state;
    if (isLoading) return <p>Loading...</p>;
    return (
      <p class="logged-in-bar">
        Logged in as: <b>{this.props.currentUser}</b>
      </p>
    );
  }

  componentDidMount() {
    this.setState({ isLoading: false });
  }
}
