import styled from '@emotion/styled'
import { Box, Container, Toolbar, Typography } from '@mui/material'
import React from 'react'

const About_comp = () => {
    const StyledToolbar=styled(Toolbar)({
        display:'flex',
        justifyContent:'space-between',
        flexWrap:'wrap'
         
      })
  return (
    <>
   
        <Container>
        <Typography variant='h2' align='center' marginTop={2}>About Us</Typography>
        
        {/* <Box style={{display:'flex', justifyContent:'space-between',marginTop:'10px' }}> */}
        <StyledToolbar>
            <Box ><img src='https://ashokainstitute.com/assets/images/banners5.jpg' height={'400px'} width={'400px'}/></Box>
            <Box sx={{padding:'20px', width:'600px'}}>
                <Typography variant='h5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus velit ad illum voluptatem ut tenetur eveniet quidem? Dignissimos, aliquam! Exercitationem a repellat voluptatem, quos ab dolorem natus architecto dolores dolor sed autem, maiores cumque quas corrupti porro, quidem nulla tenetur obcaecati explicabo. Quam esse illo voluptates? Placeat veniam eius facilis.</Typography><br/>
                <Typography variant='h5'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam placeat nisi ducimus adipisci numquam maiores, repellat officiis rerum voluptatum temporibus.</Typography>
            </Box>
            </StyledToolbar>
        {/* </Box> */}
        </Container>
    
    </>
  )
}

export default About_comp