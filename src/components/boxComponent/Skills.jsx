import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import info from "../../info.json"
import "./Skills.css"
import NotFound from "../NotFound"
// import bt from "../../../public/images/bt3.png"
// import {} from "../../../public"
useParams
function Skills() {
  const [skill, setSkill] = useState(info.personalinformation.skills);
  const [title, setTitle]=useState('');
  const {id} = useParams()

  const selectedCart = skill.find((cart) => cart.id === parseInt(id, 10));
  if (!selectedCart) {
    return <><NotFound/></>
  }

  let imgPath = `${selectedCart.img.replace(".", "")}`

  useEffect(() => {
    // Convert id to a number using parseInt
    const idNumber = parseInt(id, 10);
    if (idNumber <= 6) {
      setTitle("Front-End");
    } else if (idNumber >= 6 && idNumber < 10) {
      setTitle("Back-End");
    } else if (idNumber === 10) {
      setTitle("DataBase");
    } else {
      setTitle("Unknown"); // Handle other cases if needed
    }
  }, [id])
  return (
    <>
      
      <h1 className='lanTitle'>{title}</h1>
      <div className="choosedSkillContainer">
      <div className="img_title">
      <h1>{selectedCart.lang}</h1>
      <img src={`/my_resume/public/${imgPath}`} alt="cover"/>
      </div>
      <p>{selectedCart.about}</p>
      </div>
    </>
  );
}

export default Skills