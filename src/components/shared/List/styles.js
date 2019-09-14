import styled from 'styled-components';

export const Ul = styled.ul`
  display: flex;
  list-style: none;
  margin: 20px 0 0 50px;

  & > li:first-child {
    margin-left: 0;
  }

  @media (max-width: 576.98px) {
    width: 50%;
    margin: 20px 0 0 0;
  }
`;

export const Li = styled.li`
  font-size: .84em;
  font-weight: 700;
  margin-left: 3em;
`;