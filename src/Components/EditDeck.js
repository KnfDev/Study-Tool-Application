import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { readDeck, updateDeck } from "../utils/api";
import DeckForm from "./DeckForm";

export default function EditDeck(){

  const history = useHistory()
  const { deckId } = useParams();
  const [newDeck, setNewDeck] = useState({
    name: "",
    description: "",
    id: "",
  })

  useEffect(loadDecks, [deckId]);
  function loadDecks() {
    const abortController = new AbortController();
    // setErrors(null)
    readDeck(deckId).then(setNewDeck);
    // .catch(setErrors)
    return () => abortController.abort;
  }

  
  async function submitHandler(event){
    event.preventDefault()
    await updateDeck(newDeck)
    history.go(-1)
    // const response = await listDecks()
    // const newDeckId = Math.max(...response.map(deck => deck.id));
    // history.push(`/decks/${newDeckId}`);
  }

  return <DeckForm 
  newDeck={newDeck}
  setNewDeck={setNewDeck}
  submitHandler={submitHandler}
  route={`Edit Deck`}/>
}