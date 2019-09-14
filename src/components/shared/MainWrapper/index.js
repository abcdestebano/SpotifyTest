import React from 'react';
import { string, object, array, oneOfType } from 'prop-types';

/* STYLES */
import { MainWrapperContainer } from './styles';

const MainWrapper = ({ children }) => (
  <MainWrapperContainer>
    {children}
  </MainWrapperContainer>
);

MainWrapper.propTypes = {
  children: oneOfType([ string, object, array ])
};

export default MainWrapper;