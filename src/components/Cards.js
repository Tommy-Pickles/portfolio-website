import React from 'react'
import CardItem from './CardItem'
import './Cards.css';
// import Beanstalk from ".public/images/wonder.jpg"
import dogeImage from '../img/img-9-1.jpg'
import wonder from '../img/wonder.jpg'
import pepe from '../img/pepe.jpg'
import drops from '../img/drops.jpg'
import zip from '../img/zip.jpg'
import bean from '../img/bean-logo.jpg'


function Cards() {
  return (
    <div className='cards'>
        <h1>Categories </h1> 
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
                    src={wonder}
                    text="Wonderland"
                    label="Memes"
                    path='/Wonderland'
                    />
                </ul>
                <ul className='cards__items'>
                    <CardItem 
                    src={bean}
                    text="Beanstalk"
                    label="Memes"
                    path='/Beanstalk'
                    />
                    <CardItem 
                    src={zip}
                    text="Zip Swap"
                    label="Memes"
                    path='/services'
                    />
                    <CardItem 
                    src={drops}
                    text="Drops DAO"
                    label="Memes"
                    path='/services'
                    />
                    <CardItem 
                    src={pepe}
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