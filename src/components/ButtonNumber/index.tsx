import { ButtonHTMLAttributes, useState } from "react";
import { Container } from "./styles";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  isOperation: boolean
};

export default function ButtonNumber({ isOperation, ...props }: ButtonProps) {
  const [operation, setOperation] = useState(isOperation)
  return (
    <Container operation={operation} >
      <button {...props}>{props.value}</button>
    </Container>
  );
}
