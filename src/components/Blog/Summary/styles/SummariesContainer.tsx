import styled from 'styled-components';
import { size, spacing } from '../../../../styles/vars';
import pat3 from '../../../../img/pattern11.png';
import { IAppStyledProps } from '../../../../types/IAppStyledProps';

export const SummariesContainer = styled.div`
    width: 90%;
    margin:${spacing.large};
    
    display:flex;
    flex-direction: row;
    justify-content: space-around;
    align-items:center;
    flex-wrap:wrap;

    background-blend-mode: multiply;
    background-image: url(${pat3}) ;
    background-color: ${({ theme }: IAppStyledProps) => theme.body} ;

    border-radius: 3px;
    filter:brightness(120%) contrast(110%);
    filter: drop-shadow(0px 0px 5px ${({ theme }: IAppStyledProps) => theme.accent});

    @media (max-width: ${size.tablet}){
        margin:${spacing.small};
    }
    
`;
