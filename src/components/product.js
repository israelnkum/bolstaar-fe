import React from 'react'
import PropTypes from 'prop-types'

function Product ({ item }) {
  return (
        <div className={'min-h-[249px] w-[160px] md:w-[223px] shadow-5xl rounded-2xl border'}>
            <div>
                <img src={item.image} className={'w-[160px] md:w-[223px] h-[127px] md:h-[159px] rounded-t-2xl'}
                     alt={item.name}/>
            </div>
            <div className={'px-4 py-3'}>
                <h6>{item.name}</h6>
                <div className={'flex justify-between'}>
                    <h6 className={'text-base font-semibold'}>
                        {item.price}
                        <span className={'text-gray-500 text-xs ml-2'}>per day</span>
                    </h6>
                    <span className={''}>Star</span>
                </div>
            </div>
        </div>

  )
}

Product.propTypes = {
  item: PropTypes.object.isRequired
}
export default Product
