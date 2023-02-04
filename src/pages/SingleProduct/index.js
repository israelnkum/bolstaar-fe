import React, { useEffect } from 'react'
import Details from './details'
import { useOutletContext } from 'react-router-dom'

function SingleProduct () {
  const { setTitle } = useOutletContext()

  useEffect(() => {
    setTitle('')
  }, [])

  return (
      <Details/>
  )
}

export default SingleProduct
