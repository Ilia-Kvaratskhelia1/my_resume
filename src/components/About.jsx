import React, { useEffect, useState } from 'react'
import info from "../info.json"
import "./about.css"
function About() {
    
const [about, setAbout] = useState(info.about)
const [translate, setTranslate] = useState(false)

const TranslateHandler = () =>{
  setTranslate(!translate)
}
  return (
    <section>
      <div className="aboutMeContainer">
        <div className="name">
          <h1>
            Hello, I am {info.personalinformation.name}{" "}
            {info.personalinformation.lastName}{" "}
          </h1>
          <h1>Job Title: {info.personalinformation.jobTitle}</h1>
        </div>
        <div className="aboutMe">
        <button onClick={() => TranslateHandler()}>
            {translate ? "Translate English" : "Translate georgian"}
          </button>
          {about.map((text, index) => {
            return (
              <div key={index} className='letter'>
                {translate ? text.aboutMe: text.aboutMeForEnglish}
                <div className="education">
                  <h3>
                    College: {text.education}- {text.educTime}
                  </h3>
                  <h3>
                    Online Bootcamp - {text.onlineBootcamp}- {text.onlineTime}
                  </h3>
                </div>
                
              </div>
            );
          })}
          
        </div>
      </div>
    </section>
  );
}

export default About