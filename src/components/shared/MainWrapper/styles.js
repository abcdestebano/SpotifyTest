import styled from 'styled-components';

export const MainWrapperContainer = styled.section`
  width: calc(100% - 100px);
  grid-area: main;
  display: grid;
  grid-template-rows: auto auto;
  padding: 25px 50px;

  @media (max-width: 576.98px) {
    width: 100vw;
    grid-area: none;
    padding: 0;
    grid-template-rows: auto;
    justify-items: center;
  }
`;