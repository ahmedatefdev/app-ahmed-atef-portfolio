import styled from 'styled-components';
import { IAppStyledProps } from '../../../types/IAppStyledProps';
import { size, spacing } from '../../../styles/vars';
import pat3 from '../../../img/pattern11.png'


export const ProjectPageContainer = styled.div`
  padding: 50px 15px 50px;
  background-color: ${({ theme }: IAppStyledProps) => theme.body};
  
  .container {
    max-width: 1150px;
    margin: 0 auto;
  }

  h1 {
    text-align: center;
    font-size: 4rem;
    font-weight: 600;
    margin-bottom: 1.5rem;
    color: ${({ theme }: IAppStyledProps) => theme.text};
  }
  
  p {
    display: inline-block;
    border-radius: 3px;
    color: ${({ theme }: IAppStyledProps) => theme.text};
    font-size: 1.5rem;
    line-height: 1.7;
    text-decoration: none;
    margin-bottom: 1.8rem;
  }
  .md-description{
    padding:${spacing.small};
    border-radius: 5px;
    text-align:center;
    
    background-blend-mode: multiply;
    background-image: url(${pat3}) ;
    background-color: ${({ theme }: IAppStyledProps) => theme.darkerAccent} ;
    overflow:hidden;
    
    filter:brightness(110%) contrast(110%);
    filter: drop-shadow(0px 0px 2px ${({ theme }: IAppStyledProps) => theme.accent});
  }


  
  @media (max-width: ${size.tablet}){ 
      padding-top: 100px;
  }

  @media only screen and (max-width: 960px) {
    & h1 {
      font-size: 3rem;
      text-align: center;
    }

    & p {
      font-size: 1rem;
    }
  }
`;
