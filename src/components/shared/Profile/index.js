import React from 'react';
import { object } from 'prop-types';

/* COMPONENTS */
import Image from '../Image';
import ProfileDescription from '../ProfileDescription';

/* STYLES */
import { ProfileContainer } from './styles';

const Profile = ({ info }) => {
  return (
    <ProfileContainer>
      <Image src={info.images[0].url} height="150px" width="150px" borderRadius/>
      <ProfileDescription info={info}/>
    </ProfileContainer>
  );
};

Profile.propTypes = {
  info: object
};

export default Profile;