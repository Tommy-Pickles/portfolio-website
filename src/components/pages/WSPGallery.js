import React from 'react'
import { useState } from 'react'
import './wspGallery.css'




export const WSPGallery = ({galleryImages}) => {
    const [slideNumber, setSlideNumber] = useState(0)
    const [openModal, setOpenModal] = useState(false)
    // const galleryImages={galleryImages}
    


  return (
    
    <div>
        <div> Hi </div>
        <div className='galleryWrap'>
            {
                galleryImages && galleryImages.map((slide, index) => {
                    return(
                        <div className='single'>
                            <img src={slide.img} alt='' />
                        </div>

                    )
                })
            }
        </div>
        {/* <WSPGallery
        galleryImages={galleryImages}
      /> */}

    </div>
  )
}

export default WSPGallery;


