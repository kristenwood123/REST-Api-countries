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
            <li><b>Population:</b> {population.toLocaleString()}</li>
            <li><b>Region:</b> {region}</li>
            <li><b>Capital:</b> {capital}</li>
          </ul>
        </div>
      </div>
    </Card>
  )
}

const Card = styled.article`
  margin: 2rem;
  
  .country {
    background-color: white;
    border-radius: 6px;
     box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
  }

  .text-container {
    margin: 2rem;
    padding-bottom: 2.5rem;
  }

  h1 {
      margin-bottom: 15px;
    }

  img {
    width: 100%;
    border-radius: 6px 6px 0 0;
  }

  ul {
    list-style-type: none;
  }
`
export default Country