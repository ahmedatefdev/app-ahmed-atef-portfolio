import { Button } from "antd"
import styled from "styled-components"
import { spacing } from "../styles/vars"
import { IAppStyledProps } from "../types/IAppStyledProps"

const CustomButton = styled(Button)`
    background-color:transparent;
    border:0;
    color: ${({ theme }: IAppStyledProps) => theme.text};
    padding:0;
    padding-top:15px;
    padding-left:1.2rem;
    transition: transform 0.1s ease-in-out;
    &:hover, &:active, &:visited, &:focus{
        color: ${({ theme }: IAppStyledProps) => theme.accent};
    }

    @media (max-width: 768px) {
       padding-top:${spacing.normal};
       font-size:1.2rem;
    }
`
export default CustomButton