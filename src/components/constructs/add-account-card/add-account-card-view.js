import { Wrapper, Add } from "./add-account-card-style";

const AddAccountCard = ({ setModalOpen }) => {
  return (
    <Wrapper onClick={() => setModalOpen(true)}>
      <Add />
    </Wrapper>
  );
};

export default AddAccountCard;
