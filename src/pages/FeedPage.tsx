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
  return (
    <div>
      <Grid sx={{ flexGrow: 1 }} container spacing={2} padding={2}>
        {userData.map((currUser) => {
          if (
            group.progress[currentDate].userIdsWhoCheckedIn.includes(
              currUser.id
            )
          ) {
            return (
              <Grid item xs={4}>
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
