import React from 'react'
import styled from 'styled-components'
import { RiMoonLine } from 'react-icons/ri'

const Navbar = ({themeToggler}) => {

  return (
    <nav>
      <NavbarSect>
        <Title>Where in the world?</Title>
        <p onClick={themeToggler}><RiMoonLine/> Dark Mode</p>
      </NavbarSect>
    </nav>
  )
}

const NavbarSect = styled.section`
 display: flex;
 justify-content: space-between;
 margin: 20px;
 padding-top: 10px;
 padding-bottom: 30px;

 p {
   cursor: pointer;
 }
`
const Title = styled.h1`
  font-size: 16px;
  font-weight: 800;
`
export default Navbar
