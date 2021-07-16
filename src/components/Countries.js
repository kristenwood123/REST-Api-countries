import React from 'react'
import { useGlobalContext } from '../context'
import Country from './Country'
import styled from 'styled-components'

const Countries = () => {
  const { error, isLoaded, countries } = useGlobalContext()

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <Section>
        <div className="countries-center">
          {countries.map((country) => {
            return <Country key={country.id} {...country} />
          })}
        </div>
      </Section>
    );
  }
}

const Section = styled.section`
  width: 100%;
  

  @media screen and (min-width: 568px) {
    width: 80%;
  }


  .countries-center {
    display: grid;

     @media screen and (min-width: 568px) {
      max-width: 450px;
      margin: 0 auto;
    }
  }


`

export default Countries

