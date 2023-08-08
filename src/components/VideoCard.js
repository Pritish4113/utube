import { Link } from "react-router-dom";
import { Typography, Box, Card, CardContent, CardMedia } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";
import {
  demoThumbnailUrl,
  demoVideoUrl,
  demoVideoTitle,
  demoChannelUrl,
  demoChannelTitle,
} from "../utils/constants";

const VideoCard = ({
  video: {
    id: { videoId },
    snippet,
  },
}) => {
  return (
    <>
      <Card sx = {{width : {xs : "100%",sm : "358px",md : "280px"}, boxShadow : "none", borderRadius : "0"}}>
        <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
          <CardMedia
            image={snippet?.thumbnails?.high?.url}
            alt={snippet?.title}
            sx={{ height: 180, width: {xs:"100%", sm : "358px", md : "320px"} }}
          />
        </Link>
        <CardContent sx = {{backgroundColor : "#1e1e1e", height : "106px"}}>
            <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
            <Typography variant = "subtitle1" fontWeight="bold" color = "#FFF">
                {snippet?.title.slice(0,60) || demoVideoTitle.slice(0,60)}
            </Typography>
            </Link>
            <Link to={snippet?.channelId ? `/channel/${snippet?.channelId}` : demoChannelUrl}>
            <Typography variant = "subtitle2" fontWeight="bold" color = "gray">
                {snippet?.channelTitle || demoChannelTitle}
                <CheckCircle sx = {{fontSize : 13, color : "gray", ml : "5px"}}></CheckCircle>
            </Typography>
            </Link>
        </CardContent>
      </Card>
    </>
  );
};

export default VideoCard;