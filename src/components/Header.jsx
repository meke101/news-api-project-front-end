import React from "react";
import { Link } from "@reach/router";
import UserBar from "./UserBar";

export default function Header(props) {
  return (
    <div class="header-container">
      <Link to={`/articles/`}>
        <button>Home</button>
      </Link>
      <h2>News App</h2>
      <UserBar currentUser={props.currentUser} />
    </div>
  );
}
