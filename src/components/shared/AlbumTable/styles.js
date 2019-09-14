import styled from 'styled-components';

export const TableContainer = styled.div`
  border-radius: 15px;
  padding: 30px 40px 20px 40px;
  margin: 50px 0 50px 0;
  -webkit-box-shadow: 3px 2px 54px -17px rgba(0,0,0,0.39);
  -moz-box-shadow: 3px 2px 54px -17px rgba(0,0,0,0.39);
  box-shadow: 3px 2px 54px -17px rgba(0,0,0,0.39);

  @media (max-width: 576.98px) {
    width: calc(100% - 30px);
    padding: 30px 10px 20px 10px;
    margin: 50px 0 15vh 0;
  }

  @media (min-width: 576px) and (max-width: 767.98px) {
    margin: 50px 0 15vh 0;
  }

  @media (min-width: 768px) and (max-width: 991.98px) {
    margin: 50px 0 15vh 0;
  }
`;

export const TableHeader = styled.div`
  display: grid;
  padding-bottom: 10px;
  border-bottom: 1px solid #cccccc;
  margin-bottom: 30px;
  grid-template-columns: 20% 40% 40%;
  grid-template-rows: auto;
  grid-template-areas: "image albumName trackName";

  @media (max-width: 576.98px) {
    grid-template-columns: 30% 35% 35%;
    grid-gap: 8px;

    &:first-child {
      margin-left: 15px;
    }
  }
`;

export const TableTitle = styled.h6`
  font-size: .9em;
  color: #1d1536;
  font-weight: 700;
  margin: 0;

  @media (max-width: 576.98px) {
    font-size: .72em;
  }
`;

export const TableRow = styled.div`
  margin-bottom: 20px;
  display: grid;
  grid-template-columns: 20% 40% 40%;
  grid-template-rows: auto;
  grid-template-areas: "image albumName trackName";

  & > p {
    font-size: .85em;
  }

  @media (max-width: 576.98px) {
    grid-template-columns: 30% 35% 35%;
    grid-gap: 8px;

    &:first-child {
      margin-left: 15px;
    }

    & > p {
     font-size: .75em;
    }
  }
`;
