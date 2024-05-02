import React from 'react'
import Layout from '../layout/Layout'
import About_comp from '../Components/About_comp'
import Home_comp from '../Components/Home_comp'
import Service from '../Components/Service'
import Team from '../Components/Team'

const About = () => {
  return (
    <>
    <Layout>
      <Home_comp/>
      <hr/>
      <About_comp/>
      <hr/>
      <Service/>
      <hr/>
      <Team/>
    </Layout>
    </>
  )
}

export default About