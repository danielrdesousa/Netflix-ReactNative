import React from 'react';

import { Container, Poster, Gradient } from './styles';

import imgPoster from '../../assets/poster.jpg';

import Header from '../../components/Header';
import Hero from '../../components/Hero';
import Movies from '../../components/Movies';

const listMovies = [
  require('../../assets/movie1.jpg'),
  require('../../assets/movie2.jpg'),
  require('../../assets/movie3.jpg'),
  require('../../assets/movie2.jpg'),
  require('../../assets/movie3.jpg'),
  require('../../assets/movie4.jpg'),
  require('../../assets/movie1.jpg'),
  require('../../assets/movie2.jpg'),
];

const Home = () => {
  return (
    <Container>
      <Poster source={imgPoster}>
        <Gradient
          locations={[0, 0.2, 0.6, 0.93]}
          colors={[
            'rgba(0, 0, 0, 0.5)',
            'transparent',
            'transparent',
            'rgba(0, 0, 0, 1)',
          ]}>
          <Header />
          <Hero />
        </Gradient>
      </Poster>
      <Movies label="Recomendados" items={listMovies} />
      <Movies label="Adicionados Recentemente" items={listMovies} />
      <Movies label="Populares na Netflix" items={listMovies} />
    </Container>
  );
};

export default Home;
