import React from 'react';
import info from "../../info.json";
import styled from 'styled-components';
import { useParams } from 'react-router-dom';

function ChoosedSkill() {
  const { skillId } = useParams();
  const selectedSkill = info.personalinformation.skills.find(skill => skill.id === parseInt(skillId, 10));

  const logger = (event) => {
    console.log(event.target);
  };

  if (!selectedSkill) {
    return <div>Invalid skill ID</div>;
  }

  const { lang, img, about } = selectedSkill;

  return (
    <>
      <div onClick={logger}>
        <ContainerSkill>
          <h2>{lang}</h2>
          <SkillLogo src={img} alt="" />
          <SkillAbout>
            {about}
          </SkillAbout>
        </ContainerSkill>
      </div>
    </>
  );
}

const ContainerSkill = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 10px 10px;

  @media (min-width: 700px) {
    width: 30%;
  }
`;

const SkillLogo = styled.img`
  width: 200px;
  height: 200px;
  transition: 0.7s;

  &:hover {
    transform: scale(1.2);
  }
`;

const SkillAbout = styled.p`
  color: red;
`;

export default ChoosedSkill;