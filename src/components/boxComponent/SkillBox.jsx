import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components';

function SkillBox(props) {
    const {lang, img, id} = props;

  return (
    <ContainerSkill  >
            <h2 >{lang}</h2>
            <Link to={`/my_resume/skills/${id}`}>
           <SkillLogo  className='skillLogo' src={img} alt="" />
            </Link>
    </ContainerSkill>
   
  )
}
const ContainerSkill = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;    
    margin: 10px 10px;

    @media (min-width:700px){
        width: 30%;
    }
`;

 
  
   const SkillLogo = styled.img`
    width:200px;
    height: 200px;
    transition: 0.7s;
    animation: horizontal-shaking  0.7s ;




    &:hover{
        transform: scale(1.2);
    }


  
`;
export default SkillBox