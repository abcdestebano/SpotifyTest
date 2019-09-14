import styled from 'styled-components';

export const SideSectionContainer = styled.section`
  width: calc(30% - 100px);
  position: fixed;
  top: 0;
  right: 0;
  height: 100vh;
  background-color: #1e1638;
  grid-area: sidesection-start / sidesection-start / sidesection-end / sidesection-end;
  padding: 0 50px;
  

  @media (max-width: 991.98px) {
    width: 100%;
    bottom: 0;
    left: 0;
    top: unset;
    height: 10vh;
    padding: 0;
  }
`;

export const SideSectionContent = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;

  & > p {
    text-align: center;
    font-size: .9em;
    color: white;
  }
`;