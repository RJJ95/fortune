import { ButtonGroup } from "./form-modal-style";
import Modal from "../modal";
import Form from "../form";
import Button from "../../primitives/button";

const FormModal = ({ inputElements, onCancel, onSubmit, isOpen, header }) => {
  return (
    <Modal isOpen={isOpen} header={header}>
      <Form inputElements={inputElements} />
      <ButtonGroup>
        <Button fontColor="white" color="red" onClick={onCancel}>
          Cancel
        </Button>
        <Button fontColor="white" color="green" onClick={onSubmit}>
          Submit
        </Button>
      </ButtonGroup>
    </Modal>
  );
};

export default FormModal;
