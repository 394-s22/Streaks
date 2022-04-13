import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { UserInfo } from '../lib/types';
import {getImageUrl, getImageCaption} from '../utilities/firebaseStorage'
import { useState, useEffect} from 'react';

interface FeedCardProps {
  userInfo: UserInfo;
  currentDate: string;
  groupId: string;
}


const FeedCard: React.FunctionComponent<FeedCardProps> = ({
    userInfo,
    currentDate,
    groupId,
  }) => {

  const [imgUrl, setImgUrl] = useState("");
  const [imgCaption, setImgCaption] = useState('');

  function getImgUrl() {
    getImageUrl(userInfo.id, currentDate, groupId).then((data) => {
      setImgUrl(data);
    });
  }
  function getImgCaption(){
    getImageCaption(userInfo.id, currentDate, groupId).then((data) => {
      console.log('this is metadata', data)
      if(data.customMetadata){
        setImgCaption(data.customMetadata.imgCaption)
      }
      
    });
  }

  useEffect(() => {
    getImgUrl();
  }, [imgUrl]);

  useEffect(() => {
    getImgCaption();
  }, [imgCaption]);

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            {userInfo.name.charAt(0)}
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={userInfo.name}
        subheader="September 14, 2016"
      />
      <CardMedia
        component="img"
        height="194"
        image={imgUrl}
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {imgCaption}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
}

export default FeedCard