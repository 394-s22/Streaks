import React, { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";

interface GroupsPageProps{
  currentUser: string;
}

const GroupsPage: React.FunctionComponent<GroupsPageProps> = ({ currentUser }) => {
    return (
    <Link to="/checkin">
        <button>Group 1</button>
    </Link>);
}

export default GroupsPage;
