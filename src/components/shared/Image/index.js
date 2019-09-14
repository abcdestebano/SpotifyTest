import React from 'react';
import { string, bool } from 'prop-types';

/* STYLES */
import { ImageContainer } from './styles';

const Image = ({ src, height, width, borderRadius }) => (
  <ImageContainer 
    src={src}
    height={height}
    width={width}
    borderRadius={borderRadius}
  />
);

Image.propType = {
  src: string,
  height: string,
  width: string,
  borderRadius: bool
};

export default Image;