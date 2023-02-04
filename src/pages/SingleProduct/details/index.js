import React from 'react'
import Gallery from './gallery'

function Details () {
  return (
        <div className={'flex flex-col md:flex-row gap-x-7'}>
            <Gallery/>
            {/* <ProductInfo/> */}
        </div>
  )
}

export default Details
