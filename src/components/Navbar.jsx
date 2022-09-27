import React from 'react'
import { Stack } from '@mui/material';
import { Link } from 'react-router-dom';
import { logo } from '../utils/constants';
import SearchBar from './SearchBar';

const Navbar = () => {
  return (
    <Stack direction='row' alignItems='center' p={1} sx={{ position: 'sticky', background: 'black', top: 0, justifyContent:'space-between', outline:'1px solid darkslategray', zIndex:1400 }}>
      <Link to='/' style={{ marginLeft:'15px', display:'flex', alignItems:'center', color:'white', fontWeight:'bold', fontSize:'21px', fontFamily:"'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif" }} >
        <img src={logo} alt='DevTube | YouTube Client optimized for Developers' height='39' />
         Dev<span style={{color:'#fc1503'}}>Tube</span>
      </Link>
      <SearchBar />
    </Stack>
  )
}

export default Navbar