
import './layoutStyle.css'
import React from 'react';
import { Carousel } from 'antd';
import CarrouselItem from './CarrouselItem';

export default function Carrousel({ autoPlay, background }) {
  function onChange(a, b, c) {
    console.log(a, b, c);
  }
  return (
    <>
      <h1 style={{marginTop:'30px', marginLeft:'425px'}}>Personagens Aleatorios:</h1>
      <div style={{ width: '100%', display: 'flex', justifyContent: 'center', marginTop: '30px' }}>
        <Carousel
          dotPosition='left'
          autoplay={autoPlay}
          afterChange={onChange}
          style={{ display: 'flex', justifyContent: 'center', width: '600px' }}
        >
          <div>
            <CarrouselItem
              namePerson='Arch'
              life='80'
              power='29'
              agility='130'
              level={15}
            />
          </div>
          <div>
            <CarrouselItem
              namePerson='Tanker'
              life='370'
              power='45'
              agility='12'
              level={37}
            />
          </div>
          <div>
            <CarrouselItem
              namePerson='Warrior'
              life='175'
              power='120'
              agility='50'
              level={40}
            />
          </div>
          <div>
            <CarrouselItem
              namePerson='Game Master'
              life='999'
              power='999'
              agility='999'
              level={100}
            />
          </div>
        </Carousel>

      </div>
    </>
  )
}