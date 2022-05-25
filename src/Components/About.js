import { Box, Button, Stack, styled } from '@mui/material'
import React from 'react'
import resturant from '../images/image-asset.png'
import resturantHall from '../images/Booth.jpg'

function About() {

    const StyledButon = styled(Button)({
        borderRadius:'0',backgroundColor:'#272727', color:'#fff',fontWeight:'600',padding:'12px 22px'
        ,fontSize:'12px'
        , letterSpacing:'1px',
        '&:hover': {
            backgroundColor: '#272727',
            opacity:'0.8'
            }
    })

  return (
    <Box bgcolor={'black'}>
        <Stack direction={'column'} sx={{maxWidth: '1020px' , margin: '0 auto', padding: '96px 30px'}}> 
            <Stack direction={'row'} sx={{flexDirection:{xs:'column' ,md:'row'}}}>
                    
            {/* First Column */}
            <Box sx={{width:{xs:'100%' ,md:'70%'},padding :{xs: '0px',sm:'0px 17px 17px  17px'}}}>
            <p className='reserve-request'>PLEASE FIX YOUR HAIR AND REMOVE THE MUD FROM YOUR BOOTS AND COME IN.</p>
                {/* To Edit */}
                <Box textAlign={'center'} mt='30px'>
                    <StyledButon variant="contained" target='_blank' href="https://www.opentable.ca/restref/client/?lang=en-CA&ot_source=Restaurant%20website&restref=1018864&corrid=f2df6543-1ee9-47bc-94cd-b7ff2521604a">
                        2022 RESERVATIONS</StyledButon>
                </Box>
                <Box mt='100px' mb='60px'> 
                <p className='reserve-request' >ABOUT THE HOUSE OF PLENTY</p>
                <p className='about-text'>Tucked into the upper story of a delightfully faded building in Chinatown, 
                Kissa Tanto invites you into the little jewel that is the House of Plenty.  First we will eat!  
                Such supreme satisfaction we take from the delicate flavours of Japan and the warmth of ltalian cooking and 
                feel it's right to bring these culinary forces together to do a little dance.  Why not?  Soul mates are they 
                not with their mutual love of noodles, rice, and proteins in their pure, delicious uncooked form?  
                Think of the cool elegant crudo and cruda, crisp exotic salads, playful pastas, and rich, tender meats that we 
                shall sink our teeth into.  And whilst doing so, we will drink!  We will wipe the frost off of the Singapore Sling,
                 inhale the burgundy scent of Barolo, sip tiny glasses of fine sake, and down chilly glasses of beer. 
                <br/> <br/> 
                 And we will laugh, tell stories, escape to soulful places that only great music can take us, 
                 and hold hands in dark corners.  So please fix your hair and wipe the mud from your boots and 
                please come in. 
                </p>
            </Box>
            <hr className='horizontal-line' />
            <Box mt='60px'>
                <p className='reserve-request' >GIFT CARDS</p>
                <p className='about-text' >
                    We offer gift cards in any denomination at the restaurant for purchase in person or they can be purchased through 
                    the link below.
                    eGift cards will be emailed to the recipient and can be presented to the staff via a printout or phone upon payment.
                </p>
            </Box>


            </Box>

            {/* Second Col */}
            <Stack alignItems={'center'} sx={{width:{xs:'100%' ,md:'30%'},padding :{xs: '0px',sm:'0px 17px 17px  17px'}, marginTop:{xs:'40px',sm:'0'} }}>
                <img className='resturant' src={resturant} alt='resturant hall' />
            </Stack>
        </Stack>


            {/* Third Col */}
            <StyledButon variant="contained" target='_blank' sx={{width:{xs:'300px',sm:'340px'} , margin:{xs:'40px 0 0px 0px',md:'40px 0 0px 17px'} , 
            padding:{xs:'12px 10px',sm :'12px 22px'}}}
                href="https://kissatanto.oftendining.com/#s:menu.php?store_id=6110@view=egift">
                CLICK HERE TO PURCHASE GIFT CARD</StyledButon>
        </Stack>
        <Box>
          <img className='resturant-hall-bg' src={resturantHall} alt='resturant hall'/>
        </Box>

    </Box>
    
  )
}

export default About

