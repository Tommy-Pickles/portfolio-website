import React, { useEffect } from 'react'
import CardItem from './CardItem'
import './Cards.css';
// import Beanstalk from ".public/images/wonder.jpg"
import dogeImage from '../img/img-9-1.jpg'
import wonder from '../img/wonder.jpg'
import pepe from '../img/pepe.jpg'
import drops from '../img/drops.jpg'
import zip from '../img/zip.jpg'
import bean from '../img/bean-logo.jpg'
import WSPGallery from './pages/WSPGallery';
import CardItem2 from './CardItem2';



function Cards() {
  return (
    <div className='cards'>
        <h1>Categories </h1> 
        <div className='cards__container'>
            <div className='cards__wrapper'>
                <ul className='cards__items'>
                    <CardItem 
                    src={wonder}
                    text="Memes"
                    label="Memes"
                    path='/Cards'
                    />

                </ul>
                <ul className='cards__items'>
                    <CardItem 
                    src={bean}
                    text="Tweets"
                    label="Memes"
                    path='/Beanstalk'
                    />
                    <CardItem2
                    img 
                    src={dogeImage}
                    text="Writing"
                    label="Memes"
                    path= "/Writing"

                    />
                    {/* <CardItem 
                    src={zip}
                    text="Zip Swap"
                    label="Memes"
                    path='/services'
                    /> */}
                    {/* <CardItem 
                    src={drops}
                    text="Drops DAO"
                    label="Memes"
                    path='/services'
                    /> */}

                </ul>
            </div>
        </div>

    </div>
  )
}

export default Cards;