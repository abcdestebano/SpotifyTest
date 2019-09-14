import styled from 'styled-components';

export const HeaderContainer = styled.header`
  width: calc(100% - 100px);
  display: flex;
  align-items: flex-end;
  grid-area: header;
  padding: 0 50px;

  @media (max-width: 576.98px) {
    width: 100%;
    grid-area: unset;
    flex-direction: column;
    padding: 20px;
    align-items: unset;
  }

  @media (min-width: 576px) and (max-width: 767.98px) {
    padding: 50px 50px 0 50px;
  }

  @media (min-width: 768px) and (max-width: 991.98px) {
    padding: 50px 50px 0 50px;
  }
`;