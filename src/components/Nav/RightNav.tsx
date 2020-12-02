import React from 'react';
import styled from 'styled-components';
import Link from 'next/link'
import { Button } from 'antd';
import { HomeFilled, ProjectFilled, StarFilled } from '@ant-design/icons'
import { IAppStyledProps } from '../../types/IAppStyledProps';
import { spacing } from '../../styles/vars';
import CustomButton from '../../Styled/CustomButton';
const Ul = styled.ul<{ open: boolean }>`
  display: flex;
  flex-flow: row nowrap;

  z-index:2;
  
  list-style: none;
  
  li {
    color: ${({ theme }: IAppStyledProps) => theme.text};
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
    
    background: ${({ theme }: IAppStyledProps) => theme.body};
  }
`;


const RightNav = ({ open }) => {
  return (
    <Ul open={open}>
      <li>
        <Link href="/">
          <CustomButton size="large" icon={<HomeFilled />} type="link" >Home</CustomButton>
        </Link>
      </li>
      <li>
        <Link href="/projects">
          <CustomButton icon={<ProjectFilled />} type="link"  >Projects</CustomButton>
        </Link>
      </li>
      <li>
        <Link href="/blog">
          <CustomButton icon={<StarFilled />} type="link" >Blog</CustomButton>
        </Link>
      </li>
    </Ul >
  )
}

export default RightNav
