import React from 'react'

import ProjectsNavbar from './ProjectsNavbar';
import ImagesCarousel from './ImagesCarousel';
import ProjectLinks from './ProjectLinks';
import styled from 'styled-components';
import { IAppStyledProps } from '../../../types/IAppStyledProps';
import { size } from '../../../styles/vars';


// TEMP -----------------------
import ph3 from '../../../img/crack.png'

export const ProjectPageContainer = styled.div`
  padding: 50px 15px 50px;
  background-color: ${({ theme }: IAppStyledProps) => theme.body};
  
  .container {
    max-width: 1150px;
    margin: 0 auto;
  }

  h1 {
    text-align: center;
    font-size: 4rem;
    font-weight: 600;
    margin-bottom: 1.5rem;
    color: ${({ theme }: IAppStyledProps) => theme.text};
  }
  
  p {
    display: inline-block;
    border-radius: 3px;
    color: ${({ theme }: IAppStyledProps) => theme.text};
    font-size: 1.5rem;
    line-height: 1.7;
    text-decoration: none;
    margin-bottom: 1.8rem;
  }


  
  @media (max-width: ${size.tablet}){ 
      padding-top: 100px;
  }

  @media only screen and (max-width: 960px) {
    & h1 {
      font-size: 3rem;
      text-align: center;
    }

    & p {
      font-size: 1rem;
    }
  }
`;

interface Props {

}

const ProjectPage = (props: Props) => {
  const expertises = [0, 1, 2]
  const nextProjectLink = "/"
  const PerviousProjectLink = "/"
  const imagesURLS = [ph3, ph3, ph3]
  const projectTitle = "Project Title"
  const siteUrl = "/"
  const codeUlr = "/"
  const projectDetails = "-----------------------------------------description"
  const expertisesImagesURL = [ph3, ph3, ph3, ph3]
  return (
    <ProjectPageContainer>
      <div className="container">
        <ProjectsNavbar PerviousProjectLink={PerviousProjectLink} nextProjectLink={nextProjectLink} />
        <ImagesCarousel imagesURLS={imagesURLS} />
        <h1>{projectTitle}</h1>
        <ProjectLinks siteUrl={siteUrl} codeUlr={codeUlr} />
        <p>{projectDetails}</p>
      </div>
    </ProjectPageContainer>

  )
}

export default ProjectPage
