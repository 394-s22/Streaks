import React, { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import { UserInfo } from "../lib/types";
import { useData, database } from "../utilities/firebase";

interface GroupsPageProps {
  currentUser: string;
}

const GroupsPage: React.FunctionComponent<GroupsPageProps> = ({
  currentUser,
}) => {
  const [data, loading, error] = useData("users/" + "2");
  console.log(data);

  return (
    <>
      <Link to="/checkin">
        <button>Group 1</button>
      </Link>
    </>
  );
};

export default GroupsPage;
