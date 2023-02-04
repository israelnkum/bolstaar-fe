import React from 'react'
import Boot from '../../../assets/images/boot.png'
import MoreInfo from './more-info'
import RelatedProducts from './related-products'

function Gallery () {
  const images = [
    Boot,
    Boot,
    Boot,
    Boot
  ]

  return (
        <div>
            <div className={'flex gap-x-7 flex-col md:flex-row mt-[58px]'}>
                <div>
                    <div className={'flex flex-col md:flex-row gap-x-8 w-full md:w-[734px]'}>
                        <div className={'flex flex-row md:flex-col gap-x-8'}>
                            {
                                images.map((img, index) => (
                                    <div key={index} className={'mb-8'}>
                                        <img src={img} className={'rounded h-[60px] md:h-[96px] w-[60px] md:w-[96px]'} alt="Image"/>
                                    </div>
                                ))
                            }
                        </div>
                        <div>
                            <div>
                                <img src={Boot} className={'rounded h-[269px] md:h-[481px] w-[343px] md:w-[606px]'} alt="Image"/>
                            </div>
                        </div>
                    </div>
                    <div className={'md:hidden mt-6'}>
                        <MoreInfo/>
                    </div>
                    <RelatedProducts/>
                </div>
                <div className={'hidden md:block'}>
                    <MoreInfo/>
                </div>
            </div>
        </div>
  )
}

export default Gallery
