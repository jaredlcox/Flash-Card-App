import React from "react";
import { deleteCard } from "../../utils/api/index";
import GeneralButton from "../Button/GeneralButton";

const DeleteCard = ({ card }) => {
  const deleteHandler = () => {
    if (window.confirm("Are you sure you want to delete this card?")) {
      deleteCard(card.id);
      window.location.reload();
    }
  };

  return (
    <div className="d-flex justify-content-end">
      <GeneralButton
        btnStyle="danger"
        extraStyles="ml-auto"
        icon="trash"
        text=""
        action={deleteHandler}
      />
    </div>
  );
};

export default DeleteCard;
