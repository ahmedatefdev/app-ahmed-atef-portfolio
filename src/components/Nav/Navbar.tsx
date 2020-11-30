import React from 'react';
import styled from 'styled-components';
import { IAppStyledProps } from '../../types/IAppStyledProps';
import Burger from './Burger';
import logo from '../../img/logo.png'
const Nav = styled.nav`
  width: 100%;
  height: 55px;
  border-bottom: 2px solid #f1f1f1;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  background: ${({ theme }: IAppStyledProps) => theme.body};
  color: ${({ theme }: IAppStyledProps) => theme.text};
  .logo {
    padding: 10px 0;

    img{
      width:35px;
    }
  }
`

const Navbar = () => {
  return (
    <Nav>
      <div className="logo">
        <img src={logo} />
      </div>
      <Burger />
    </Nav>
  )
}

export default Navbar