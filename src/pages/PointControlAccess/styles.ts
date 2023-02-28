import styled from 'styled-components';

export const Container = styled.div`
  width: 365px;
  height: 203px;
  position: absolute;
  margin: auto;
  inset: 0;
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 399px) {
    width: 300px;
  }

  @media screen and (max-width: 325px) {
    width: 280px;
  }

  @media screen and (max-width: 308px) {
    width: 255px;
  }

  h3 {
    font-size: 1.31rem;
    color: #CFCFCF;
    font-weight: 400;
    margin-bottom: 46px;

    b {
      font-weight: 800;
    }
  }

  form {
    display: flex;
    flex-direction: column;
    position: relative;
    color: #fff;

    label {
      font-weight: 300;
      font-size: 0.75rem;
      position: absolute;
      margin: 7px 0 38px 17px;
    }

    input {
      background-color: #1E2733;
      font-size: 1.35rem;
      font-weight: 600;
      color: #fff;
      width: 100%;
      height: 60px;
      padding: 26px 0 8px 14px;
      border-style: none;
      border-radius: 4px;
    }

    p {
      font-size: 0.75rem;
      color: #f00;
      margin-top: 5px;
      font-weight: 700;
    }

    button {
      width: 100%;
      height: 47px;
      margin-top: 24px;
      background: linear-gradient(124.18deg, #FE8A00 22.06%, #FE8A00 81.62%);
      font-weight: 700;
      font-size: 1rem;
      color: #1E2733;
      border-style: none;
      border-radius: 4px;
      cursor: pointer;
    }
  }
`;
