import styled from 'styled-components';
import { size } from '../../styles/vars';
import pat1 from '../../img/pattern11.png';
import { IAppStyledProps } from '../../types/IAppStyledProps';

export const ProjectsContainer = styled.div`
    width: 100%;
    padding: 3em 0;

    display: flex;
    justify-content: center;
    align-items: flex-start;

    background-blend-mode: multiply;
    background-image: url(${pat1});
    background-color: ${({ theme }: IAppStyledProps) => theme.body};

    color: ${({ theme }: IAppStyledProps) => theme.text};

    h1 {
        font-size: 2.5em;
        color: ${({ theme }: IAppStyledProps) => theme.text};
    }


    .work-container {
        width: 85%;
        height: 100%;
        
        text-align: center;

        .projects {
            width: 100%;
            display: flex;
            flex-direction:row;
            flex-wrap:wrap;
            justify-content:space-around;

            align-items:center;
            margin:0;
            
            @media (max-width: ${size.tablet}){
                flex-direction:column;
                flex-wrap:nowrap;
            }
        }
    }
`;
