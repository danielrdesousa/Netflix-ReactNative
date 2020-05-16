import React from 'react';

import {
  Container,
  Label,
  MovieScroll,
  MovieCard,
  MoviePoster,
} from './styles';

const Movies = ({ label, items }) => {
  return (
    <Container>
      <Label>{label}</Label>
      <MovieScroll horizontal>
        {items.map((movie, id) => {
          return (
            <MovieCard key={String(id)}>
              <MoviePoster resizeMode="cover" source={movie} />
            </MovieCard>
          );
        })}
      </MovieScroll>
    </Container>
  );
};

export default Movies;
