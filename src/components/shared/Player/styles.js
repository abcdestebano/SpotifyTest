import styled from 'styled-components';

export const PlayerContainer = styled.div`
  width: 100%;
  height: 15vh;
  background-color: #281d4b;
  position: absolute;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: space-around;
  align-items: center;

  @media (max-width: 576.98px) {
    
  }
`;

export const PlayerContent = styled.div`
  & > h3 {
    color: white;
    font-weight: 700;
    font-size: 1.2em;
    margin: 0 0 7px 0;
  }

  & > p {
    color: white;
    margin: 0;
    opacity: .7;
    font-size: .8em;
  }
`;

export const PlayerButton = styled.button`
  width: 50px;
  height: 50px;
  border-radius: 50%;

  @media (max-width:  991.98px) {
    margin: 0;
  }
`