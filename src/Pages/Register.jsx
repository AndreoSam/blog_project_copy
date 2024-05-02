import React, { useState } from 'react'
import Layout from '../layout/Layout'
import { Box, Button, Container, TextField, Typography } from '@mui/material'
import { registerData } from '../Services/Api'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import HowToRegIcon from '@mui/icons-material/HowToReg';

const Register = () => {
  const navi=useNavigate()
  const [name,setName]=useState('')
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')
  const [mobile,setMobile]=useState('')
  const[error,setError]=useState({})

  const validation=()=>{
    const error={}
    if(!name){
      error.name='*@Name Cannot be empty'
    }
    if(!email){
      error.email='*@Email Cannot be empty'
    }
    if(!mobile){
      error.mobile='*@Phone Cannot be empty'
    }
    if(!password){
      error.password='*@Password Cannot be empty'
    }
   
    return error
  }

  const handelRegistration=async(e)=>{
    e.preventDefault()
    const errorList=validation()
    setError(validation())
    if(Object.keys(errorList).length===0){
      try {
        const res=await registerData({name,email,mobile,password})
        console.log(res)
        if(res && res?.data?.success){
          toast('Registration Successfull')
          navi('/')
        }else{
          toast('Email already Exist')
        }
      } catch (error) {
        toast('Something Wrong')
      }
    }
  
      
  }
  return (
    <Layout>
      <Container>
      <Box className='text-center mt-5 shadow p-3 mb-5 bg-body rounded' style={{marginLeft:'auto',marginRight:'auto', width:'40%'}}>
        <Typography variant='h3'>Registration page</Typography><hr/>
        <AccountBoxIcon color='primary' sx={{ fontSize: 50 }}/>
          <form className='mt-4'>
             <TextField id="outlined-basic" label="Name*" variant="outlined" size='small' value={name} onChange={e=>setName(e.target.value)}/><br/>
             <Typography variant="subtitle2"  gutterBottom  style={{color:'red'}}>{error.name}</Typography>

             <TextField  label="Email*" variant="outlined" size='small' style={{marginTop:5}} value={email} onChange={e=>setEmail(e.target.value)}/><br/>
             <Typography variant="subtitle2" gutterBottom style={{color:'red'}}>{error.email}</Typography>

             <TextField  label="Phone No*" variant="outlined" size='small' style={{marginTop:5}} value={mobile} onChange={e=>setMobile(e.target.value)}/><br/>
             <Typography variant="subtitle2" gutterBottom style={{color:'red'}}>{error.mobile}</Typography>

             <TextField  label="Password*" type='password' variant="outlined" size='small' style={{marginTop:5}}  value={password} onChange={e=>setPassword(e.target.value)}/><br/>
             <Typography variant="subtitle2" gutterBottom style={{color:'red'}}>{error.password}</Typography>



             <Button variant="contained" size='small' style={{marginTop:10,width:'52%', marginBottom:20}} startIcon={<HowToRegIcon/>} onClick={handelRegistration}>Submit</Button>
          </form>
          </Box>
      </Container>
    </Layout>
  )
}

export default Register