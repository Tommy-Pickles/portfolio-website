import React from 'react'
// import './Wonderland.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faCircleChevronLeft,
  faCircleXmark,
  faCircleChevronRight
} from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'





const Drops = ({galleryImagesD}) => {
  const [slideNumber, setSlideNumber] = useState(0)
  const [openModal, setOpenModal] = useState(false)
  // const galleryImages={galleryImages}

  const handleOpenModal = (index) => {
    setSlideNumber(index)
    setOpenModal(true)
  }

  //close modal
  const handleCloseModal = () => {
    setOpenModal(false)
  }

  //Previous Image
  const prevSlide = () => {
    slideNumber === 0 ? setSlideNumber( galleryImagesD.length - 1) : setSlideNumber(slideNumber - 1 )
  }
  //Previous Image
  const nextSlide = () => {
    slideNumber + 1 === galleryImagesD.length ? setSlideNumber(0) : setSlideNumber(slideNumber + 1)
    
  }

  return (
    <div>
      {openModal && 
        <div className='sliderWrap'>
          <FontAwesomeIcon icon={faCircleXmark} className='btnClose' onClick={handleCloseModal}/>
          <FontAwesomeIcon icon={faCircleChevronLeft} className='btnPrev' onClick={prevSlide }/>
          <FontAwesomeIcon icon={faCircleChevronRight} className='btnNext'onClick={nextSlide}/>
          <div className='fullScreenImage'>
            <img src={galleryImagesD[slideNumber].img} alt='' />
          </div>
          </div>
      }
      {/* <br />
       Current slide number : {slideNumber}
      <br />
      Total Slides: {galleryImages.length}
      <br /> <br /> */}

        <div className='galleryWrap'>
            {
                galleryImagesD && galleryImagesD.map((slide, index) => {
                    return(
                        <div 
                        className='single' 
                        key = {index}
                        onClick={ ()=> handleOpenModal(index)}
                        >
                            <img src={slide.img} alt='' />
                        </div>

                    )
                })
            }
        </div>
    </div>
  )
}

export default Drops