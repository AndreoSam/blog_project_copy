import React, { useEffect, useState } from 'react'
import { testimoniData } from '../Services/Api'
import { Box, Button, Card, CardActions, CardContent, CardMedia, Container, Toolbar, Typography } from '@mui/material'
import styled from '@emotion/styled'

const Testimonial = () => {
    const [testimonial,setTestimonial]=useState([])

    const gettestiData=async()=>{
        const res=await testimoniData()
        console.log(res)
        if(res && res?.data?.success){
            setTestimonial(res?.data?.testimonials)
            console.log(testimonial)
        }
       
        
    }
    useEffect(()=>{
        gettestiData()
    },[])

    const StyledToolbar = styled(Toolbar)({
        display: "flex",
        justifyContent: "space-between",
        flexWrap:'wrap',
        gap:'20px',
        marginTop:'20px',
        textAlign:'center'
      });
  return (
    <>
     <Box>
        <Container>
          <Typography variant="h2" align="center" marginTop={4}>
            Testimonials
          </Typography>
          <Typography variant="h5" align="center" marginTop={4}>
            Laborum repudiandae omnis voluptatum consequatur mollitia ea est
            voluptas utLaborum repudiandae omnis voluptatum consequatur mollitia ea est
            voluptas ut
          </Typography>
          <StyledToolbar>
            {testimonial.map((item, i) => {
              return (
                <>
    <Card sx={{ maxWidth: 300 }}>
      <CardMedia
        sx={{ height: 340,borderRadius:'40%',objectFit:'contain'}}
        image={`https://restapinodejs.onrender.com/api/testimonials/photo/${item._id}`}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        {item.name}
        </Typography>
        <Typography gutterBottom variant="h6" component="div" color='gray'>
        {item.position}
        </Typography>
        <Typography variant="body2" color="text.secondary">
        {item.talk.slice(0,150)}
        </Typography>
      </CardContent>
    </Card>
                </>
              );
            })}
          </StyledToolbar>
          {/* </Box> */}
        </Container>
      </Box>
    </>
  )
}

export default Testimonial