import React from 'react'
import {Routes,Route, Navigate } from 'react-router-dom'
import Home from '../Pages/Home'
import About from '../Pages/About'
import Register from '../Pages/Register'
import Login from '../Pages/Login'
import Course from '../Pages/Course'
import Course_apply from '../Pages/Course_apply'
import Contact from '../Pages/Contact'
import Blog from '../Pages/Blog'
import BlogDetails from '../Pages/BlogDetails'
import Category_post from '../Pages/Category_post'

const Routing = () => {

  const ProtectedRoute=({children})=>{
    const token=localStorage.getItem('auth')||sessionStorage.getItem('auth')
    return token !==null && token !==undefined?(<>
    {children}
    </>):(<>
    <Navigate to={'/'}/>
    </>)
  }
  const privateRoute=[
    {
      path:'/Home',
      element:<Home/>
    },
    {
      path:'/About',
      element:<About/>
    },
    {
      path:'/Course',
      element:<Course/>
    },
    {
      path:'/Course_apply/:id',
      element:<Course_apply/>
    },
    {
      path:'/Blog',
      element:<Blog/>
    },
    {
      path:'/BlogDetails/:id',
      element:<BlogDetails/>
    },
    {
      path:'/Category_post/:id',
      element:<Category_post/>
    }
  ]
  const publicRoute=[
    {
      path:'/',
      element:<Login/>
    },
    {
      path:'/Register',
      element:<Register/>
    },
    {
      path:'/Contact',
      element:<Contact/>
    }
  ]
  return (
    <>
    <Routes>
        {
          publicRoute?.map((route,key)=>{
            return (<>
            <Route
             key={key+1}
            path={route.path}
            element={route.element}/>
            </>)
          })
        }
        

{
    privateRoute?.map((route,i)=>{
            return (<>
            <Route
             key={i+1}
            path={route.path}
            element={<ProtectedRoute>{route.element}</ProtectedRoute>}/>
            </>)
          })
        }
    </Routes>
    
    </>
  )
}

export default Routing