import styled from 'styled-components';

export const RowSectionContainer = styled.section`
  margin-bottom: 30px;

  @media (max-width: 576.98px) {
  }
`;

export const RowContent = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 4fr);
  margin: 40px 0 0 0;

  @media (max-width: 576.98px) {
    grid-template-columns: 100%;
  }

  @media (min-width: 576px) and (max-width: 767.98px) {
    grid-template-columns: 50% 50%;
    justify-items: center;
  }

  @media (min-width: 768px) and (max-width: 991.98px) {
    grid-template-columns: repeat(3, 1fr);
    margin-bottom: 15vh;
    justify-items: center;
  }

  @media (min-width: 992px) and (max-width: 1199.98px) {
    grid-template-columns: repeat(3, 1fr);
    justify-items: center;
  }
`;