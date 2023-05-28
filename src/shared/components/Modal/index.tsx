import { FC } from "react";
import MUIModal from "@mui/material/Dialog";

import { IModal } from "./types";

const Modal: FC<IModal> = ({ isOpen, onClose, children, fullScreen }) => (
  <MUIModal
    fullScreen={fullScreen}
    open={isOpen}
    onClose={onClose}
    fullWidth={true}
    style={{ borderRadius: 16 }}
    PaperProps={{
      style: {
        borderRadius: 16,
      },
    }}
  >
    <div className="modal">{children}</div>
  </MUIModal>
);

export default Modal;
