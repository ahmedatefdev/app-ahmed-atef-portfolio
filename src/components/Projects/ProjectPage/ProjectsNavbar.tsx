import styled from 'styled-components';
import { IAppStyledProps } from '../../../types/IAppStyledProps';
import { size } from '../../../styles/vars';
import Link from 'next/link';
import React from 'react';
import { IoIosArrowDropleftCircle, IoIosArrowDroprightCircle } from 'react-icons/io';

interface Props {
    PerviousProjectLink: string
    nextProjectLink: string
}

export const ProjectsNavbarContainer = styled.div`
    display: flex;
    flex-direction: row;

    .spacer {
      flex: 1;
    }

    .right  .nav-icon  {
      text-align: right;

      @media (max-width: ${size.tablet}){
        display: none;
      }
    }

    .nav-link{
      margin: 20px 0;

      .nav-icon {
        display: flex;
        align-items: center;
        
        text-decoration: none;
        text-transform: uppercase;

        cursor: pointer;
        color: ${({ theme }: IAppStyledProps) => theme.text};
        
        transition: 0.5s;

        &:hover {
          color: ${({ theme }: IAppStyledProps) => theme.highlight};
        }

        svg {
          height: 2em;
          width: 2em;
          margin: 6px;
        }
      }
    }
`;

const ProjectsNavbar = ({ PerviousProjectLink, nextProjectLink }: Props) => {
    return (
        <ProjectsNavbarContainer>
            <div className="nav-link">
                <Link href={PerviousProjectLink}>
                    <div className="nav-icon">
                        <IoIosArrowDropleftCircle />Previous Project
                    </div>
                </Link>
            </div>

            <div className="spacer" />

            <div className="nav-link right">
                <Link href={nextProjectLink}>
                    <div className="nav-icon">
                        Next Project<IoIosArrowDroprightCircle />
                    </div>
                </Link>
            </div>

        </ProjectsNavbarContainer>
    );
}

export default ProjectsNavbar
