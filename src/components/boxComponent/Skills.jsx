import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import info from "../../info.json"
// import bt from "../../../public/images/bt3.png"
// import {} from "../../../public"
useParams
function Skills() {
  const [skill, setSkill] = useState(info.personalinformation.skills)
  const {id} = useParams()
  const selectedCart = skill.find((cart) => cart.id === parseInt(id, 10));
  console.log(selectedCart)
  if (!selectedCart) {
    return <div>Cart not found</div>;
  }
  let imgPath = `${selectedCart.img.replace(".", "")}`
  // console.log(bt)
  console.log(imgPath)
  return (
    <>
      <h1>{selectedCart.lang}</h1>
      <img src={`/my_resume/public/${imgPath}`} alt="" />
    </>
  );
}

export default Skills