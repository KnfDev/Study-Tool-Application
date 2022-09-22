import { Link } from "react-router-dom";
import { deleteDeck } from "../utils/api";
export default function DeckList({ decks, loadDecks }) {

  function handleDelete(event){
    let target = event.target.value
    if(window.confirm("Delete this deck?  You will not be able to recover it")){
      deleteDeck(target)
      .then(()=>loadDecks())
    }
  }

  const deckList = decks.map((deck) => {
    return (
      <div key={deck.id} className="card">
        <div className="card-body">
          <div className="d-flex justify-content-between">
          <h3 className="card-title">{deck.name}</h3>
          <h6 className="card-subtitle mb-2 text-muted">{deck.cards.length} cards</h6>
          </div>
          <p className="card-text">{deck.description}</p>
          <div className="d-flex justify-content-between">
            <div>
        <button className="btn btn-secondary">View</button>
        <Link to={`/decks/${deck.id}/study`}>
        <button className="btn btn-primary ml-2">Study</button>
        </Link>
            </div>
        <button value={deck.id} onClick={handleDelete} className="btn btn-danger">Trash</button>
          </div>
        </div>
      </div>
    );
  });

  return <>{deckList}</>;
}
