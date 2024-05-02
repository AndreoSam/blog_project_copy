import React from 'react'
import Layout from '../layout/Layout'
import { Box, Typography } from '@mui/material'
import About_comp from '../Components/About_comp'
import Service from '../Components/Service'
import Home_comp from '../Components/Home_comp'
import Testimonial from '../Components/Testimonial'

const Home = () => {
  return (
  <>
  <Layout>
   <Home_comp/>
    <hr/>
    <About_comp/>
    <hr/>
    <Service/>
    <hr/>
    <Testimonial/>
  </Layout>
  </>
  )
}

export default Home