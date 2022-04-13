import { Grid, Typography } from "@mui/material";
import React from "react";
import FeedCard from "../components/FeedCard";
import { GroupMetaData, UserInfo } from "../lib/types";

interface FeedPageProps {
  userData: UserInfo[];
  currentDate: string;
  group: GroupMetaData;
}

const FeedPage: React.FunctionComponent<FeedPageProps> = ({
  userData,
  currentDate,
  group,
}) => {
  if (group.progress[currentDate].userIdsWhoCheckedIn.length === 1) {
    return <h3>No one has checked in today.</h3>;
  }
  return (
    <div >
      <Grid sx={{ flexGrow: 1}} container spacing={2} padding={3} display="flex" justifyContent="center">
        {userData.map((currUser) => {
          if (
            group.progress[currentDate].userIdsWhoCheckedIn.includes(
              currUser.id
            )
          ) {
            return (
              <Grid item xs={4} display="flex" justifyContent="center">
                <FeedCard
                  userInfo={currUser}
                  currentDate={currentDate}
                  groupId={group.groupId}
                />
              </Grid>
            );
          }
        })}
      </Grid>
    </div>
  );
};

export default FeedPage;
