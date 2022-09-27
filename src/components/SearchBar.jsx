import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { Paper, IconButton } from '@mui/material';
import { Search } from '@mui/icons-material';


const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if(searchTerm){
      navigate(`/search/${searchTerm}`);
    }
  }
  
  return (
    <Paper
      component='form'
      onSubmit={ handleSubmit }
      sx={{
        borderRadius: 2,
        border: '2px solid #555555',
        background: 'rgba(60,60,60,.3)',
        mr: { sm: 1 },
        boxShadow: 'none'
      }}
      style={{
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-around',
        width:'52%',
        marginLeft:'3px',
        maxWidth:'280px'
      }}
    >
      <input
        className='search-bar'
        placeholder='Search in DevTube...'
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{
          color: '#e3e3e3',
          padding:'10px auto',
          paddingLeft:'14px',
          fontSize:'16px',
          background: 'transparent',
        }}
      />
      <IconButton type='submit' sx={{  color: 'red' }}>
        <Search />
      </IconButton>
    </Paper>
  )
}

export default SearchBar