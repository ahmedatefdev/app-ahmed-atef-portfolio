import styled from 'styled-components';
import { size } from '../../../../styles/vars';
import { IAppStyledProps } from '../../../../types/IAppStyledProps';

export const SummaryContainer = styled.div<{ loading: number; }>`
    width: 85%;
    
    display: flex;
    flex-direction: column;
    justify-content: ${({ loading }) => loading ? "center" : "flex-start"};
    align-items: ${({ loading }) => loading ? "center" :  "flex-start"};
    
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

    .spinner {
        display:flex;
        align-items:center;
        justify-content:center;
        width: 40px;
        height: 40px;
        margin: 10px 10px;
        background-color: #333;

        border-radius: 100%;  
        -webkit-animation: sk-scaleout 1.0s infinite ease-in-out;
        animation: sk-scaleout 1.0s infinite ease-in-out;
    }

    @-webkit-keyframes sk-scaleout {
        0% { -webkit-transform: scale(0) }
        100% {
            -webkit-transform: scale(1.0);
            opacity: 0;
        }
    }

    @keyframes sk-scaleout {
        0% { 
            -webkit-transform: scale(0);
            transform: scale(0);
        } 100% {
            -webkit-transform: scale(1.0);
            transform: scale(1.0);
            opacity: 0;
        }
    } 
`;
