import React, { useEffect } from 'react'
import Categories from '../SingleProduct/details/related-products/categories'
import Product from '../../components/product'
import Boot from '../../assets/images/boot.png'
import { Link, useOutletContext } from 'react-router-dom'

function Index () {
  const items = [
    {
      name: 'Fertilizer',
      price: 'GHC 50',
      image: Boot
    },
    {
      name: 'Wheel barrow',
      price: 'GHC 50',
      image: Boot
    },
    {
      name: 'Water Pump',
      price: 'GHC 50',
      image: Boot
    },
    {
      name: 'Water Pump',
      price: 'GHC 50',
      image: Boot
    },
    {
      name: 'Fertilizer',
      price: 'GHC 50',
      image: Boot
    },
    {
      name: 'Fertilizer',
      price: 'GHC 50',
      image: Boot
    }
  ]

  const { setTitle } = useOutletContext()

  useEffect(() => {
    setTitle('Explore what we have to offer')
  }, [])

  return (
        <div>
            <div className={'overflow-auto mt-6'}>
                <Categories/>
            </div>
            <div className={'flex flex-wrap justify-center md:justify-start gap-x-[26px] gap-y-6 mt-6'}>
                {
                    items.map((item, index) => (
                        <Link to={'wallington-boots'} key={index}>
                            <Product item={item}/>
                        </Link>
                    ))
                }
            </div>
        </div>
  )
}

export default Index
