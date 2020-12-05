import styled from 'styled-components';
import { size, spacing } from '../../styles/vars';
import { IAppStyledProps } from '../../types/IAppStyledProps';
import pattern from '../../img/pattern11.png';

export const ContactFormContainer = styled.div`
        display: flex;
        flex-direction: column;
        justify-content: center;
        text-align: center;
        padding: 20px 40px;
        border-radius: 5px;
        background-blend-mode: multiply;
        background-image: url(${pattern});
        background-color: ${({ theme }: IAppStyledProps) => theme.darkerAccent};

        box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.3);
        @media (max-width: ${size.tablet}) {
            padding: 20px ${spacing.extraSmall};
        }

        p {
            font-size: 1.3em;
        }



    button,
    input[type="reset"] {
        font-size: 16px;
        padding: 15px 0;
        margin-top: 15px;
        width: 100%;
        border: 2px solid  ${({ theme }: IAppStyledProps) => theme.accent};
        border-radius: 2px;
        box-sizing: border-box;

        cursor: pointer;
        background-color:  ${({ theme }: IAppStyledProps) => theme.accent};
        color:  ${({ theme }: IAppStyledProps) => theme.text};
        
        transition: all 0.2s ease-in-out;

        &:hover {
            filter:brightness(120%) contrast(120%);
        }
    }
`;
