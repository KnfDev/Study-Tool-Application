import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { readDeck, deleteDeck, deleteCard } from "../utils/api";
import { ShortBreadCrumb } from "../utils/api/misc";
import { Link } from "react-router-dom";

export default function Deck() {
  const history = useHistory();
  const [deck, setDeck] = useState(null);
  const { deckId } = useParams();

  useEffect(loadDeck, [deckId]);
  function loadDeck() {
    readDeck(deckId).then(setDeck);
  }

  function handleDeleteDeck(event) {
    let target = event.target.value;
    if (
      window.confirm("Delete this deck?  You will not be able to recover it")
    ) {
      deleteDeck(target).then(() => loadDeck());
      // .then(() => history.push("/"));
    }
  }

  function handleDeleteCard(event) {
    let target = event.target.value;
    console.log("test", target);
    if (
      window.confirm("Delete this card?  You will not be able to recover it")
    ) {
      deleteCard(target).then(() => loadDeck());
      // .then(()=> history.push(`/decks/${target}`))
    }
  }

  if (deck === null) {
    return "loading..";
  }
  const currentCard = deck.cards;
  let cards = currentCard.map((card) => {
    return (
      <div key={card.id} className="card">
        <div className="card-body">
          <div className="d-flex justify-content-between">
            <p className="card-text col-6">{card.front}</p>
            <p className="card-text col-6">{card.back}</p>
          </div>
          <div className="d-flex justify-content-end">
            <Link to={`/decks/${deck.id}/cards/${card.id}/edit`}>
              <button className="btn btn-secondary mr-2">Edit</button>
            </Link>
            <button
              onClick={handleDeleteCard}
              value={card.id}
              className="btn btn-danger"
            >
              Trash
            </button>
          </div>
        </div>
      </div>
    );
  });
  console.log(currentCard);

  return (
    <>
      <ShortBreadCrumb route={deck.name} data={deck} />
      <div className="mb-2">
        <h3>{deck.name}</h3>
        <h6>{deck.description}</h6>
      </div>
      <div className="d-flex justify-content-between my-2">
        <div>
          <Link to={`/decks/${deck.id}/edit`}>
            <button className="btn btn-secondary">Edit</button>
          </Link>
          <Link to={`/decks/${deck.id}/study`}>
            <button className="btn btn-primary ml-2">Study</button>
          </Link>
          <Link to={`/decks/${deck.id}/cards/new`}>
            <button className="btn btn-primary ml-2">Add Cards</button>
          </Link>
        </div>
        <div>
          <button
            value={deck.id}
            onClick={handleDeleteDeck}
            className="btn btn-danger"
          >
            Trash
          </button>
        </div>
      </div>
      <h2 className="my-2">Cards</h2>
      {cards.length !== 0 ? cards : "There are no Cards"}
    </>
  );
}
