import { Box, Typography, Button } from "@mui/material";
import React, { useState } from "react";
import AddProofModal from "../components/AddProofModal";
import InfoModal from "../components/InfoModal";
import UserList from "../components/UserList";
import { AllUsers, GroupMetaData } from "../lib/types";
import { setData, useData } from "../utilities/firebase";
import { useCurrentUser } from "../utilities/useCurrentUser";

interface StreaksListProps {
  groupInfo: GroupMetaData;
  date: string;
}

const StreaksList: React.FunctionComponent<StreaksListProps> = ({
  groupInfo,
  date,
}) => {
  const [open, setOpen] = useState(false);
  const { currentUser } = useCurrentUser();
  const [usersData] = useData<AllUsers>("/users");

  const updateProgress = async () => {
    if (!currentUser) return;

    let new_list = [
      ...groupInfo.progress[date].userIdsWhoCheckedIn,
      currentUser.id,
    ];

    await setData(
      `/groups/${groupInfo.groupId}/progress/${date}/userIdsWhoCheckedIn`,
      new_list
    ).catch((e) => alert(e));

    await setData(
      `/groups/${groupInfo.groupId}/progress/${date}/userReactions/${currentUser.id}/Like`,
      [""]
    ).catch((e) => alert(e));

    await setData(
      `/groups/${groupInfo.groupId}/progress/${date}/userReactions/${currentUser.id}/Fire`,
      [""]
    ).catch((e) => alert(e));

    await setData(
      `/groups/${groupInfo.groupId}/progress/${date}/userReactions/${currentUser.id}/Wow`,
      [""]
    ).catch((e) => alert(e));

    await setData(
      `/groups/${groupInfo.groupId}/streaks/${currentUser.id}`,
      groupInfo.streaks[currentUser.id] + 1
    ).catch((e) => alert(e));
  };

  const handleCheckIn = () => {
    updateProgress();
  };

  if (!usersData || !currentUser) {
    return <p>Loading...</p>;
  }

  return (
    <Box
      display="flex"
      justifyContent="space-between"
      flexDirection="column"
      height="100%"
      paddingBottom={8}
    >
      <Box>
        <Typography
          variant="overline"
          display="block"
          lineHeight={1}
          marginTop={2}
        >
          Group Name:
        </Typography>
        <Typography variant="h2" gutterBottom component="div" lineHeight={1}>
          {groupInfo.groupName}
        </Typography>
        <Typography variant="overline" display="block">
          Daily Habit:
        </Typography>
        <Typography variant="h4" gutterBottom component="div">
          {groupInfo.habit}
        </Typography>

        <Button onClick={() => setOpen(true)} color="secondary">
          Info
        </Button>

        <InfoModal
          handleClose={() => setOpen(false)}
          isOpen={open}
          group={groupInfo}
        />

        <AddProofModal
          handleClose={() => setOpen(false)}
          isOpen={open}
          handleCheckIn={handleCheckIn}
          currentDate={date}
          currentGroup={groupInfo.groupId}
        />
        <UserList
          group={groupInfo}
          users={usersData}
          currentUser={currentUser.id}
          date={date}
        />
        {!groupInfo.progress[date] ? (
          <></>
        ) : !groupInfo.progress[date].userIdsWhoCheckedIn.includes(
            currentUser.id
          ) ? (
          <Button
            variant="contained"
            color="secondary"
            onClick={() => setOpen(true)}
            sx={{ m: 3.75 }}
          >
            Check In
          </Button>
        ) : (
          <Typography>You have checked in today 🙌</Typography>
        )}
      </Box>
    </Box>
  );
};

export default StreaksList;
