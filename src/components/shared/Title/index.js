import React from 'react';
import { string } from 'prop-types';

/* STYLES */
import { Text } from './styles';

const Title = ({ children }) => (
  <Text>{ children }</Text>
);

Title.propTypes = {
  children: string
};

export default Title;