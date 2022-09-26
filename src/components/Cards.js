import React from 'react'
import CardItem from './CardItem'
import './Cards.css';
// import Beanstalk from ".public/images/wonder.jpg"
import dogeImage from '../img/img-9-1.jpg'

function Cards() {
  return (
    <div className='cards'>
        <h1>Categoriez </h1> 
        <div className='cards__container'>
            <div className='cards__wrapper'>
                <ul className='cards__items'>
                    <CardItem
                    img 
                    src={dogeImage}
                    text="Doge"
                    label="Memes"
                    path='WSPGallery'
                    />
                    <CardItem 
                    src="/images/wonder.jpg"
                    text="Wonderland"
                    label="Memes"
                    path='/Wonderland'
                    />
                </ul>
                <ul className='cards__items'>
                    <CardItem 
                    src="/images/bean-logo.jpeg"
                    text="Beanstalk"
                    label="Memes"
                    path='/Beanstalk'
                    />
                    <CardItem 
                    src="/public/images/zip.jpeg"
                    text="Zip Swap"
                    label="Memes"
                    path='/services'
                    />
                    <CardItem 
                    src="portfolio-website/public/images/drops.jpeg"
                    text="Drops DAO"
                    label="Memes"
                    path='/services'
                    />
                    <CardItem 
                    src="/images/pepe.jpeg"
                    text="Misc"
                    label="Memes"
                    path='/services'
                    />
                </ul>
            </div>
        </div>

    </div>
  )
}

export default Cards;