import React from 'react'
import { Link } from 'react-router-dom';
import { Typography, Card, CardContent, CardMedia } from '@mui/material';
import VerifiedIcon from '@mui/icons-material/Verified';
import { demoThumbnailUrl, demoVideoUrl, demoVideoTitle, demoChannelUrl, demoChannelTitle } from "../utils/constants";


const VideoCard = ({ video: { id: { videoId }, snippet } }) => {
  return (
    <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
      <Card sx={{ width: { xs: '85vw', sm: '358px', md: "270" }, maxWidth: { lg: '240px', xl: '250px' }, boxShadow: "none", borderRadius: 0, margin: '8px' }}>
        <CardMedia image={snippet?.thumbnails?.high?.url || demoThumbnailUrl} alt={snippet?.title}
          sx={{ width: { xs: '100%', sm: '358px', md: "270" }, maxWidth: { lg: '240px', xl: '250px' }, height: 120 }}
        />
        <CardContent sx={{ backgroundColor: "black", height: '60px' }}>
          <Link to={videoId ? `/video/${videoId}` : demoVideoUrl} >
            <Typography variant="subtitle1" color="#efefef" sx={{ fontSize: '12px', fontWeight: '500' }}>
              {snippet?.title.slice(0, 55) + "..." || demoVideoTitle.slice(0, 55)}
            </Typography>
          </Link>
          <Link to={snippet?.channelId ? `/channel/${snippet?.channelId}` : demoChannelUrl} >
            <Typography variant="subtitle2" sx={{ fontSize: '13px' }} color="gray">
              {snippet?.channelTitle || demoChannelTitle}
              <VerifiedIcon sx={{ fontSize: "10px", color: "gray", ml: "5px" }} />
            </Typography>
          </Link>
        </CardContent>
      </Card>
    </Link>

  )
}

export default VideoCard