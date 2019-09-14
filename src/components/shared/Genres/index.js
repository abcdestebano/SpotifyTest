import React from 'react';
import { array } from 'prop-types';

/* STYLES */
import { GenresContainer } from './styles';

const Genres = ({ genres }) => {
  return (
    <GenresContainer>
      <h4>Generos</h4>
      <ul>
        {
          genres.map(genre => {
            return <li key={genre}>{ genre }</li>
          })
        }
      </ul>
    </GenresContainer>
  );
};

Genres.propTypes = {
  genres: array
};

export default Genres;