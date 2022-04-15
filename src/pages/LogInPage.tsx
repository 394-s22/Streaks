import React, { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";

interface LogInPageProps{
  currentUser: string;
}

const LogInPage: React.FunctionComponent<LogInPageProps> = ({ currentUser }) => {
    return (
    <div>
        <Link to="/groups">
            <button>Log In</button>
        </Link>
        <Link to="/">
            <button>Back</button>
        </Link>
    </div>);
}

export default LogInPage;
