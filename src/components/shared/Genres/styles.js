import styled from 'styled-components';

export const GenresContainer = styled.div`
  & > h4 {
    margin: 0 0 15px 0;
  }

  & > ul {
    width: auto;
    display: flex;
    margin: 0;
    padding: 0;
    flex-wrap: wrap;

    & > li {
      list-style: none;
      font-size: .85em;
      margin: 0 20px 10px 0;
      background-color: rgba(227,43,113,1);
      color: white;
      padding: 2px 10px 2px 10px;
      border-radius: 15px;
    }
  }
`;