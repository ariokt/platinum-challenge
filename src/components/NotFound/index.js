import React from "react";
import "./index.css";
import { Link } from "react-router-dom";
const NotFound = () => {
  return (
    <div>
      <div className="not-section">
        <div className="not-content">
          <h1 className="err">404</h1>
          <h3>Page Not Founds</h3>
          <p className="note">
            Maybe this page moved? Got deleted? Is hiding in quarantine? Never
            existed in the first place?
          </p>

          <p>
            Lets go{" "}
            <Link to="/" className="home-link">
              {" "}
              home{" "}
            </Link>{" "}
            and try from there.
          </p>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
