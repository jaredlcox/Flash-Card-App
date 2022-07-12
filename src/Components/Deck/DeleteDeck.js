import React from "react";
import { deleteDeck } from "../../utils/api/index";
import GeneralButton from "../Button/GeneralButton";

//Delete deck handler function
const DeleteDeck = ({ deck }) => {
  const deleteHandler = () => {
    if (window.confirm("Are you sure you want to delete this deck?")) {
      deleteDeck(deck.id);
      window.location.reload();
    }
  };

  return (
    //Delete button
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

export default DeleteDeck;
