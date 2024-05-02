import React, { useState } from 'react'
import Layout from '../layout/Layout'
import LoginIcon from '@mui/icons-material/Login';
import { Button, TextField } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { loginData } from '../Services/Api';
import { useAuth } from '../Contex/Auth';
import Loading from '../Components/Loading';

const Login = () => {
  const navi=useNavigate()
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')
 const[auth,setAuth]=useAuth()
 const [loading,setLoading]=useState(false)

  const loginHandel=async(e)=>{
    e.preventDefault()
    setLoading(true)
    try {
      const response=await loginData({email,password})
      console.log("data", response);
      if (response && response?.data?.status === 200) {
        setAuth({
          ...auth,
          user: response?.data?.user,
          token:response?.data?.token
        });
        setLoading(false)
        toast.success(response?.data?.message);
        localStorage.setItem("auth", JSON.stringify(response.data));
        navi("/Home");
      } else {
        toast.error(response?.data?.message);
      }
    } catch (error) {
      toast('Some server error')
    }
  }
  
  if(loading){
    return <Loading/>
    }
  return (
    <>
    <Layout>
    <div className="container" style={{backgroundImage:'url("https://as1.ftcdn.net/v2/jpg/06/25/69/42/1000_F_625694269_SS1sEzFpFKxkpT4gutuGKgDKM8Y3DbWf.jpg")',backgroundSize:'cover'}}>
        <div className="row mt-5">
          <div className="col mt-3">
          <div className='text-center mt-2 pt-5 shadow p-3 mb-4 bg-body rounded' style={{marginLeft:'auto',marginRight:'auto', width:'40%', backgroundColor:'#f0f0f0' }} >
            <img src='https://cdn-icons-png.flaticon.com/512/295/295128.png' alt='Login' height='50px ' className='mb-4'/>
      <div>
        <label style={{fontSize:'30px',fontWeight:'bold'}}>Sign In</label><br/>
      <TextField label="*Email ID" variant="outlined" size='small' value={email} onChange={e=>setEmail(e.target.value)}/>
      </div>
      <div className='mt-4 mb-4'>
      <TextField  label="*Password" type='password' size='small' variant="outlined" value={password} onChange={e=>setPassword(e.target.value)} />
      </div>
      
  Do you have an account? <Link to={'/Register'}>Sign Up</Link>
      <Button variant="contained" size='medium' style={{marginTop:20, marginBottom:10,width:'60%'}} startIcon={<LoginIcon/>} color='error' onClick={loginHandel}>Login</Button>
      {/* <Button variant="contained" size='small' style={{marginTop:10,marginLeft:4,marginBottom:10}} startIcon={<HowToRegIcon/>} onClick={signuphandel}>Signup</Button> */}
      </div>
          </div>
        </div>
      </div>
    </Layout>
    </>
  )
}

export default Login