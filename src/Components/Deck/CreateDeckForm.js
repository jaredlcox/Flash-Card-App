import React from "react";
import { useState } from "react";
import { createDeck } from "../../utils/api";
import { Link, useHistory } from "react-router-dom";
import NavBar from "../Home/NavBar";
import GeneralButton from "../Button/GeneralButton";

//This page we will have our form to create a new deck

const defaultState = {
  name: "Deck Name",
  description: "Brief description of the deck",
};

function CreateDeck() {
  const [deck, setDeck] = useState(defaultState);
  const hist = useHistory();

  //This function will take us back to our home page when form is finished

  const handleSubmit = async (event) => {
    event.preventDefault();
    await createDeck(deck);
    hist.push("/");
  };
  // Form with our nav bar as well as our name and text box
  return (
    <div>
      <NavBar deck={deck} navType="Create Deck" />

      <h2>Create Deck</h2>

      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <br />
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            id="name"
            placeholder={deck.name}
            onChange={(e) => setDeck({ ...deck, name: e.target.value })}
          />
        </div>
        <br />
        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            Description
          </label>
          <br />
          <textarea
            className="form-control"
            type="text"
            name="description"
            id="description"
            rows="6"
            placeholder={deck.description}
            onChange={(e) => setDeck({ ...deck, description: e.target.value })}
          ></textarea>
        </div>
        <div className="d-flex flex-gap-2">
          <Link to="/">
            <GeneralButton btnStyle="secondary" icon="" text="Cancel" />
          </Link>
          <GeneralButton btnStyle="primary" icon="" text="Submit" />
        </div>
      </form>
    </div>
  );
}

export default CreateDeck;
