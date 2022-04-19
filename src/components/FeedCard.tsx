import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { UserInfo, GroupProgress } from "../lib/types";
import { getImageUrl, getImageCaption } from "../utilities/firebaseStorage";
import { useState, useEffect } from "react";
import { Chip } from "@mui/material";
import { setData } from "../utilities/firebase";
var randomColor = require("randomcolor");

interface FeedCardProps {
  userInfo: UserInfo;
  currentDate: string;
  groupId: string;
  progress: GroupProgress;
  currentUser: string;
}

const FeedCard: React.FunctionComponent<FeedCardProps> = ({
  userInfo,
  currentDate,
  groupId,
  progress,
  currentUser,
}) => {
  const [imgUrl, setImgUrl] = useState("");
  const [imgCaption, setImgCaption] = useState("");

  function getImgUrl() {
    getImageUrl(userInfo.id, currentDate, groupId).then((data) => {
      setImgUrl(data);
    });
  }
  function getImgCaption() {
    getImageCaption(userInfo.id, currentDate, groupId).then((data) => {
      if (data.customMetadata) {
        setImgCaption(data.customMetadata.imgCaption);
      }
    });
  }

  const reactToPost = async (postUser: string) => {
    let oldList = progress.userReactions[postUser].likes;
    if (userHasLiked(postUser)) {
      oldList.splice(oldList.indexOf(currentUser));
      await setData(
        `/groups/${groupId}/progress/${currentDate}/userReactions/${postUser}/likes`,
        oldList
      ).catch((e) => alert(e));
    } else {
      oldList.push(currentUser);
      await setData(
        `/groups/${groupId}/progress/${currentDate}/userReactions/${postUser}/likes`,
        oldList
      ).catch((e) => alert(e));
    }
  };

  const userHasLiked = (postUser: string) => {
    try {
      let usersWhoLiked = progress.userReactions[postUser].likes;
      return usersWhoLiked.includes(currentUser);
    } catch {
      return false;
    }
  };

  const countLikes = (postUser: string) => {
    try {
      // subtract 1 like because array includes the user themselves
      let numLikes = progress.userReactions[postUser].likes.length - 1;
      return numLikes;
    } catch {
      return 0;
    }
  };

  useEffect(() => {
    getImgUrl();
  }, [imgUrl]);

  useEffect(() => {
    getImgCaption();
  }, [imgCaption]);

  return (
    <Card
      sx={{
        width: "100%",
        minWidth: 400,
        maxWidth: 700,
        margin: 4,
        height: "fit-content",
      }}
    >
      <CardHeader
        avatar={
          <Avatar
            sx={{ bgcolor: randomColor({ luminosity: "dark" }) }}
            aria-label="recipe"
          >
            {userInfo.name.charAt(0)}
          </Avatar>
        }
        action={<></>}
        title={userInfo.name}
        subheader={new Date().toLocaleString("en-US", {
          weekday: "long",
          year: "numeric",
          month: "long",
          day: "numeric",
        })}
      />
      <CardMedia component="img" image={imgUrl} alt="Proof" />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {imgCaption}
        </Typography>
      </CardContent>
      <CardActions>
        <Chip
          icon={<FavoriteIcon />}
          label={`x${countLikes(userInfo.id)}`}
          variant="outlined"
          clickable={userInfo.id !== currentUser}
          onClick={() => reactToPost(userInfo.id)}
        />
      </CardActions>
    </Card>
  );
};

export default FeedCard;
