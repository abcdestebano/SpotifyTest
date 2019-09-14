import styled from 'styled-components';

export const ProfileContainer = styled.div`
  display: grid;
  grid-template-columns: 20% 80%;
  align-items: center;
  margin-top: 50px;

  & > img {
    border: 7px solid #281d4b;
    box-shadow: 0px 0px 29px 0px rgba(40,29,75,0.4);
  }

  @media (max-width: 576.98px) {
    width: calc(100% - 60px);
    padding: 0 30px;
    grid-template-columns: 100%;

    & > img {
      justify-self: center;
    }
  }

  @media (min-width: 576px) and (max-width: 767.98px) {
    grid-template-columns: 37% 63%;
  }

  @media (min-width: 768px) and (max-width: 991.98px) {
    grid-template-columns: 37% 63%;
  }

  @media (min-width: 992px) and (max-width: 1199.98px) {
    grid-template-columns: 37% 63%;
  }
`;