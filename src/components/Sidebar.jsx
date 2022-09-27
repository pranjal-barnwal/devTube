import React from 'react'
import { Stack } from '@mui/material';
import { categories } from '../utils/constants';

const Sidebar = ({ selectedCategory, setSelectedCategory }) => {
  return (
    <Stack
      direction='row'
      sx={{
        overflowY: "auto",
        height: { sx: 'auto', md: '95%' },
        flexDirection: { md: 'column' },
        paddingTop:'20px'
      }}
    >
      {categories.map((category) => (
        <button
          key={category.name}
          onClick={()=> setSelectedCategory(category.name)}
          className='category-btn'
          style={{
            paddingLeft: '16px',
            background: category.name === selectedCategory && '#fc1503',
            color: '#fff'
          }}
        >
          <span style={{
            marginRight: '8px',
            marginTop: '5px',
            color: category.name === selectedCategory ? 'white' : '#fc1503'
          }}>{category.icon}</span>
          <span
            style={{ fontSize:'14px', opacity:category.name===selectedCategory? '1': '.7' }}
          >{category.name}</span>
        </button>
      ))}
    </Stack>
  )
}

export default Sidebar