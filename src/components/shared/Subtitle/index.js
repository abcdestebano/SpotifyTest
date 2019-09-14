import React from 'react';
import { string } from 'prop-types';

/* STYLES */
import { SubtitleContainer } from './styles';

const Subtitle = ({ subtitle }) => (
  <SubtitleContainer>{subtitle}</SubtitleContainer>
);

Subtitle.propTypes = {
  subtitle: string
};

export default Subtitle;