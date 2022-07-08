import styled from "styled-components";

export const Container = styled.div`
  margin: 1rem 0 2rem 0;

  .containerResults {
    margin: 0;
    height: 12rem;
    background-color: ${({ theme }) => theme.colors.black800};
    border-radius: 1rem;
    display: grid;
    align-items: center;
    justify-content: end;
    padding: 0 0.75rem;
    overflow-x: scroll;

    ::-webkit-scrollbar {
      display: none;
    }
    .containerHistoric {
      display: grid;
      align-items: center;
      justify-content: end;
      height: 2.5rem;
    }
    a {
      font-size: 2.5rem;
      font-weight: bold;
      text-align: end;
      color: ${({ theme }) => theme.colors.gray500};
    }
    span {
      color: ${({ theme }) => theme.colors.gray500};
    }
  }
`;
