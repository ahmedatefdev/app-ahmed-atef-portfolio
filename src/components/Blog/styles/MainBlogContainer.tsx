import styled from 'styled-components';
import { IAppStyledProps } from '../../../types/IAppStyledProps';

export const MainBlogContainer = styled.div`
    width: 100%;
    
    display:flex;
    flex-direction:column;
    flex-wrap:nowrap;
    justify-content:center;
    align-items:center;

    background-color: ${({ theme }: IAppStyledProps) => theme.body};
`;
