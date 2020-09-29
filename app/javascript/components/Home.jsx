import React from "react";
import { Link } from "react-router-dom";

export default () => (
  <div className="container">
    <div className="row">
      <div className="col-md">
        Welcome!
      </div>
      <div className="col-md">
        <Link
            to="/create_account">
            Create Account
        </Link>
      </div>
      <div className="col-md">
        <Link
          to="/log_in">
          Log In
        </Link>
      </div>
    </div>
  </div>
);