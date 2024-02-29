import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import UserContext from "../auth/UserContext";

//Homepage with welcome message and login/signup buttons
//Routed at Routes -> Homepage

function Homepage() {
  const { currentUser } = useContext(UserContext);
  console.debug("Homepage", "currentUser=", currentUser);

  return (
    <div className="Homepage">
      <div className="container text-center">
        <h1 className="mb-4 font-weight-bold">Jobly</h1>
        <p className="lead">All the jobs in one, convenient location.</p>
        {currentUser ? (
          <h2>Welcome back, {currentUser.firstName || currentUser.username}</h2>
        ) : (
          <p>
            <Link className="btn btn-primary mr-3" to="/login">
              Log in
            </Link>
            <Link className="btn btn-primary" to="/signup">
              Signup
            </Link>
          </p>
        )}
      </div>
    </div>
  );
}

export default Homepage;
