import React, { useState, useEffect } from 'react'

function Countries() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [countries, setCountries] = useState([]);

 const url = 'https://restcountries.eu/rest/v2/all'

  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setCountries(result);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }, [])

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

