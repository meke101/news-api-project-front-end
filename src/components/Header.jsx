import React from "react";
import { Link } from "@reach/router";
import UserBar from "./UserBar";

export default function Header() {
  return (
    <div>
      <h2>News App</h2>
      <UserBar />
    </div>
  );
}
