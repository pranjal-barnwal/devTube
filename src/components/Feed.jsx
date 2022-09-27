import React, { useState, useEffect } from 'react';
import { Box, Stack, Typography } from '@mui/material';
import Sidebar from './Sidebar';
import Videos from './Videos';
import { fetchFromAPI } from '../utils/fetchFromAPI';


const Feed = () => {
  const [selectedCategory, setSelectedCategory] = useState('Developer');
  const [videos, setVideos] = useState([]);
  
  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${selectedCategory}`)
      .then((data) => setVideos(data.items))
  }, [selectedCategory])
  //? empty means, it will rerun on every page reload
  
  
  return (
    <Stack sx={{ flexDirection: { sx: 'column', md: 'row' } }} >
      <Box sx={{ height: { sx: "auto", md: "100vh" }, borderRight: "1px solid #3d3d3d", px: { sx: 0, md: 2 } }} className='mainSideBox'>
        <Sidebar selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
      </Box>

      <Box p={3} sx={{ overflowY:'auto', height:'90vh', flex:2 }}>
        <Typography variant='h4' fontWeight='bold' mb={2} sx={{color:'#dddddd', ml:'1vw'}}>
          {selectedCategory} <span>Videos</span>
        </Typography>
        <Videos videos={videos} />
      </Box>
    </Stack>
  )
}

export default Feed