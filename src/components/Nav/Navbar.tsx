import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import { IAppStyledProps } from '../../types/IAppStyledProps';
import Burger from './Burger';
import logo from '../../img/logo.png'

const Nav = styled.nav`
  width: 100%;
  height: 55px;
  padding: 0 20px;

  display: flex;
  justify-content: space-between;

  border-bottom: 2px solid #f1f1f1;

  background: ${({ theme }: IAppStyledProps) => theme.body};
  color: ${({ theme }: IAppStyledProps) => theme.text};

  .logo {
    padding: 10px 0;

    transition: 0.2s;
    cursor: pointer;

    img{
      width:35px;
    }

    &:hover{
      filter: brightness(120%) contrast(120%) drop-shadow(0 0 1px);       
    }
  }
`

const Navbar = () => {
  return (
      <Nav>
        <Link href="/">
          <div className="logo" >
            <img src={logo} />
          </div>
        </Link>
        <Burger />
      </Nav>
  )
}

export default Navbar