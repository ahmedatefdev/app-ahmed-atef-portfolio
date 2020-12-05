import styled from 'styled-components';
import { spacing } from '../../styles/vars';
import { IAppStyledProps } from '../../types/IAppStyledProps';

export const Ul = styled.ul<{ open: boolean; }> `
  display: flex;
  flex-flow: row nowrap;

  z-index:2;
  
  list-style: none;
  
  li {
    color: ${({ theme }: IAppStyledProps) => theme.text};

    .theme-toggle, .language-switcher, .resume{
      background-color: transparent;
      padding:0;
      padding-top:18px;
      padding-left:1.2rem;
      transition: transform 0.1s ease-in-out; 
    }
    .language-switcher{
      padding-top:10px;
    }

    .resume{
        padding-top:11px;
        a{
            color: ${({ theme }: IAppStyledProps) => theme.text};
            font-size:1rem;

            &:hover, &:active, &:focus{
                color: ${({ theme }: IAppStyledProps) => theme.accent};
            }

            @media (max-width: 768px) {
                padding-top:${spacing.normal};
                font-size:1.2rem;
            }
        }

    }
  }
  @media (max-width: 768px) {
    top: 0;
    right: 0;
    width: 300px;
    height: 100vh;
    flex-flow: column nowrap;
    padding-top: 3.5rem;
    position: fixed;
    
    transition: all 0.2s ease-in-out;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    visibility: ${({ open }) => open ? 'visible' : 'hidden'};
    /* display: ${({ open }) => open ? 'block' : 'none'}; */
    background: ${({ theme }: IAppStyledProps) => theme.body};
    .theme-toggle, .language-switcher, .resume{
      padding:0;
    }
  }
`;
