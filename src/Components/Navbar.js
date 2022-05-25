import { Stack } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import logo from "../images/Kissa-01.png"


function Navbar() {
  return (
    <Box id = 'home' position={'relative'} sx={{top:'15px'}}>
        <Stack direction={'row'} alignItems='center' justifyContent={'space-between'} sx={{height:'40px' , padding:'20px'}}>
            <img src={logo} alt='logo' />
          <a href='#home' className='homeBtn'><span>Home</span></a>  
        </Stack>
    </Box>      
  )
}

export default Navbar