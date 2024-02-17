import React from 'react'
import info from "../info.json"
function About() {
    
   console.log(info)

  return (
    <div>
          <h1>{info.path}</h1>
    </div>
  )
}

export default About