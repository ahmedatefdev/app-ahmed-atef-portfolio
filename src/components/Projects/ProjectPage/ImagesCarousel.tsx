import { Carousel } from 'antd';
import React from 'react';
import styled from 'styled-components';
import { size } from '../../../styles/vars';
import { IAppStyledProps } from '../../../types/IAppStyledProps';

interface Props {
  imagesURLS: string[]
}
const ImagesCarouselContainer = styled.div`
  width: 100%;
  margin-bottom: 3rem;
  border-radius:10px;
  overflow:hidden;
  img {
    width: 100%;
    height: 600px;

    background-size: cover ;
    background-position: top center ;
    background-repeat: no-repeat ;

    object-fit: cover;
    object-position: center center;

    @media (max-width: ${size.tablet}){
      height: 400px;
    }
  }
  .dot-changer{
    background-color: rgba(0,0,0,.3);
    border-radius: 5px;
    height:fit-content;
    padding:2px;
    display:flex;
    align-items:center;
    justify-content:center;
  }

`;
const ImagesCarousel = ({ imagesURLS }: Props) => {
  return (
    <ImagesCarouselContainer >
      <Carousel autoplay arrows={true} draggable dots={{ className: "dot-changer" }} nextArrow={<h1>Next</h1>} prevArrow={<div>{"<<<<>>>>>"}</div>}>
        {imagesURLS.map((url, i) => <img src={url} key={i} />)}
      </Carousel>
    </ImagesCarouselContainer>
  )
}

export default ImagesCarousel