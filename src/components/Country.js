import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Country = ({name, population, flag, region, capital}) => {
  return (
    <Card>
      <div className="country">
        <img src={flag} alt="" />
        <h1>{name}</h1>
        <ul>
          <li>Population: {population}</li>
          <li>Region: {region}</li>
          <li>Capital: {capital}</li>
        </ul>
      </div>
    </Card>
  )
}

const Card = styled.article`
  margin: 40px;
  
  .country {
    background-color: white;

  img {
    width: 100%;
  }
`
export default Country
