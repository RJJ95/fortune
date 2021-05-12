import { useState } from "react";
import FormModal from "../form-modal";

const AddAccountModal = ({ setModalOpen, isOpen }) => {
  const [selectedBank, setSelectedBank] = useState("");
  const [providedAccountNumber, setProvidedAccountNumber] = useState("");
  const [providedCurrentBalance, setProvidedCurrentBalance] = useState(0);
  const [uploadedPaymentHistory, setUploadedPaymentHistory] =
    useState(undefined);

  const inputElements = [
    {
      label: "Select a bank",
      type: "select",
      options: [
        { name: "ING", value: 0 },
        { name: "ABN AMRO", value: 1 },
        { name: "Rabobank", value: 2 },
      ],
      backgroundColor: "lightGrey",
      value: selectedBank,
      onChange: setSelectedBank,
      placeholder: "Choose your bank",
    },
    {
      label: "Enter account number",
      type: "text",
      backgroundColor: "lightGrey",
      value: providedAccountNumber,
      onChange: setProvidedAccountNumber,
      placeholder: "Enter your account number",
    },
    {
      label: "Enter current balance",
      type: "number",
      backgroundColor: "lightGrey",
      value: providedCurrentBalance,
      onChange: setProvidedCurrentBalance,
    },
    {
      label: "Upload payment history",
      type: "file",
      backgroundColor: "lightGrey",
      value: uploadedPaymentHistory,
      onChange: setUploadedPaymentHistory,
    },
  ];

  function handleAccountUpload() {
    setModalOpen(false);
  }

  function handleClose() {
    setSelectedBank("");
    setProvidedAccountNumber("");
    setProvidedCurrentBalance(0);
    setUploadedPaymentHistory(undefined);
    setModalOpen(false);
  }

  return (
    <FormModal
      inputElements={inputElements}
      onCancel={handleClose}
      onSubmit={handleAccountUpload}
      isOpen={isOpen}
      header="Add account"
    />
  );
};

export default AddAccountModal;
