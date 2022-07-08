import Modal from "@mui/material/Modal";
import { ReactNode, useState } from "react";
import { BoxStyled } from "./styles";

type ModalCalculatorProps = {
  children: ReactNode;
};

export default function ModalCalculator({ children }:ModalCalculatorProps) {
  const [open, setOpen] = useState(true);
  const handleClose = () => setOpen(false);
  return (
    <div>
      <Modal open={open} onClose={handleClose}>
        <BoxStyled>
          <div className="headerModal">
            <div className="modalButtons">
              <button type="button" onClick={handleClose}>
                x              
              </button>
            </div>
          </div>
          <main>{children}</main>
        </BoxStyled>
      </Modal>
    </div>
  );
}
