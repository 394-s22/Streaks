import React, { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";

interface LandingPageProps{
  currentUser: string;
}

const LandingPage: React.FunctionComponent<LandingPageProps> = ({ currentUser }) => {
    return (
    <div>
        <Link to="/login">
            <button>Log In</button>
        </Link>
        <Link to="/signup">
            <button>Sign Up</button>
        </Link>
    </div>);
}

export default LandingPage;
