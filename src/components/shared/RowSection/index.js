import React from 'react';
import { array, string, object, oneOfType } from 'prop-types';

/* COMPONENTS */
import Subtitle from '../Subtitle/index';

/* STYLES */
import { RowSectionContainer, RowContent } from './styles';

const RowSection = ({ children, subtitle }) => (
  <RowSectionContainer>
    <Subtitle subtitle={subtitle}/>
    <RowContent>
      {children}
    </RowContent>
  </RowSectionContainer>
);

RowSection.propTypes = {
  children: oneOfType([array, string, object]),
  subtitle: string
};

export default RowSection;