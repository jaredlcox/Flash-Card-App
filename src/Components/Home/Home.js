import React from "react";
import DeckList from "../Deck/DeckList/DeckList";
import { Link } from "react-router-dom";
import GeneralButton from "../Button/GeneralButton";

//This is where our DeckList is shown for home page.
const Home = () => {
  return (
    <div>
      <Link to={"/decks/new"}>
        <GeneralButton btnStyle="secondary" icon="plus" text="Create Deck" />
      </Link>
      <DeckList />
    </div>
  );
};

export default Home;
