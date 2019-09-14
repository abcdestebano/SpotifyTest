import styled from 'styled-components';

export const TrackListContainer = styled.div`
  width: 100%;
  height: 85vh;
  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: auto;
  overflow-y: scroll;
  
  & > div:last-child {
    margin-bottom: 40px;
  }
`;

export const TrackListContent = styled.div`
  width: 100%;
  margin-top: 20px;
  display: grid;
  grid-template-columns: 50% 50%;

  & > p {
    color: white;
    font-size: .8em;
    opacity: .8;
    margin: 0;
  }

  & > p:last-child {
    justify-self: end;
  }
`;