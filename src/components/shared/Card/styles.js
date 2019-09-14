import styled from 'styled-components';

export const CardContainer = styled.div`
  width: 200px;
  margin-bottom: 50px;

  & > p:first-of-type {
    margin-top: 8px;
  }

  @media (max-width: 576.98px) {
  }
`;

export const CardTitle = styled.h6`
  font-size: .8em;
  font-weight: 700;
  color: #1d1536;
  margin: 10px 0 0 0;
`;

export const CardArtist = styled.p`
  font-size: .7em;
  font-weight: 500;
  margin: 0;
  color: #251f39;

  & > a {
    /* text-decoration: none; */
    text-decoration-style: wavy;
    text-decoration-color: #b3b3b3;
    color: #1d1536;
  }
`