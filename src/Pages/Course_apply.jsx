import React, { useState } from 'react'
import Layout from '../layout/Layout'
import { Box, Button, Container, TextField, Typography } from '@mui/material'
import { useNavigate, useParams } from 'react-router-dom'
import { toast } from 'react-toastify'
import { course_apply_Data } from '../Services/Api'
import HowToRegIcon from '@mui/icons-material/HowToReg';

const Course_apply = () => {
    const navi=useNavigate()
    const {id}=useParams()
    const [name,setName]=useState('')
    const [email,setEmail]=useState('')
    const [phone,setPhone]=useState('')
    const [city,setCity]=useState('')
    const [address,setAddress]=useState('')
    const [qualification,setQualification]=useState('')
    const [programing_knowledge,setPrograming_Knowledge]=useState('')
    const [experiance,setExperiance]=useState('')
    const[error,setError]=useState({})

    const validation=()=>{
        const error={}
        if(!name){
          error.name='*@Name Cannot be empty'
        }
        if(!email){
          error.email='*@Email Cannot be empty'
        }
        if(!phone){
          error.phone='*@Phone Cannot be empty'
        }
        if(!city){
          error.city='*@City Cannot be empty'
        }
        if(!address){
            error.address='*@Address Cannot be empty'
        }
        if(!qualification){
            error.qualification='*@Qualification Cannot be empty'
        }
        if(!programing_knowledge){
            error.programing_knowledge='*@Programing Knowledge Cannot be empty'
        }
        if(!experiance){
            error.experiance='*@Experiance Cannot be empty'
        }
       
        return error
      }

      const handelRegistration=async(e)=>{
        e.preventDefault()
        const errorList=validation()
        setError(validation())
        if(Object.keys(errorList).length===0){
          try {
            const res=await course_apply_Data({name,email,phone,city,address,qualification,programing_knowledge,experiance},id)
            console.log(res)
            if(res && res?.status===200){
              toast('Registration Successfull')
              navi('/Course')
            }else{
              toast('You are not Applicable.Try again')
            }
          } catch (error) {
            toast('Something Wrong')
          }
        }
          
      }
  return (
   <>
   <Layout>
   <Container maxWidth="sm">
    <Box >
    <Typography variant="h3" align="center" marginTop={4}>
          <strong>Your Details</strong>
          </Typography>
          <Box style={{marginLeft:'auto',marginRight:'auto', width:'50%'}}>
    <form className='mt-4'>
             <TextField  label="Name*" variant="outlined" size='small' value={name} onChange={e=>setName(e.target.value)} style={{width:'100%'}}/><br/>
             <Typography variant="subtitle2"  gutterBottom  style={{color:'red'}}>{error.name}</Typography>

             <TextField  label="Email*" variant="outlined" size='small' style={{marginTop:5,width:'100%'}} value={email} onChange={e=>setEmail(e.target.value)}/><br/>
             <Typography variant="subtitle2" gutterBottom style={{color:'red'}}>{error.email}</Typography>

             <TextField  label="Phone No*" variant="outlined" size='small' style={{marginTop:5,width:'100%'}} value={phone} onChange={e=>setPhone(e.target.value)}/><br/>
             <Typography variant="subtitle2" gutterBottom style={{color:'red'}}>{error.phone}</Typography>

             <TextField label="City*" variant="outlined" size='small'  style={{marginTop:5,width:'100%'}} value={city} onChange={e=>setCity(e.target.value)}/><br/>
             <Typography variant="subtitle2"  gutterBottom  style={{color:'red'}}>{error.city}</Typography>

             <TextField label="Address*" variant="outlined" size='small'  style={{marginTop:5,width:'100%'}} value={address} onChange={e=>setAddress(e.target.value)}/><br/>
             <Typography variant="subtitle2"  gutterBottom  style={{color:'red'}}>{error.address}</Typography>

             <TextField  label="Qualification*" type='text' variant="outlined" size='small' style={{marginTop:5,width:'100%'}}  value={qualification} onChange={e=>setQualification(e.target.value)}/><br/>
             <Typography variant="subtitle2" gutterBottom style={{color:'red'}}>{error.qualification}</Typography>

             <TextField label="Programing Knowledge*" variant="outlined" size='small'  style={{marginTop:5,width:'100%'}} value={programing_knowledge} onChange={e=>setPrograming_Knowledge(e.target.value)}/><br/>
             <Typography variant="subtitle2"  gutterBottom  style={{color:'red'}}>{error.programing_knowledge}</Typography>

             <TextField label="Experiance*" variant="outlined" size='small'  style={{marginTop:5,width:'100%'}} value={experiance} onChange={e=>setExperiance(e.target.value)}/><br/>
             <Typography variant="subtitle2"  gutterBottom  style={{color:'red'}}>{error.experiance}</Typography>

             <Button variant="contained" size='small' style={{marginTop:10,width:'100%', marginBottom:20}} startIcon={<HowToRegIcon/>} onClick={handelRegistration}>Submit</Button>
          </form>
          </Box>
    </Box>
    </Container>
   </Layout>
   </>
  )
}

export default Course_apply