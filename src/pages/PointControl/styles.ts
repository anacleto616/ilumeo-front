import styled from 'styled-components';

export const Container = styled.div`
  width: 365px;
  margin: 85px auto 0;
  font-weight: 700;
  font-size: 0.75rem;
  color: #F5F5F5;

  @media screen and (max-width: 399px) {
    width: 300px;
  }

  @media screen and (max-width: 325px) {
    width: 280px;
  }

  @media screen and (max-width: 308px) {
    width: 260px;
  }

  header {
    display: flex;
    flex-direction: column;

    .clock {
      display: flex;
      justify-content: space-between;
      margin-bottom: 10px;

      .codeName {
        display: flex;
        flex-direction: column;
        text-align: right;

        .codeName__name {
          font-weight: 300;
          color: rgba(207, 207, 207, 0.69);
        }
      }
    }

    .hour {
      display: flex;
      flex-direction: column;

      .hour__time {
        font-size: 1.45rem;
      }
    }
  }

  button {
    width: 100%;
    height: 47px;
    padding: 13px 0;
    background: linear-gradient(124.18deg, #FE8A00 22.06%, #FE8A00 81.62%);
    border-radius: 4px;
    border-style: none;
    cursor: pointer;
    font-size: 1rem;
    font-weight: inherit;
    color: #1E2733;
    margin: 19px 0;
  }

  .historicContainer {
    display: flex;
    flex-direction: column;

    h5 {
      margin-bottom: 7px;
    }

    .historic {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 7px;
      width: 100%;
      height: 41px;
      padding: 13px;
      background: rgba(217, 217, 217, 0.05);
      border-radius: 4px;

      .historic__date {
        font-weight: 500;
        color: #CFCFCF;
      }
    }
  }
`;
