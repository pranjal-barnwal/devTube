import React from 'react'
import { Stack } from '@mui/material';
import { categories } from '../utils/constants';

const selectedCategory = 'New';

const Sidebar = () => {
  return (
    <Stack
      direction='row'
      sx={{
        overflowY: "auto",
        height: { sx: 'auto', md: '95%' },
        flexDirection: { md: 'column' }
      }}
    >
      {categories.map((category) => (
        <button 
          key={category.name} 
          className='category-btn'
          style={{
            background:category.name===selectedCategory && '#fc1503',
            color:'#fff'
          }}
        >
          <span style={{ marginRight:'12px', marginTop:'5px', color:category.name===selectedCategory ? 'white': '#fc1503'  }}>{category.icon}</span>
          <span>{category.name}</span>
        </button>
      ))}
    </Stack>
  )
}

export default Sidebar