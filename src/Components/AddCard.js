import {BreadCrumb} from "../utils/api/misc"
import { createCard, readDeck } from "../utils/api"
import { useEffect, useState } from "react"
import { useHistory, useParams } from "react-router-dom"
import CardForm from "./CardForm"
export default function AddCard(){
  const history = useHistory()
  const [deck, setDeck] = useState([])
  const {deckId} = useParams()
  const [newCard, setNewCard] = useState({
    front: "",
    back: "",
  })

  useEffect(loadDeck, [deckId])
  function loadDeck(){
    const abortController = new AbortController()
    readDeck(deckId)
    .then(setDeck)
    .catch(errors=>console.log(errors))
    return() => abortController.abort
  }

  function submitHandler(event){
    event.preventDefault()
    // console.log('newCard',newCard,deckId)
    createCard(deckId, newCard)
    .then(()=>history.push(`/decks/${deckId}`))
  }
  console.log(deck)
  return <>
  <BreadCrumb data={deck}/>
  <CardForm 
  deckId={deckId}
  submitHandler={submitHandler}
  setNewCard={setNewCard}
  newCard={newCard}
  deck={deck}/>
  </>
}