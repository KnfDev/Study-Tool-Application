import DeckList from "./DeckList"
import { listDecks } from "../utils/api"
import { useEffect,useState } from "react"
export default function Home(){
  const [decks, setDecks] = useState([])
  const [errors, setErrors] = useState(null)
  useEffect(loadDecks, [])

  function loadDecks(){
    const abortController = new AbortController()
    setErrors(null)
    listDecks()
    .then(setDecks)
    .catch(setErrors)
    return () => abortController.abort
    // setDecks(data)
  }
  
  // console.log('test',decks)
  

    return(<>
    <button className="btn btn-secondary mb-2">Create Deck</button>
    <DeckList decks={decks} loadDecks={loadDecks}/>
    </>
    ) 
}