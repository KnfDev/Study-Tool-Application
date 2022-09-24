import { useEffect, useState } from "react"
import { useHistory, useParams } from "react-router-dom"
import { readDeck, readCard, updateCard } from "../utils/api"
import { BreadCrumb } from "../utils/api/misc"
import CardForm from "./CardForm"
export default function EditCard(){
  const history = useHistory()
  const {cardId, deckId} = useParams()
  const [currentDeck, setCurrentDeck] = useState(null);
  const [newCard, setNewCard] = useState({
    front: "",
    back: "",
  })

  useEffect(loadCards, [cardId])
  function loadCards(){
    const abortController = new AbortController()
    readCard(cardId)
    .then(setNewCard)
    .catch(errors=>console.log(errors))
    return() => abortController.abort
  }

  useEffect(loadDecks, [deckId]);
  function loadDecks() {
    const abortController = new AbortController();
    // setErrors(null)
    readDeck(deckId).then(setCurrentDeck);
    // .catch(setErrors)
    return () => abortController.abort;
  }

  function submitHandler(event){
    event.preventDefault()
    // console.log('newCard',newCard,deckId)
    updateCard(newCard)
    history.go(-1)
    // .then(()=>history.push(`/decks/${deckId}`))
  }
  if(currentDeck === null){
    return "loading"
  }
    return (
      <div>
  <BreadCrumb data={currentDeck}/>
  <CardForm 
  deckId={deckId}
  submitHandler={submitHandler}
  setNewCard={setNewCard}
  newCard={newCard}
  deck={currentDeck}/>
  </div>
  )
}
