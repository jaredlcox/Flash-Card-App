import React from "react";
import Header from "./Header";
import Home from "../Components/Home/Home";
import { Route, Switch } from "react-router-dom";
import NotFound from "./NotFound";
import CreateDeck from "../Components/Deck/CreateDeckForm";
import { Fragment } from "react";
import DeckListItem from "../Components/Deck/DeckList/DeckListItem/DeckListItem";
import ViewDeck from "../Components/Deck/ViewDeck";
import EditDeck from "../Components/Deck/EditDeck";
import StudyDeck from "../Components/Deck/Study";
import AddCard from "../Components/Card/AddCard";
import EditCard from "../Components/Card/EditCard";

//Containing all of our paths to each file

function Layout() {
  return (
    <Fragment>
      <Header />
      <div className="container">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>

          <Route path="/decks/new">
            <CreateDeck />
          </Route>

          <Route path="/decks/:deckId/study">
            <StudyDeck />
          </Route>

          <Route path="/decks/:deckId/edit">
            <EditDeck />
          </Route>

          <Route path="/decks/:deckId/cards/new">
            <AddCard />
          </Route>

          <Route path="/decks/:deckId/cards/:cardId/edit">
            <EditCard />
          </Route>

          <Route exact path="/decks/:deckId/">
            <ViewDeck />
          </Route>

          <Route>
            <NotFound />
          </Route>
        </Switch>
      </div>
    </Fragment>
  );
}

export default Layout;
