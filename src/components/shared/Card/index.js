import React, { Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import { string, array } from 'prop-types';

/* COMPONENTS */
import Image from '../Image/index';

/* STYLES */
import { CardContainer, CardTitle, CardArtist } from './styles';

const Card = ({ src, name, artists, albumId }) => (
  <CardContainer>
    <Image
      src={src}
      width="150px"
      height="150px"
    />
    <Fragment>
      {
        artists.map((artist, index) => {
          return (
            <CardArtist key={index}>
              <NavLink
                to={{ pathname: `/artista/${artist.id}`, state: { albumId } }}>
                  {artist.name}
              </NavLink>
            </CardArtist>
          )
        })
      }
    </Fragment>
    <CardTitle>{name}</CardTitle>
  </CardContainer>
);

Card.propTypes = {
  src: string,
  name: string,
  artists: array,
  albumId: string
};

export default Card;