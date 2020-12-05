import styled from 'styled-components';
import { size, spacing } from '../../styles/vars';
import { IAppStyledProps } from '../../types/IAppStyledProps';
import pat1 from '../../img/pattern11.png';

export const ProjectsContainer = styled.div`
    width: 100%;
    display:flex;
    flex-direction:column;
    flex-wrap: nowrap;
    align-items:center;
    justify-content:center;

    background-blend-mode: multiply;
    background-image: url(${pat1});
    background-color: ${({ theme }: IAppStyledProps) => theme.body};

    @media (max-width: ${size.tablet}){
        /* padding: ${spacing.normal}; */
    }    
`;
