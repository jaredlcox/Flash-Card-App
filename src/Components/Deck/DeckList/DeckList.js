import { listDecks } from "../../../utils/api";
import { deleteDeck } from "../../../utils/api";
import React, { useEffect, useState, useMemo } from "react";
import DeckListItem from "./DeckListItem/DeckListItem";

// Creating abortController then having it memoizing for multiple functions.
const DeckList = () => {
  const [decks, setDecks] = useState([]);
  const abortController = useMemo(() => new AbortController(), []);
  useEffect(() => {
    async function fetchData() {
      const response = await listDecks(abortController.signal);
      setDecks(response);
    }
    // Clean up function
    fetchData();
    return () => abortController.abort();
  }, [abortController]);

  const onDeleteHandler = (id) => {
    if (window.confirm("Are you sure you want to delete the deck?")) {
      deleteDeck(id, abortController.signal).then((r) =>
        setDecks(decks.filter((deck) => deck.id !== id))
      );
    }
  };

  return (
    //Mapping through our decks
    <div>
      {decks?.map((deck) => (
        <DeckListItem
          onDelete={() => onDeleteHandler(deck.id)}
          key={deck.id}
          {...deck} // deck={deck}
        />
      ))}
    </div>
  );
};

export default DeckList;
