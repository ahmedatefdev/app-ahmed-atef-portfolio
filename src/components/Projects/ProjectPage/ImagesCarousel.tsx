import { Carousel } from 'antd';
import React from 'react';
import styled from 'styled-components';
import { size } from '../../../styles/vars';

interface Props {
    imagesURLS: string[]
}
const ImagesCarouselContainer = styled.div`
  width: 100%;
  margin-bottom: 3rem;

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

`;
const ImagesCarousel = ({ imagesURLS }: Props) => {
    return (
        <ImagesCarouselContainer >
            <Carousel autoplay>
                {imagesURLS.map((url, i) => <img src={url} key={i} />)}
            </Carousel>
        </ImagesCarouselContainer>
    )
}

export default ImagesCarousel