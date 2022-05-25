import { Box, Button, Stack, styled } from '@mui/material'
import React from 'react'
import Dish from './Dish'


function DishMenu() {

  const StyledButon = styled(Button)({
    borderRadius:'0', color:'#ababab',fontWeight:'400', padding:'0'
    ,justifyContent:'flex-start'
    , letterSpacing:'2px',marginTop:'20px' ,
    '&:hover': {
        backgroundColor: 'transparent'
      }
})

  return (
    <Box bgcolor={'black'}>
        <Stack direction={'column'} sx={{maxWidth: '1020px' , margin: '0 auto', padding: '15px 30px'}}> 
            <Box className='reserve-request' sx={{padding :{xs: '0px',sm:'17px 17px 0px 17px'}}}>SUPPER</Box>
              
              <Stack direction={'row'} sx={{flexDirection:{xs:'column' ,sm:'row'}}}>
                {/* First Column */}
                <Box width={'50%'} sx={{width:{xs:'100%' ,sm:'50%'} ,
                padding :{xs: '0px',sm:'0px 17px 17px  17px'}
                    }}>
                  <Box className='reserve-request'>TO BEGIN WITH</Box>

                    <Dish comName = 'begin'/>

                </Box>
              {/* Second Column */}

                <Box sx={{width:{xs:'100%' ,sm:'50%'} ,
                 padding :{xs: '0px',sm:'0px 17px 17px  17px'}
                 }}>

                  <Box className='reserve-request'>TENDER TO THE TOOTH</Box>
                    <Dish comName = 'tender' />
                  <Box className='reserve-request'>FOR THE MAIN EVENT</Box>
                    <Dish comName = 'main' />
                  <Box className='reserve-request'>BY THE SIDE</Box>
                  <Dish comName = 'side' />                  
                </Box>

              </Stack>

              <StyledButon disableRipple variant="text" sx={{width:{xs:'300px',sm:'393px'} , 
              fontSize:{xs:'18px',sm:'20px'} , marginBottom:'35px'}}
              href='https://www.kissatanto.com/s/Kissa_Drinks-April-20-2022.pdf' target='_blank'>SEE OUR REFRESHMENTS MENU</StyledButon>

        </Stack>
    </Box>

  )
}

export default DishMenu