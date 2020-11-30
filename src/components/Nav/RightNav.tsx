import React from 'react';
import styled from 'styled-components';
import Link from 'next/link'
import { Button } from 'antd';
import { HomeFilled, ProjectFilled, StarFilled } from '@ant-design/icons'
import { IAppStyledProps } from '../../types/IAppStyledProps';
import { spacing } from '../../styles/vars';
import CustomButton from '../../Styled/CustomButton';
const Ul = styled.ul<{ open: boolean }>`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  z-index:2;
  li {
    /* padding: 18px 10px; */
    color: ${({ theme }: IAppStyledProps) => theme.text};
  }
  @media (max-width: 768px) {
    flex-flow: column nowrap;
    /* background-color: #0D2538; */
    background: ${({ theme }: IAppStyledProps) => theme.body};
    position: fixed;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    top: 0;
    right: 0;
    height: 100vh;
    width: 300px;
    padding-top: 3.5rem;
    transition: transform 0.2s ease-in-out;
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
