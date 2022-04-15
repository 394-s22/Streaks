import React from "react";
import { Link } from "react-router-dom";

interface LandingPageProps {
  currentUser: string;
}

const LandingPage: React.FunctionComponent<LandingPageProps> = ({
  currentUser,
}) => {
  return (
    <div>
      <h1>Streaks</h1>

      <div>
        <Link to="/login">
          <button>Log In</button>
        </Link>
        <Link to="/signup">
          <button>Sign Up</button>
        </Link>
      </div>
    </div>
  );
};

export default LandingPage;
