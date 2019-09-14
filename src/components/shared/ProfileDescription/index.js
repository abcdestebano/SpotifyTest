import React from 'react';
import { object } from 'prop-types';

/* COMPONENT */
import Genres from '../Genres';

/* STYLES */
import { DescriptionContainer } from './styles';

const ProfileDescription = ({ info }) => {
  return (
    <DescriptionContainer>
      <h1>{info.name}</h1>
      <Genres genres={info.genres}/>
    </DescriptionContainer>
  );
};

ProfileDescription.propTypes = {
  info: object
};

export default ProfileDescription;