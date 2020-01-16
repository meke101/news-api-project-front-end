import React from "react";

export default function ErrorPage({ status, msg }) {
  return (
    <div>
      <h4> ERROR PAGE</h4>
      <p>
        Oh no, there appears to be an error: {status}, {msg}
      </p>
    </div>
  );
}
