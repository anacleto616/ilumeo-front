import styled from 'styled-components';

export const Container = styled.div`
  width: 365px;
  height: 203px;
  position: absolute;
  margin: auto;
  inset: 0;
  display: flex;
  flex-direction: column;

  span {
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

    label {
      font-weight: 300;
      font-size: 0.75rem;
      color: #fff;
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
      margin-bottom: 24px;
      padding: 26px 0 8px 14px;
      border-style: none;
      border-radius: 4px;
    }

    button {
      width: 100%;
      height: 47px;
      background: linear-gradient(124.18deg, #FE8A00 22.06%, #FE8A00 81.62%);
      font-weight: 700;
      font-size: 1rem;
      border-style: none;
      border-radius: 4px;
    }
  }
`;
