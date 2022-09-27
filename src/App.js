import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Box } from '@mui/material';    // styled 'div' element
import { Navbar, Feed, VideoDetail, ChannelDetail, SearchFeed, Footer } from './components/index.js';

const App = () => {
  return (
    <Router>
      <Box sx={{ backgroundColor:'#000' }} >
        <Navbar />
        <Routes>
          <Route path='/' exact element={<Feed/>} />
          <Route path='/video/:id' exact element={<VideoDetail/>} />
          <Route path='/channel/:id' exact element={<ChannelDetail/>} />
          <Route path='/search/:searchTerm' exact element={<SearchFeed/>} />
        </Routes>
        <Footer/>
      </Box>
    </Router>
  )
}

export default App