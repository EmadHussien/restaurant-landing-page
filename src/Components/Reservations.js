import { Box, Stack } from '@mui/material'
import React from 'react'

function Reservations() {
  return (
      <Box bgcolor={'black'}>

        <Box className='reservations-bg'>
            <Stack height={'100%'} direction='column' alignItems={'center'} justifyContent='center'>
                <Box maxWidth='900px' textAlign={'center'} padding='20px'>   
                    <p className='title'>RESERVATIONS</p>
                    <p className='note'>Just a little note to our guests that our room is designed for small, 
                        intimate dining experiences so we have only one large table and it fits a maximum of 6 people.</p>
                    <p className='note'>We are currently not accepting event requests due to the Covid-19 restrictions.</p>
                </Box>
            </Stack>
        </Box>
    </Box>
    )
}

export default Reservations