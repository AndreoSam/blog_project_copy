import styled from '@emotion/styled'
import { Box, Card, CardContent, CardMedia, Container, Toolbar, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { courseData } from '../Services/Api'
import Layout from '../layout/Layout'

const Course = () => {
    const [course,setCourse]=useState([])

    const getcourseData=async()=>{
        const res=await courseData()
        console.log(res)
        if(res && res?.data?.success){
             setCourse(res?.data?.Courses)
        }
       
        
    }
    useEffect(()=>{
        getcourseData()
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
   <Layout>
    <Box>
        <Container>
          <Typography variant="h2" align="center" marginTop={4}>
          Our <strong>Courses</strong>
          </Typography>
          <Typography variant="h5" align="center" marginTop={4}>
          Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.
          </Typography>
          <StyledToolbar>
            {course.map((item, i) => {
              return (
                <>
    <Card sx={{ maxWidth: 300 }}>
      <CardMedia
        sx={{ height: 340,borderRadius:'20%',objectFit:'contain'}}
        image={`https://restapinodejs.onrender.com/api/course/photo/${item._id}`}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        Course: {item.name}
        </Typography>
        <Typography gutterBottom variant="h6" component="div" color='gray'>
        Duration: {item.duration}
        </Typography>
        <Typography gutterBottom variant="h6" component="div" color='gray'>
        Fees: {item.fees}
        </Typography>
        <Typography gutterBottom variant="h6" component="div" color='gray'>
        Requirments: {item.requirement}
        </Typography>
        <Link to={`/Course_apply/${item._id}`} style={{color:'red'}}><strong>Apply</strong></Link>
        {/* <Typography variant="body2" color="text.secondary">
        {item.talk.slice(0,150)}
        </Typography> */}
      </CardContent>
    </Card>
                </>
              );
            })}
          </StyledToolbar>
          {/* </Box> */}
        </Container>
      </Box>
   </Layout>
   </>
  )
}

export default Course