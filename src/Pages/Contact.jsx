import React, { useState } from 'react'
import Layout from '../layout/Layout'
import { Box, Button, Container, TextField, Typography } from '@mui/material'
import { toast } from 'react-toastify'
import { contactData } from '../Services/Api'
import HowToRegIcon from '@mui/icons-material/HowToReg';

const Contact = () => {
    const[name,setName]=useState('')
    const[email,setEmail]=useState('')
    const[phone,setPhone]=useState('')
    const[message,setMessage]=useState('')
  
    const contact_us=async(e)=>{
      e.preventDefault()
      await contactData({name,email,phone,message})
      toast('Message Send Successfully')
    }
  
  return (
    <Layout>
        <Container>
        <Box className="map-section pt-3">
           <iframe style={{border:"0", width: "100%", height: "350px"}} src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12097.433213460943!2d-74.0062269!3d40.7101282!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb89d1fe6bc499443!2sDowntown+Conference+Center!5e0!3m2!1smk!2sbg!4v1539943755621" frameborder="0" allowfullscreen title='map'></iframe>
         </Box>
         <Box>
         <Typography variant="h3" align='center' marginTop={4}>
          <strong>Contact Us:</strong>
          </Typography>
          <Box style={{marginLeft:'auto',marginRight:'auto', width:'50%'}}>

          <form className='mt-4' onSubmit={contact_us} >
             <TextField  label="Name*" variant="outlined" size='small' value={name} onChange={e=>setName(e.target.value)} style={{width:'100%'}}/><br/>

             <TextField  label="Email*" variant="outlined" size='small' style={{marginTop:5,width:'100%'}} value={email} onChange={e=>setEmail(e.target.value)}/><br/>

             <TextField  label="Phone No*" variant="outlined" size='small' style={{marginTop:5,width:'100%'}} value={phone} onChange={e=>setPhone(e.target.value)}/><br/>

             <TextField  label="Your Message*" variant="outlined" size='small' style={{marginTop:5,width:'100%'}} value={message} onChange={e=>setMessage(e.target.value)} multiline rows={3}/><br/>

             
             <Button variant="contained" size='small' style={{marginTop:10,width:'100%', marginBottom:20}} startIcon={<HowToRegIcon/>} >Send Message</Button>
          </form>
          </Box>
         </Box>
        </Container>
    </Layout>
  )
}

export default Contact