import React from 'react'
import SkillBox from './boxComponent/SkillBox'
import ChoosedSkill from './boxComponent/ChoosedSkill'
import info from "../info.json"
function Skills() {
  return (
    <>
    <section>
      {info.personalinformation.skills.map((item)=>{

        return <div key={item.id}>
          <h1>{item.lang}</h1>
        </div>
      })}
    </section>
    </>
  )
}

export default Skills