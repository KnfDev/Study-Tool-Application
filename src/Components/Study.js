import { useState, useEffect } from "react";
import { useHistory, useParams, Link } from "react-router-dom";
import { readDeck } from "../utils/api";
import BreadCrumb from "../utils/api/misc";


export default function Study() {
  const history = useHistory()
  const { deckId } = useParams();
  const [currentDeck, setCurrentDeck] = useState(null);
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [currentSide, setCurrentSide] = useState(true)
  useEffect(loadDecks, [deckId]);
  function loadDecks() {
    const abortController = new AbortController();
    // setErrors(null)
    readDeck(deckId).then(setCurrentDeck);
    // .catch(setErrors)
    return () => abortController.abort;
  }
  if (currentDeck === null) {
    return "loading..";
  }
  console.log("study", currentDeck.cards.length);

  function next() {
    if(currentCardIndex + 1 >= currentDeck.cards.length) {
      if(window.confirm("Reset Deck")){
        setCurrentCardIndex(0)
        setCurrentSide(true)
      } else {
        history.push("/")
      }
    } else {
      setCurrentCardIndex(currentCardIndex+1)
      setCurrentSide(true)
    }
  }

  const currentCard = currentDeck.cards[currentCardIndex]
  // console.log('currentcard',currentCard)
  if(currentDeck.cards.length<3){
    return (
      <>
      <BreadCrumb data={currentDeck}/>
      <h1>{currentDeck.name}: Study</h1>
      <p>Not enough cards.</p>
      <p>You need at least 3 cards to study.  There are {currentDeck.cards.length} cards in this deck.</p>
      <button className="btn btn-primary"><Link to={`/decks/${currentDeck.id}/cards/new`}>
        Add Cards
        </Link>
        </button>
      </>
    )
  }
  return (
    <>
    <BreadCrumb data={currentDeck}/>
      <h1>Study: {currentDeck.name}</h1>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{currentCardIndex + 1} of {currentDeck.cards.length}</h5>
          <p className="card-text">
            {currentSide ? currentCard.front : currentCard.back}
          </p>
          <button onClick={()=>setCurrentSide(!currentSide)} className="btn btn-secondary">Flip</button>
          {currentSide ? null : <button onClick={next} className="btn btn-primary ml-2">Next</button>}
        </div>
      </div>
    </>
  );
}
