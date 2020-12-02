import styled from "styled-components"
import { size, spacing } from "../styles/vars"
import Container from "./Container"


const CardsContainer = styled(Container)`
flex-direction:row;
flex-wrap: wrap;
background-color:transparent;
padding:${spacing.normal};

@media (max-width: ${size.tablet}){
    padding: ${spacing.extraSmall};
}
`
export default CardsContainer