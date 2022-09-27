import React, { useState, useEffect } from 'react';
import { Box, Stack, Typography } from '@mui/material';
import Sidebar from './Sidebar';

const Feed = () => {
  return (
    <Stack sx={{ flexDirection: { sx: 'column', md: 'row' } }} >
      <Box sx={{ height: { sx: "auto", md: "92vh" }, borderRight: "1px solid #3d3d3d", px: { sx: 0, md: 2 } }} style={{ maxWidth: '250px' }}>
        <Sidebar />

        <Typography variant="h4" fontWeight="bold" mb={2} sx={{ color: "white" }}>
           &copy; {new Date().getFullYear()} | Pranjal Kumar
        </Typography>
      </Box>
    </Stack>
  )
}

export default Feed