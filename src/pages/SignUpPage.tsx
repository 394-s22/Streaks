import React, { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";

interface SignUpPageProps{
  currentUser: string;
}

const SignUpPage: React.FunctionComponent<SignUpPageProps> = ({ currentUser }) => {
    return (
    <div>
        <Link to="/login">
            <button>Log In</button>
        </Link>
        <Link to="/">
            <button>Back</button>
        </Link>
    </div>);
}

export default SignUpPage;
