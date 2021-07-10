import React from 'react'
import styled from 'styled-components'
import { AiOutlineSearch } from 'react-icons/ai'

const Layout = () => {
  return (
    <LayoutWrap>
      <div className="input-wrapper">
        <button type='submit'><AiOutlineSearch className='search'/></button>
        <input type="text" placeholder= 'Search for a country'/>
      </div>
    </LayoutWrap>
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
   box-shadow: 0 2px 4px #F0F0F0;
   border: none;
   height: 50px;
   text-align: left;
   color: white;
 }

 button {
   background-color: pink;
   border: none;
   height: 50px;
    padding-left: 30px;
 }
`
export default Layout
