import React from 'react'
import styled from 'styled-components'
import { RiMoonLine } from 'react-icons/ri'

const Navbar = () => {
  return (
    <NavWrapper>
      <NavbarSect>
        <Title>Where in the world?</Title>
        <p><RiMoonLine/> Dark Mode</p>
      </NavbarSect>
    </NavWrapper>
  )
}
const NavWrapper = styled.nav`
  border-bottom: 1px solid gray;
`
const NavbarSect = styled.section`
 display: flex;
 justify-content: space-between;
 margin: 30px;
 padding-bottom: 10px;
`

const Title = styled.h1`
  font-size: 16px;
  font-weight: 800;
`
export default Navbar
