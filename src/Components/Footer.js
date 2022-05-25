import { Box, Button, Stack, styled } from '@mui/material'
import React from 'react'
import logo from "../images/footer-logo.png"


function Footer() {

    const StyledButon = styled(Button)({
        borderRadius:'0', color:'#ababab',fontWeight:'400', padding:'0'
        ,justifyContent:'flex-start'
        , letterSpacing:'2px',marginTop:'20px' ,
        '&:hover': {
            backgroundColor: 'transparent'
          }
    })

  return (
    <Box bgcolor={'black'}  sx={{height:{xs:'720px',md:'600px'}}}>
      
         <Stack  sx={{flexDirection:{xs:'column' ,sm:'row'}, maxWidth:'1020px', margin: '0 auto', padding: '90px 30px'}}>
                {/* First Column */}
                <Box width={'50%'} sx={{width:{xs:'100%' ,sm:'50%'}}}>
                
                <Box className='reserve-request'>HOURS:</Box>
                <Box className='reserve-request'>
                    WEDNESDAY, THURSDAY, AND SUNDAY
                    <br/>
                    5:30PM - 10:00PM
                </Box>
                <Box className='reserve-request'>                
                    FRIDAY AND SATURDAY 
                    <br/>
                    5:30PM - 12:00AM
                </Box>
                <Box className='reserve-request'>                
                    263 EAST PENDER STREET
                    <br/>
                    VANCOUVER, B.C. V6A 1T8
                    <br/>
                    778 379 8078
                </Box>
                <Box className='reserve-request'>HELLO@KISSATANTO.COM</Box>

                <Stack direction={'row'} sx={{justifyContent:{xs:'space-between', sm:'unset'}}}>
                  <StyledButon disableRipple variant="text" sx={{width:{sm:'135px'} , 
                    fontSize:{xs:'18px',sm:'20px'} , marginBottom:'35px'}}
                    href='https://www.instagram.com/kissatanto' target='_blank'>INSTAGRAM</StyledButon>
                    
                  <StyledButon disableRipple variant="text" sx={{width:{sm:'135px'} , 
                    fontSize:{xs:'18px',sm:'20px'} , marginBottom:'35px' , marginLeft:{xs:'0',sm:'30px'}}}
                    href='https://www.facebook.com/kissatanto' target='_blank'>FACEBOOK</StyledButon>

                </Stack>
                
                </Box>
              {/* Second Column */}

                <Box sx={{width:{xs:'100%' ,sm:'50%' , marginLeft:'0px', textAlign:'center'}}}>
                  <a href='#home'><img src={logo} alt='logo'/></a>
                </Box>

              </Stack>
    </Box>
  )
}

export default Footer