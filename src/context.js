import React, { useState, useEffect, useContext } from 'react'


const url = 'https://restcountries.eu/rest/v2/all'
const AppContext = React.createContext()

const AppProvider = ({children}) => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [countries, setCountries] = useState([]);
  const [details, setDetails] = useState([])


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

  // grabbing the country for the details page
    const getCountry = (numericCode) => {
      const detailCountry = countries.find(country => country.numericCode === numericCode)
      console.log(detailCountry);
      setDetails(detailCountry)
    }

    return <AppContext.Provider value={{
      error,
      isLoaded,
      countries,
      details,
      getCountry
    }}>{children}</AppContext.Provider>
  }

  export const useGlobalContext = () => {
    return useContext(AppContext)
}

export { AppContext, AppProvider }