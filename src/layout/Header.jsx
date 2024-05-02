import styled from '@emotion/styled'
import { AppBar, Avatar, Box, Toolbar, Typography } from '@mui/material'
import React from 'react'
import BusinessIcon from '@mui/icons-material/Business';
import { Link } from 'react-router-dom';
import { useAuth } from '../Contex/Auth';
import LogoutIcon from '@mui/icons-material/Logout';

const Header = () => {
  const[auth,setAuth]=useAuth()

    const StyledToolbar=styled(Toolbar)({
      display:'flex',
      justifyContent:'space-between', 
      backgroundColor:'#282929',
      flexWrap:'wrap'
       
    })
    const logoutHandel=()=>{
      setAuth({user:null,token:''})
    localStorage.removeItem('auth')
    }

  return (
   <>
   <AppBar position='sticky'>
    <StyledToolbar>
    <Typography variant='h6' sx={{display:{xs:'none',sm:'block'}}}>MUI PROJECT</Typography>
<BusinessIcon sx={{display:{xs:'block',sm:'none'}}}/>
<Box sx={{display:'flex',gap:'20px'}}>
    <Typography><Link to={'/Home'} style={{ textDecoration: "none",color:'white' }}>Home</Link></Typography>
    <Typography><Link to={'/About'} style={{ textDecoration: "none",color:'white' }}>About</Link></Typography>
    <Typography><Link to={'/Course'} style={{ textDecoration: "none",color:'white' }}>Course</Link></Typography>
    <Typography><Link to={'/Blog'} style={{ textDecoration: "none",color:'white' }}>Blog</Link></Typography>
    <Typography><Link to={'/Contact'} style={{ textDecoration: "none",color:'white' }}>Contact</Link></Typography>
</Box>
{!auth?.user?(<>
  <Box sx={{display:'flex',gap:'20px'}}>
<Typography><Link to={'/'} style={{ textDecoration: "none",color:'white' }}>Login</Link></Typography>
<Typography><Link to={'/Register'} style={{ textDecoration: "none",color:'white' }}>Register</Link></Typography>
<Avatar alt="Monalisa" src="https://png.pngtree.com/png-vector/20191003/ourmid/pngtree-user-login-or-authenticate-icon-on-gray-background-flat-icon-ve-png-image_1786166.jpg" />

</Box >
</>):(<>
  <Box sx={{display:'flex',gap:'20px'}}>
  <Typography><Link style={{ textDecoration: "none",color:'yellow',fontFamily:'cursive' }}><strong>Welcome {auth?.user?.name}</strong></Link></Typography>
<Typography><Link to={'/'} onClick={logoutHandel} style={{ textDecoration: "none",color:'white' }}><LogoutIcon/>Logout</Link></Typography>
<Avatar alt="Monalisa" src="https://www2.deloitte.com/content/dam/Deloitte/nl/Images/promo_images/deloitte-nl-cm-digital-human-promo.jpg" />

</Box >
</>)}

    </StyledToolbar>
   </AppBar>
   </>
  )
}

export default Header