import { Chip } from "@mui/material";
import React from "react";
import { GroupProgress, UserInfo } from "../lib/types";
import { setData } from "../utilities/firebase";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LocalFireDepartmentIcon from "@mui/icons-material/LocalFireDepartment";
import CelebrationIcon from "@mui/icons-material/Celebration";

interface ReactionButtonProps {
  userInfo: UserInfo;
  currentDate: string;
  groupId: string;
  progress: GroupProgress;
  currentUser: string;
  iconType: "Like" | "Fire" | "Wow";
}

const ReactionButton: React.FunctionComponent<ReactionButtonProps> = ({
  userInfo,
  currentDate,
  groupId,
  progress,
  currentUser,
  iconType,
}) => {
  const reactToPost = async (postUser: string) => {
    console.log(progress);
    let oldList = progress.userReactions[postUser][iconType];
    if (userHasLiked(postUser)) {
      oldList.splice(oldList.indexOf(currentUser), 1);
      await setData(
        `/groups/${groupId}/progress/${currentDate}/userReactions/${postUser}/${iconType}`,
        oldList
      ).catch((e) => alert(e));
    } else {
      oldList.push(currentUser);
      await setData(
        `/groups/${groupId}/progress/${currentDate}/userReactions/${postUser}/${iconType}`,
        oldList
      ).catch((e) => alert(e));
    }
  };

  const userHasLiked = (postUser: string) => {
    try {
      let usersWhoLiked = progress.userReactions[postUser][iconType];
      return usersWhoLiked.includes(currentUser);
    } catch {
      return false;
    }
  };

  const countLikes = (postUser: string) => {
    try {
      // subtract 1 like because array includes the user themselves
      let numLikes = progress.userReactions[postUser][iconType].length - 1;
      return numLikes;
    } catch {
      return 0;
    }
  };

  const getIcon = (iconType: string) => {
    switch (iconType) {
      case "Fire":
        return <LocalFireDepartmentIcon />;
      case "Wow":
        return <CelebrationIcon />;
      default:
        return <FavoriteIcon />;
    }
  };

  return (
    <>
      <Chip
        icon={getIcon(iconType)}
        label={`x${countLikes(userInfo.id)}`}
        variant={userHasLiked(userInfo.id) ? "filled" : "outlined"}
        color="secondary"
        onClick={() => reactToPost(userInfo.id)}
      />
    </>
  );
};

export default ReactionButton;
