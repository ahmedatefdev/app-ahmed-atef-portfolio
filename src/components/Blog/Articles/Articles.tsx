import React from 'react'
import styled from 'styled-components'
import { size, spacing } from '../../../styles/vars'
import { IAppStyledProps } from '../../../types/IAppStyledProps'
import Article from './Article'
import p1 from '../../../img/crack.png'

interface Props {

}

const ArticlesContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction:row;
    flex-wrap:wrap;
    justify-content:space-around;
    align-items:center;
    margin:0;
    padding:0 10%;
    @media (max-width: ${size.tablet}){
        flex-direction:column;
        flex-wrap:nowrap;
    }
 `
// TODO: Add loading animations
const Articles = (props: Props) => {
    return (
        <ArticlesContainer>
            {Array.from({ length: 5 }).map((data, i) =>

                <Article imgUrl={p1} url="/" title="new data" />
            )
            }
        </ArticlesContainer>
    )
}

export default Articles
