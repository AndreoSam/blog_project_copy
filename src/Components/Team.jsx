import { Box, Card, CardContent, CardMedia, Container, Toolbar, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { teamData } from '../Services/Api'
import styled from '@emotion/styled'

const Team = () => {
    const [team,setTeam]=useState([])

    const getteamData=async()=>{
        const res=await teamData()
        console.log(res)
        if(res && res?.data?.success){
            setTeam(res?.data?.TeamMember)
        }
       
        
    }
    useEffect(()=>{
        getteamData()
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
          Our <strong>Team</strong>
          </Typography>
          <Typography variant="h5" align="center" marginTop={4}>
          Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.
          </Typography>
          <StyledToolbar>
            {team.map((item, i) => {
              return (
                <>
    <Card sx={{ maxWidth: 342 }}>
      <CardMedia
        sx={{ height: 340,borderRadius:'40%',objectFit:'contain',width:250}}
        image={`https://restapinodejs.onrender.com/api/team/photo/${item._id}`}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        {item.name}
        </Typography>
        <Typography gutterBottom variant="h6" component="div" color='gray'>
        {item.possession}
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

export default Team