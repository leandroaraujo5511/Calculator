import styled, { css } from "styled-components";

interface ContainerProps {
  operation: boolean;
}

export const Container = styled.div<ContainerProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.black800};
  border-radius: 2.5rem;

  ${(props) =>
    props.operation &&
    css`
      background-color: ${({ theme }) => theme.colors.blue100};
    `};

  button {
    width: 100%;
    height: 3.5rem;
    color: ${({ theme }) => theme.colors.gray500};
    font-size: 2.5rem;
  }
`;
