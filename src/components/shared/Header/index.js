import React from 'react';

/* COMPONENTS */
import Title from '../Title/index';
import Nav from '../Nav/index';

/* STYLES */
import { HeaderContainer } from './styles';

/* CONSTANTS */
import constants from '../../../constants/UIContants.json';

const Header = () => (
  <HeaderContainer>
    <Title>Explora</Title>
    <Nav content={constants.navigation}/>
  </HeaderContainer>
);

export default Header;