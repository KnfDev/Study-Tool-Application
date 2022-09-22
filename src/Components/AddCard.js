import BreadCrumb from "../utils/api/misc"
import { readDeck } from "../utils/api"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import CardForm from "./CardForm"
export default function AddCard(){
  const [deck, setDeck] = useState([])
  const {deckId} = useParams()

  useEffect(loadDeck, [deckId])
  function loadDeck(){
    const abortController = new AbortController()
    readDeck(deckId)
    .then(setDeck)
    .catch(errors=>console.log(errors))
    return() => abortController.abort
  }
  console.log(deck)
  return <>
  <BreadCrumb data={deck}/>
  <CardForm deck={deck}/>
  </>
}