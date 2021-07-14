import React, { useState, useEffect, useContext } from 'react'
import { useCallback } from 'react'

const url = 'https://restcountries.eu/rest/v2/all'
const AppContext = React.createContext()

const AppProvider = ({children}) => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [countries, setCountries] = useState([]);


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
    return <AppContext.Provider value ={{
      error,
      isLoading,
      countries
    }}>{children}</AppContext.Provider>
  }
  export const useGlobalContext = () => {
    return useContext(AppContext)
  }

}

export { AppContext, AppProvider }