import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { Paper, IconButton } from '@mui/material';
import { Search } from '@mui/icons-material';


const SearchBar = () => {
  return (
    <Paper
      component='form'
      onSubmit={() => { }}
      sx={{
        borderRadius: 2,
        border: '2px solid #555555',
        background: 'rgba(60,60,60,.3)',
        mr: { sm: 5 },
        boxShadow: 'none'
      }}
    >
      <input
        className='search-bar'
        placeholder='Search in DevTube...'
        value=""
        onChange={() => { }}
        style={{
          // border: '1px solid #e3e3e3',
          color: '#e3e3e3',
          paddingTop:'10px',
          paddingLeft:'14px',
          fontSize:'18px',
          background: 'transparent',
          maxWidth:'200px'
        }}
      />
      <IconButton type='submit' sx={{  color: 'red' }}>
        <Search />
      </IconButton>
    </Paper>
  )
}

export default SearchBar