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
            return <Country key={country.numericCode} {...country} />
          })}
        </div>
      </Section>
    );
  }
}

const Section = styled.section`
  width: 100%;

  .countries-center {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    grid-gap: .5rem;
  }
`

export default Countries

