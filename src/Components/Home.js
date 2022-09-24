import DeckList from "./DeckList"
import { listDecks } from "../utils/api"
import { Link } from "react-router-dom"
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
    <Link to="/decks/new">
    <button className="btn btn-secondary mb-2">Create Deck</button>
    </Link>
    <DeckList decks={decks} loadDecks={loadDecks}/>
    </>
    ) 
}