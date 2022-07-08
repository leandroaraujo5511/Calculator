import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: stretch;
  height: 100vh;

  .containerLogo {
    flex: 1;
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: ${({ theme }) => theme.colors.gray100};
  }
  main {
    flex: 1;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    background: ${({ theme }) => theme.colors.White};
  
  }
`;
