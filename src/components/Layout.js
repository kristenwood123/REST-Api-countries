import React from 'react'
import styled from 'styled-components'
import { AiOutlineSearch } from 'react-icons/ai'
import Countries from './Countries'

const Layout = () => {
  return (
    <>
    <LayoutWrap>
      <div className="input-wrapper">
        <button type='submit'><AiOutlineSearch className='search'/></button>
        <input type="text" placeholder= 'Search for a country'/>
      </div>
    </LayoutWrap>
    <Countries/>
    </>
  )
}

const LayoutWrap = styled.div`
 height: 100%;

  .input-wrapper {
    display: flex;
    justify-content: center;
  }

  .search {
    font-size: 20px;
    color: #A9A9A9;
    margin-right: 30px;
  }

 input {
   border: none;
   height: 50px;
   text-align: left;
   color: white;
   width: 80%;
 }

 button {
   border: none;
   height: 50px;
    padding-left: 30px;
    background-color: white;
 }
`
export default Layout
