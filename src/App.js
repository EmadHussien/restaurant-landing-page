import { Box } from '@mui/material';
import React from 'react'
import About from './Components/About';
import DishMenu from './Components/DishMenu';
import Footer from './Components/Footer';
import Home  from "./Components/Home";
import Navbar from './Components/Navbar'
import Reservations from './Components/Reservations';


function App() {
  return (
  <Box>
      <Box className='home-container'>
          <Navbar/>
          <Home />
      </Box>
      <About />
      <DishMenu />
      <Reservations />
      <Footer />
  </Box>

  );
}

export default App;
