import { Box } from "@mui/material";
import styled from "styled-components";

export const BoxStyled = styled(Box)`
  position: inherit;
  top: 15%;
  left: 40%;
  width: 23.25rem;
  height: 38.25rem;
  background: ${({ theme }) => theme.colors.black900};
  transform: translate(0%, -10%);
  border-radius: 1.25rem;
  box-shadow: 1.5rem;
  padding: 0.25px;

  .headerModal {
    .modalButtons {
      display: flex;
      align-items: center;
      justify-content: end;
      padding: 0.5rem;
      button {
        width: 1rem;
        height: 1rem;
        background-color: ${({ theme }) => theme.colors.orange};
        border-radius: 1rem;
      }
    }
  }
`;
