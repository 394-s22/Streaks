import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import FeedCard from "../components/FeedCard";
import { GroupMetaData, UserInfo } from "../lib/types";

interface FeedPageProps {
  userData: UserInfo[];
  currentDate: string;
  group: GroupMetaData;
  currentUser: string;
}

const FeedPage: React.FunctionComponent<FeedPageProps> = ({
  userData,
  currentDate,
  group,
  currentUser,
}) => {
  if (group.progress[currentDate].userIdsWhoCheckedIn.length === 1) {
    return <h3>No one has checked in today.</h3>;
  }
  return (
    <Box
      margin={5}
      display="flex"
      justifyContent="center"
      alignItems="center"
      marginBottom="100px"
    >
      <Box maxWidth={1600}>
        <Box width="100%">
          {Object.values(userData).map((currUser) => {
            if (
              group.progress[currentDate].userIdsWhoCheckedIn.includes(
                currUser.id
              )
            ) {
              return (
                <FeedCard
                  key={currUser.id}
                  userInfo={currUser}
                  currentDate={currentDate}
                  groupId={group.groupId}
                  progress={group.progress[currentDate]}
                  currentUser={currentUser}
                />
              );
            }

            return <div key={currUser.id}></div>;
          })}
        </Box>
      </Box>
    </Box>
  );
};

export default FeedPage;
