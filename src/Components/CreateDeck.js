import { createDeck } from "../utils/api"
import { ShortBreadCrumb } from "../utils/api/misc"
import DeckForm from "./DeckForm"
import { useState } from "react"
import { listDecks } from "../utils/api"
import { useHistory } from "react-router-dom"

export default function CreateDeck(){
  const history = useHistory()
  const [newDeck, setNewDeck] = useState({
    name: "",
    description: "",
    id: "",
  })
  
  async function submitHandler(event){
    event.preventDefault()
    await createDeck(newDeck)
    const response = await listDecks()
    const newDeckId = Math.max(...response.map(deck => deck.id));
    history.push(`/decks/${newDeckId}`);
  }


  return (
    <div>
    <ShortBreadCrumb route={'Create Deck'}/>
    <DeckForm 
    newDeck={newDeck}
    setNewDeck={setNewDeck}
    submitHandler={submitHandler}
    route={'Create Deck'}/>
    </div>
  )
}