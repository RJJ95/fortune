import { Heading } from "./modal-style";
import Modal from "react-modal";
import "./modal-styles.css";

const customStyles = {
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.2)",
  },
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    padding: "30px",
    borderRadius: "10px",
    border: "none",
  },
};

Modal.setAppElement("#root");

const TemplateModal = ({ isOpen, header, children }) => {
  return (
    <Modal closeTimeoutMS={200} isOpen={isOpen} style={customStyles}>
      <Heading>{header}</Heading>
      {children}
    </Modal>
  );
};

export default TemplateModal;
