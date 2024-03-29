import React from 'react'
import { Box, Stack } from '@mui/material';
import { VideoCard, ChannelCard } from './';
import {Loader} from './';

const Videos = ({ videos }) => {
  if(!videos?.length) return <Loader />;

    return (
        <Stack direction='row' flexWrap='wrap' justifyContent='center' gap='2'>
            {videos && videos.map((item, index) => (
                <Box key={index}>
                    {item.id.videoId && <VideoCard video={item} />}
                    {item.id.channelId && <ChannelCard channelDetail={item} />}
                </Box>
            ))}
        </Stack>
    )
}

export default Videos