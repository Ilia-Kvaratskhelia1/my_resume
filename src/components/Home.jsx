import React from 'react'
import "./Component.css"
import info from "..//info.json"
import SkillBox from './boxComponent/SkillBox'


function Home() {

  

  return (

    <>
      <section className='HomeSect'>
     <div className="container">
     <div className="titles">
     <h1 className='animatedName'>Hello, I'm <span className='fullName' >{info.personalinformation.name} {info.personalinformation.lastName}</span></h1> 
    <h2>{info.personalinformation.jobTitle}</h2>
     </div>
     <div className="resumeImg">
     <img className='' src={info.personalinformation.profileImg} alt="" />
     </div>
     </div>
      </section>
      <div className="skillTitle">
        <h1>Skills</h1>
      </div>
      <section className='skills'> 
      
        {info.personalinformation.skills.map((item)=>{
             return <SkillBox 
            key = {item.id}
            id = {item.id}
            lang ={item.lang} 
            img = {item.img}
             />
        })}
      </section>
    </>
  )
      }

export default Home