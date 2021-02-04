import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='container2'>
      <div className="dots"><span /><span /><span /><span /><span /><span /></div>
      <div className='cards'>
        <h1>Work</h1>
        <div className='cards__container'>
          <div className='cards__wrapper'>
            <ul className='cards__items'>
              <CardItem
                src='images/img-3.jpg'
                text='Set Sail in the Atlantic Ocean visiting Uncharted Waters'
                label='Mystery'
                path='/work'
              />
              <CardItem
                src='images/img-4.jpg'
                text='Experience Football on Top of the Himilayan Mountains'
                label='Adventure'
                path='/work'
              />
              <CardItem
                src='images/img-8.jpg'
                text='Ride through the Sahara Desert on a guided camel tour'
                label='Adrenaline'
                path='/contact'
              />
              <CardItem
                src='images/img-8.jpg'
                text='Ride through the Sahara Desert on a guided camel tour'
                label='Adrenaline'
                path='/contact'
              />
              <CardItem
                src='images/img-8.jpg'
                text='Ride through the Sahara Desert on a guided camel tour'
                label='Adrenaline'
                path='/contact'
              />
              <CardItem
                src='images/img-8.jpg'
                text='Ride through the Sahara Desert on a guided camel tour'
                label='Adrenaline'
                path='/contact'
              />
              <CardItem
                src='images/img-8.jpg'
                text='Ride through the Sahara Desert on a guided camel tour'
                label='Adrenaline'
                path='/contact'
              />
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;
