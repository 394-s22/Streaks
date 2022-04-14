import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import FeedCard from "../components/FeedCard";
import { GroupMetaData, UserInfo } from "../lib/types";
import Masonry from '@mui/lab/Masonry';

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
    <Box margin={5} display="flex" justifyContent="center" >
      <Box maxWidth={1200}>
        <Masonry columns={{ xs: 1, sm: 2, md: 3 }} spacing={5} sx={{margin:0}} >
          {userData.map((currUser) => {
            if (
              group.progress[currentDate].userIdsWhoCheckedIn.includes(
                currUser.id
              )
            ) {
              return (
                  <FeedCard
                    userInfo={currUser}
                    currentDate={currentDate}
                    groupId={group.groupId}
                  />
              );
            }
          })}
        </Masonry>
      </Box>
    </Box>
  );
};

export default FeedPage;
