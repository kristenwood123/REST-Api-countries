import React, { useState, useEffect } from 'react'
import { useGlobalContext } from '../context'

function Countries() {
  const {error, isLoaded, countries } = useGlobalContext()

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <ul>
        {countries.map(country => (
          <li key={country.id}>
            <h1>{country.name}</h1>
              <ul>
                <li>Population: {country.population}</li>
                <li>Region: {country.region}</li>
                <li>Capital:  {country.capital}</li>
           
              </ul>
            
          </li>
        ))}
      </ul>
    );
  }
}

export default Countries

