import { EyeTwoTone, HeartTwoTone, HighlightTwoTone, SmileTwoTone } from '@ant-design/icons'
import React from 'react'
import styled from 'styled-components'
import { size } from '../../../styles/vars'
import { IAppStyledProps } from '../../../types/IAppStyledProps'

interface Props {
    title: string;
    count: number;
    icon: any;
}

const SummaryContainer = styled.div`
    width: 85%;
    
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    
    padding: 10px 20px;
    margin: 10px 10px;
    border-radius: 3px;

    text-transform:uppercase;
    text-decoration: none;
    text-transform: capitalize;
    color: ${({ theme }: IAppStyledProps) => theme.text};
    background: ${({ theme }: IAppStyledProps) => theme.darkerAccent};
    
    transition: all 0.3s ease-in-out;
   
    @media (min-width: ${size.tablet}){
        width:max-content;
    }
    
    h1 {
        margin-bottom: 0.2rem;
        font-size: 2rem;
        font-weight: 600;
        color: ${({ theme }: IAppStyledProps) => theme.text};
    }

    h3{
        font-size: 1rem;
        font-weight: 600;
        color: ${({ theme }: IAppStyledProps) => theme.text};
    }

   
`

const Summary = ({ count, icon, title }: Props) => {
    return (
        <SummaryContainer>
            <h1>
                {count} {icon}
            </h1>
            <h3>
                {title}
            </h3>
        </SummaryContainer>
    )
}

export default Summary
