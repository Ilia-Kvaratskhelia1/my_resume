import React from 'react'
import info from "../../info.json"
import { useParams } from 'react-router-dom'
function ChoosedSkill() {
  const {skillId} = useParams()
  return (
    <>
    {info.personalinformation.skills.map((item) =>{
        return <h1 key={skillId} >{item.lang}</h1>
    })}
    </>
  )
}

export default ChoosedSkill