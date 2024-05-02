import React, { useEffect, useState } from 'react'
import { bannerData } from '../Services/Api'

const Home_comp = () => {
    const [banner,setBanner]=useState([])
    

    const getData=async()=>{
        const res=await bannerData()
        console.log(res)
        if(res && res?.data?.success){
            setBanner(res?.data?.bannerdata)
            console.log(banner)
        }
    }
    useEffect(()=>{
        getData()
    },[])
  return (
    <>
    <div>
<div id="carouselExampleCaptions" class="carousel slide" data-ride="carousel">
  <ol class="carousel-indicators">
    <li data-target="#carouselExampleCaptions" data-slide-to="0" class="active"></li>
    <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
    <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
  </ol>
  <div class="carousel-inner" style={{height:'600px'}}>
    {
        banner.map((item,i)=>{
            return (<>
        <div class={`carousel-item ${i===0?'active':''}`}>
      <img src={`https://restapinodejs.onrender.com/api/banner/photo/${item._id}`} class="d-block w-100" alt="image"/>
      <div class="carousel-caption d-none d-md-block">
        <h5>{item.title}</h5>
        <p>{item.description}</p>
      </div>
    </div>
            </>)
        })
    }

   
  </div>
  <button class="carousel-control-prev" type="button" data-target="#carouselExampleCaptions" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-target="#carouselExampleCaptions" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </button>
</div>
</div>
    </>
  )
}

export default Home_comp