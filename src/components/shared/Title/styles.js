import styled from 'styled-components';

export const Text = styled.h1`
  font-size: 3em;
  font-weight: 700;
  color: #1d1536;
  margin: 0;
  line-height: 75%;

  @media (max-width: 576.98px) {
    line-height: unset;
  }
`;