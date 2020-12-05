import React from 'react'
import styled from 'styled-components'
import { size } from '../styles/vars'
import { IAppStyledProps } from '../types/IAppStyledProps'

interface Props {
    imageUrl?: string
    title?: string
}

const InfoCardContainer = styled.div`
    box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.3);
    margin: 10px;
    overflow: hidden;
    position: relative;
    width: 20em;
    height:12em;
    border-radius: 5px;
    cursor:pointer;
    
    @media  (min-width: ${size.tablet}){
        margin-bottom: 20px;
        width: 25em;
        height:15em;
    }
    
    &::after {
        content: "";
        position: absolute;
        display: block;
        background: ${({ theme }: IAppStyledProps) => theme.darkerAccent};
        opacity: 0.8;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        transform: scale(2) translateX(52%) translateY(52%) rotate(-28deg);
        transition: transform 2s cubic-bezier(0.2, 1, 0.3, 1);
        filter: drop-shadow(0px 0px 1px ${({ theme }: IAppStyledProps) => theme.accent});
    }

    &:hover:after {
        transform: scale(2) translateX(0) translateY(0) rotate(-28deg);
    }

    &:hover .image {
        transform: scale(1.2);
    }

    &:hover .info {
        opacity: 1;
        transform: translateY(0);
    }
`

const Image = styled.div`
    height: 100%;
    transform: translateZ(0);
    display: block;
    transition: transform 750ms cubic-bezier(0.2, 1, 0.3, 1);
    img {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        line-height: 0;
    }

`
const Info = styled.div`
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        opacity: 0;
        text-align: center;
        z-index: 2;
        transform: translateY(120%);
        transition: opacity 500ms cubic-bezier(0.2, 1, 0.3, 1),
        transform 500ms cubic-bezier(0.2, 1, 0.3, 1);

    .info-wrap {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        position: absolute;
        width: 100%;
        top: 50%;
        transform: translateY(-50%);

        a {
            text-decoration: none;
            width: 100%;
        }

        .title {
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 1.3em;
            min-height: 4rem;
            height:fit-content;
            width: 75%;
            border-radius: 3px;
            padding: 0 1rem 0;
            margin: 0;
            background-color: ${({ theme }: IAppStyledProps) => theme.darkerAccent};
            color: ${({ theme }: IAppStyledProps) => theme.text};
        }   
    }
  
`
const BottomTitle = styled.h2`
    display:none;
    text-align:center;
    color: ${({ theme }: IAppStyledProps) => theme.text};
    z-index:1;
    padding:0;
    margin:0;
    margin-top:5px;

    @media (max-width: ${size.tablet}){
        display: block;
    }
`
const OuterContainer = styled.div`
    display: flex;
    align-items:center;
    justify-content:center;
    flex-direction:column;
    flex-wrap:nowrap;
    @media (max-width: ${size.tablet}){
        background-color: rgba(56, 148, 130, 0.28);
        padding: 5px;
        border-radius: 5px;
        margin-top:10px;
        margin-bottom:10px;
    }
`
const InfoCard = ({ imageUrl, title }: Props) => {
    return (
        <OuterContainer>
            <InfoCardContainer className="info-card">
                <Image className="image">
                    <img src={imageUrl || "https://cdn.lowgif.com/full/506a8fa75e627283-carsten-sachse-webdesign-blog-css-preloader.gif"} alt="images" />
                </Image>
                <Info className="info">
                    <div className="info-wrap">
                        <h2 className="title">{title}</h2>
                    </div>
                </Info>
            </InfoCardContainer>
            <BottomTitle className="bottom-title">{title || "loading..."}</BottomTitle>
        </OuterContainer>
    )
}

export default InfoCard
