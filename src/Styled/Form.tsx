import styled, { keyframes } from "styled-components"
import { size, spacing } from "../styles/vars"
import { IAppStyledProps } from "../types/IAppStyledProps"

export const errorAnimation = keyframes`
/* 0 & 100% might not be needed */
  25% {
    filter: brightness(100%) contrast(100%) drop-shadow(0px 2px 1px #E22440);

  }
  50% {
    filter: brightness(200%) contrast(200%) drop-shadow(0px 2px 1px #E22440);

  }
  75% {
    filter: brightness(300%) contrast(300%) drop-shadow(0px 2px 1px #E22440);
  }
  
`

export const FormError = styled.div<{ visible: boolean }>`
    /* color:  ${({ theme }: IAppStyledProps) => theme.text}; */
    color:#ffb1bd;
    font-style: italic;
    display: ${({ visible }) => visible ? "block" : "none"};
    margin:  0 0 0 ${spacing.extraSmall};
    text-align:left;
    font-size: 15px;
    /* filter: brightness(300%) contrast(150%); */
    /* animation: ${errorAnimation} 1.5s linear infinite; */
`
export const RequiredStar = styled.span`
    color: lightcoral;
    &:before{
        content:"*"
    }
`

export const FormGroup = styled.div`
        position: relative;
        padding: 20px 0;
        width: 400px;
        max-width: 100%;

        @media (max-width: ${size.tablet}) {
            width: 300px;
        }

        input,
        textarea {
            background-color: transparent;
            border: none;
            border-bottom: 1px solid #cfcfcf;
            color:  ${({ theme }: IAppStyledProps) => theme.text};
            font-size: 16px;
            padding: 10px 0;
            display: block;
            width: 100%;
        }

        label {
            color: #cfcfcf;
            font-size: 16px;
            font-weight: 100;
            position: absolute;
            pointer-events: none;
            top: 0;
            transform: translateY(30px);
            transition: all 0.2s ease-in-out;
            left: 0px;
        }

        input:valid,
        input:focus,
        input:not(:empty){
            border-bottom-color:  ${({ theme }: IAppStyledProps) => theme.accent};
            outline: none;
        }

        textarea:valid,
        textarea:focus {
            border-bottom-color:  ${({ theme }: IAppStyledProps) => theme.accent};
            outline: none;
        }

        input:valid + label,
        input:focus + label,
        input:not(:empty) + label {
            color:  ${({ theme }: IAppStyledProps) => theme.text};
            font-size: 14px;
            transform: translateY(0);
        }

        textarea:valid + label,
        textarea:focus + label {
            color:  ${({ theme }: IAppStyledProps) => theme.text};
            font-size: 14px;
            transform: translateY(0);
        }
`