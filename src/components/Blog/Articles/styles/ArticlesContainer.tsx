import styled from 'styled-components';
import { size } from '../../../../styles/vars';

export const ArticlesContainer = styled.div`
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
 `;
