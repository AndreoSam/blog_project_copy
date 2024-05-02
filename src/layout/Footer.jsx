import { Box, Button, Card, Divider, List, ListItem, TextField, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <>
    <br /><br />
    <Card style={{ background: "#282929" }}>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="flex-start"
        flexWrap="wrap"
        p={2}
        m="0 auto"
        width="90%">
        <Box width={250} height={270} bgcolor="transparent" p={2} >
          <Typography variant="h5" component="h4" sx={{ textAlign: "center", fontFamily: "Times", color: "white", fontWeight: "800" }}>
           MUI PROJECT
          </Typography>
          <Divider /><br />
          <Typography variant="body1" component="p" sx={{ textAlign: "center", fontFamily: "Times", color: "white" }}>
            <strong>Address:</strong> Serampore Dhobi Ghat, Serampore ,Kolkata, West Bengal 700091
          </Typography>
          <Typography variant="body1" component="p" sx={{ textAlign: "center", fontFamily: "Times", color: "white", marginTop: "20px" }}>
            Email: monalisa@gmail.com <br />
            Phone: +91 7686846659
          </Typography>
        </Box>
        <Box width={250} height={270} bgcolor="transparent" p={2}>
          <Typography variant="h6" component="h4" sx={{ textAlign: "center", fontFamily: "Times", color: "white", fontWeight: "800" }}>
            Useful Links
          </Typography>
          <Divider />
          <List>
            <ListItem button>
              <Link to="/Home" style={{ textDecoration: "none", color: "white" }}>Home</Link>
            </ListItem>
            <ListItem button>
              <Link to="/About"  style={{ textDecoration: "none", color: "white" }}>About</Link>
            </ListItem>
            <ListItem button>
              <Link style={{ textDecoration: "none", color: "white" }}>Courses</Link>
            </ListItem>
            <ListItem button>
              <Link to="/"  style={{ textDecoration: "none", color: "white" }}>Login</Link>
            </ListItem>
            <ListItem button>
              <Link style={{ textDecoration: "none", color: "white" }}>API Documentation</Link>
            </ListItem>
          </List>
        </Box>
        <Box width={250} height={270} bgcolor="transparent" p={2}>
          <Typography variant="h6" component="h4" sx={{ textAlign: "center", fontFamily: "Times", color: "white", fontWeight: "800" }}>
            Our Services
          </Typography>
          <Divider />
          <List>
            <ListItem button>
              <Link style={{ textDecoration: "none", color: "white", }}>Web Design</Link>
            </ListItem>
            <ListItem button>
              <Link style={{ textDecoration: "none", color: "white" }}>Web Development</Link>
            </ListItem>
            <ListItem button>
              <Link style={{ textDecoration: "none", color: "white" }}>Product Management</Link>
            </ListItem>
            <ListItem button>
              <Link style={{ textDecoration: "none", color: "white" }}>Marketing</Link>
            </ListItem>
            <ListItem button>
              <Link style={{ textDecoration: "none", color: "white" }}>Graphic Design</Link>
            </ListItem>
          </List>
        </Box>
        <Box width={350} height={270} bgcolor="transparent" p={2}>
          <Typography variant="h6" component="h4" sx={{ textAlign: "center", fontFamily: "Times", color: "white", fontWeight: "800" }}>
            Join Our Newsletter
          </Typography>
          <Divider />
          <Typography sx={{ textAlign: "center", color: "white" }}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. At, quam.
          </Typography>
          <br />
          <TextField
            style={{
              borderRadius: "20px",
              background: "white",
              color: "white"
            }}
            variant="outlined"
            placeholder='Enter Your Email'
            fullWidth
            sx={{ marginBottom: 1 }}
          />
          <center>
            <Button
              variant="contained"
              sx={{ bgcolor: "#ff9800" }}>
              Subscribe
            </Button>
          </center>
        </Box>
      </Box>
    </Card >
    </>
  )
}

export default Footer