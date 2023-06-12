import React from 'react'
import { Stack, Typography } from '@mui/material';

const Footer = () => {
  return (
    <Stack sx={{
      outline:'1px solid darkslategray'
    }}>
      <Typography variant="h6" py={1} sx={{ color: "#dedede", textAlign:'center' }}>
           &copy; {new Date().getFullYear()} | <a href="https://github.com/pranjal-barnwal/devTube" target="_blank" rel="noopener noreferrer" style={{fontWeight:'bold'}}><span style={{color:'#fff'}}>Dev</span><span style={{color:'#fc1503'}}>Tube</span></a> | <a href="https://www.linkedin.com/in/pranjal-barnwal" target="_blank" rel="noopener noreferrer" style={{color:'#dedede'}}>Pranjal Kumar</a>
        </Typography>
    </Stack>
  )
}

export default Footer