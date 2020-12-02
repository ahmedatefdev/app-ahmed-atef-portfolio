import styled from 'styled-components'
import { size, spacing } from '../styles/vars';
import { IAppStyledProps } from '../types/IAppStyledProps';

export const MainTitle = styled.h1`
    text-align: center;
    color: ${({ theme }) => theme.text};
    margin: 0em ${spacing.normal};

    @media (max-width: ${size.tablet}){
        margin:0 ${spacing.small};
    }
`

export const SecTitle = styled.h2`
    color: ${({ theme }: IAppStyledProps) => theme.text};
    margin:0em;
`
export const TitleLoad = styled.div`
    width: 50%;
`
export const SectionTitle = styled.h1`
        font-size: 3.8em;
        line-height: 90px;
        margin-bottom: 12px;
        text-transform:uppercase;
        text-align:center;
        
        color:${({ theme }: IAppStyledProps) => theme.text};

        @media  (max-width: ${size.tablet}){
            font-size: 3em;
            margin-bottom: 0;
            line-height: 75px;
        }

        @media   (max-width: 900px) and (orientation: landscape) {
            font-size: 3.3em;
            margin: 0;
        }
`