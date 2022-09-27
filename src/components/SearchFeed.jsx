import React, { useState, useEffect } from 'react';
import { Box, Typography } from '@mui/material';
import { useParams } from 'react-router-dom';
import Videos from './Videos';
import { fetchFromAPI } from '../utils/fetchFromAPI';


const SearchFeed = () => {
  const [videos, setVideos] = useState([]);
  const {searchTerm} = useParams();

  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${searchTerm}`)
      .then((data) => setVideos(data.items))
  }, [searchTerm])

  return (
    <Box p={3} sx={{ overflowY: 'auto', height: '90vh', flex: 2, mx:'auto' }}>
      <Typography fontWeight='bold' mb={2} sx={{ color: '#cdcdcd' }} style={{textAlign:'center'}}>
        Search results for: <span style={{color:'#efefef'}}>'{searchTerm}'</span>
      </Typography>
      <Videos videos={videos} />
    </Box>
  )
}

export default SearchFeed