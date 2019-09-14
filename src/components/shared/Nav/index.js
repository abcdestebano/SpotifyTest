import React from 'react';
import { array } from 'prop-types';

/* COMPONENTS */
import List from '../List/index';

/* STYLES */
import { NavContainer } from './styles';

const Nav = ({ content }) => (
  <NavContainer>
    <List content={content}/>
  </NavContainer>
);

Nav.propTypes = {
  content: array
};

export default Nav;