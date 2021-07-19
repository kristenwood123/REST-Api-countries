import React from 'react'
import { useGlobalContext } from '../context'

const DetailsPage = () => {
  const { details } = useGlobalContext()
  console.log('hello!!',details)
  const { flag, name } = details

  return (
    <div>
      <h1>{name}</h1>
      <img src={flag} alt="" />
    </div>
  )
}

export default DetailsPage
