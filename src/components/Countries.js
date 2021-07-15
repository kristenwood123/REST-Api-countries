import React from 'react'
import { useGlobalContext } from '../context'
import Country from './Country'

const Countries = () => {
  const { error, isLoaded, countries } = useGlobalContext()

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <section className='section'>
        <div className="countries-center">
          {countries.map((country) => {
            return <Country key={country.id} {...country} />
          })}
        </div>
      </section>
    );
  }
}

export default Countries

