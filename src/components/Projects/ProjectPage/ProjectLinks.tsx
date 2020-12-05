import styled from 'styled-components';
import { IAppStyledProps } from '../../../types/IAppStyledProps';
import { size } from '../../../styles/vars';
import React from 'react';
import { FaCode, FaDesktop } from 'react-icons/fa';

interface Props {
  siteUrl: string
  codeUlr: string
}

export const ProjectLinksContainer = styled.div`
  .buttons {
    display: flex;
    justify-content: center;
    padding: 20px 0;
    margin-bottom: 1.5rem;
  }
  .buttons a {
    display: inline-flex;
    
    justify-content: center;
    align-items:center;
    width: 175px;
    padding: 10px 20px;
    margin: 0 10px;
    border-radius: 3px;
    color: ${({ theme }: IAppStyledProps) => theme.text};
    background: ${({ theme }: IAppStyledProps) => theme.accent};
    text-decoration: none;
    text-transform: capitalize;
    transition: all 0.3s ease-in-out;
    @media (max-width: ${size.mobileL}){
      flex-direction: column;
    }
  }
  .buttons svg {
    height: 1.2em;
    width: 1.2em;
    align-self: center;
    margin-right: 10px;
    @media (max-width: ${size.mobileL}){
      margin-right: 0;
    }
  }
  .buttons a:hover {
    filter:brightness(110%) contrast(120%);
    color: white;
  }
  .buttons a:hover .fas {
    color: white;
  }

  @media only screen and (max-width: 767px) {
    .buttons {
      text-align: center;
    }
    .buttons a {
      margin-bottom: 10px;
    }
  }
`;

const ProjectLinks = ({ siteUrl, codeUlr }: Props) => {
  return (
    <ProjectLinksContainer>
      <div className="buttons">
        {siteUrl && <a
          href={siteUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaDesktop /> Visit Site
                </a>}
        {codeUlr && <a
          href={codeUlr}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaCode /> View Code
                </a>}
      </div>
    </ProjectLinksContainer>
  )
}

export default ProjectLinks