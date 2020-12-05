import styled from 'styled-components';
import { size, spacing } from '../../styles/vars';
import { IAppStyledProps } from '../../types/IAppStyledProps';
import pat3 from '../../img/pattern11.png'

export const ExpertisesContainer = styled.div`
    width: 100%;
    padding: ${spacing.extraLarge};

    display:flex;
    flex-direction:column;
    flex-wrap: nowrap;
    align-items:center;
    justify-content:center;
    
    background-blend-mode: multiply;
    background-image: url(${pat3});
    background-color: ${({ theme }: IAppStyledProps) => theme.darkerAccent};

    filter: drop-shadow(0px 0px 5px ${({ theme }: IAppStyledProps) => theme.accent});

    @media (max-width: ${size.tablet}){
        padding: ${spacing.normal} 0;
    }
`;
