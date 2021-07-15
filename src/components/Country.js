import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Country = ({name, population, flag, region, capital}) => {
  return (
    <Card>
      <div className="country">
        <img src={flag} alt="" />
        <div className="text-container">
          <h1>{name}</h1>
          <ul>
            <li><b>Population:</b> {population}</li>
            <li><b>Region:</b> {region}</li>
            <li><b>Capital:</b> {capital}</li>
          </ul>
        </div>
      </div>
    </Card>
  )
}

const Card = styled.article`
  margin: 40px;
  
  .country {
    background-color: white;
  }

  .text-container {
    margin: 2rem;
  }

  h1 {
      margin-bottom: 15px;
    }

  img {
    width: 100%;
  }

  ul {
    list-style-type: none;
  }
`
export default Country
