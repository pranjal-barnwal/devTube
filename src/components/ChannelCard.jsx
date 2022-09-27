import React from 'react';
import { Box, CardContent, CardMedia, Typography } from '@mui/material';
import VerifiedIcon from '@mui/icons-material/Verified';
import { Link } from 'react-router-dom';
import { demoProfilePicture } from '../utils/constants';

const ChannelCard = ({ channelDetail, marginTop }) => (
  <Box
    sx={{
      boxShadow: 'none',
      borderRadius: '20px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: { xs: '86vw', sm: '358px', md: "290"}, 
      maxWidth:{lg:'257px', xl:'264px'},
      height: '226px',
      margin: 'auto',
      marginTop,
    }}
  >
    {console.log("ChannelBhaiKa: ",channelDetail)}
    <Link to={`/channel/${channelDetail?.id?.channelId}`}>
      <CardContent sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', textAlign: 'center', color: '#fff' }}>
        <CardMedia
          image={channelDetail?.snippet?.thumbnails?.high?.url || demoProfilePicture}
          alt={channelDetail?.snippet?.title}
          sx={{ borderRadius: '50%', height: '80px', width: '80px', mb: 2, border: '2px solid #e3e3e3', margin:'auto'}}
        />
        <Typography variant="h6">
          {channelDetail?.snippet?.title}{' '}
          <VerifiedIcon sx={{ fontSize: '14px', color: '#5dceff', ml: '2px' }} />
        </Typography>
        {!channelDetail?.statistics?.subscriberCount && <Typography sx={{color:'gray', fontSize:'13px'}}>
          {channelDetail?.snippet?.description.slice(0, 40) + "..."}
        </Typography>}
        {channelDetail?.statistics?.subscriberCount && (
          <Typography sx={{ fontSize: '15px', fontWeight: 500, color: 'gray' }}>
            {parseInt(channelDetail?.statistics?.subscriberCount).toLocaleString('en-US')} Subscribers
          </Typography>
        )}
      </CardContent>
    </Link>
  </Box>
);

export default ChannelCard;
