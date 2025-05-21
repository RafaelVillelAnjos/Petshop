import React from 'react'; 
import Carousel from 'react-bootstrap/Carousel';
import Banner1 from '../imagens/Banner.jpg';
import Banner2 from '../imagens/Banner01.jpg';
import Banner3 from '../imagens/BanhoTosa2.png';

function Banner(){
  return(
<Carousel className='carrossel'>
      <Carousel.Item>
        <img src={Banner1} alt='Imagem de um cachorro golden' className="imgCarrossel"/>
      </Carousel.Item>
      <Carousel.Item>
        <img src={Banner2} alt="Imagem de um cachorro labrador" className="imgCarrossel"/>
      </Carousel.Item>
      <Carousel.Item>
        <img src={Banner3} alt='Imagem de um cachorro tomando banho'className="imgCarrossel"/>
      </Carousel.Item>
    </Carousel>
  );
};

export default Banner