import React, { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
// import { useCurrentGroups } from "../utilities/useCurrentGroups";
import { useCurrentUser } from "../utilities/useCurrentUser";

interface GroupsPageProps{
  currentUser: string;
}

const GroupsPage: React.FunctionComponent<GroupsPageProps> = () => {

  const { user, loading } = useCurrentUser();
  if (user){
    console.log("user", user)
    // useCurrentGroups(user.id)

  }
  
  

  if (loading) {
    return <p>Loading...</p>;
  }

  return (

    <Link to="/checkin">
        <button>Group 1</button>
    </Link>);
}

export default GroupsPage;
