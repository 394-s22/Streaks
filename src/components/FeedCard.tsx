import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import { UserInfo, GroupProgress } from "../lib/types";
import { getImageUrl, getImageCaption } from "../utilities/firebaseStorage";
import { useState, useEffect } from "react";
import ReactionButton from "./ReactionButton";

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
  const [profileColor] = useState("purple");

  useEffect(() => {
    getImageUrl(userInfo.id, currentDate, groupId).then((data) => {
      setImgUrl(data);
    });
  }, [currentDate, groupId, userInfo.id]);

  useEffect(() => {
    getImageCaption(userInfo.id, currentDate, groupId).then((data) => {
      if (data.customMetadata) {
        setImgCaption(data.customMetadata.imgCaption);
      }
    });
  }, [currentDate, groupId, userInfo.id]);

  return (
    <Card
      sx={{
        width: "100%",
        maxWidth: 400,
        marginBottom: "20px",
        height: "fit-content",
      }}
    >
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: profileColor }} aria-label="recipe">
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
        <ReactionButton
          userInfo={userInfo}
          currentDate={currentDate}
          groupId={groupId}
          progress={progress}
          currentUser={currentUser}
          iconType={"Like"}
        />
        <ReactionButton
          userInfo={userInfo}
          currentDate={currentDate}
          groupId={groupId}
          progress={progress}
          currentUser={currentUser}
          iconType={"Fire"}
        />
        <ReactionButton
          userInfo={userInfo}
          currentDate={currentDate}
          groupId={groupId}
          progress={progress}
          currentUser={currentUser}
          iconType={"Wow"}
        />
      </CardActions>
    </Card>
  );
};

export default FeedCard;
