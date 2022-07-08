import styled from "styled-components";

export const Container = styled.div`
  margin: 0 0.5rem;
  main {
    display: grid;
    grid-template-columns: 4fr 1fr;
    gap: 0.25rem;
    .containerResults {
      margin: 0 1rem;
      height: 2.5rem;
      border: 1px solid black;
      display: flex;
      align-items: center;
      justify-content: end;
      padding-right: 1rem;

      span {
        font-size: 2.5rem;
        font-weight: bold;
      }
    }
    .operationNumber {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      gap: 0.25rem;
    }
    .operationLogics {
      display: grid;
      grid-template-rows: 1fr 1fr 1fr;
      gap: 0.25rem;
    }
  }
`;
