import styled from 'styled-components';

export const ImageContainer = styled.img.attrs(({ src }) => ({ src }))`
  width: ${({ width }) => width };
  height: ${({ height }) => height};
  border-radius: ${({ borderRadius }) => borderRadius ? '50%' : '0' }
`;