import React from 'react'
import "./Component.css"
import Header from '../sections/Header'
import Footer from '../sections/Footer'
import { Outlet } from 'react-router-dom'
import info from "..//info.json"
function Home() {
  console.log(info.personalinformation.profileImg)
  return (

    <>
      <section className='HomeSect'>
      <h1 className='animatedName'>{info.personalinformation.name} {info.personalinformation.lastName}</h1> 
      <h2>{info.personalinformation.jobTitle}</h2>
      <img src={info.personalinformation.profileImg} alt="" />
      </section>
    </>
  )
}

export default Home