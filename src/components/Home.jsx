import React from 'react'
import "./Component.css"
import info from "..//info.json"
function Home() {
  console.log(info.personalinformation.profileImg)
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
      <section className='skills'> 
      <div className="containerSkill">
        {info.personalinformation.skills.map((item)=>{
         return <div className="skillsLang">
            <h2>{item.lang}</h2>
           <img className='skillLogo' src={item.img} alt="" />
          </div>
        })}
      </div>
      </section>
    </>
  )
}

export default Home