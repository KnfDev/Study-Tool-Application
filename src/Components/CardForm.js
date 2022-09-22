import { useState } from "react";
import { Link } from "react-router-dom";
export default function CardForm({ deck }) {
  const [newCard, setNewCard] = useState({
    front: "",
    back: "",
  })

  function onChange(event){
    const {target} = event
    const value = target.value
    setNewCard({...newCard, [target.name]: value})
  }
  console.log('test', newCard)

  return (
    <div>
      <h2>{deck.name}: Add Card</h2>
      <form>
        <label>Front</label>
        <br />
        <textarea 
        name="front"
        onChange={onChange} 
        value={newCard.front} 
        className="w-100" 
        placeholder="Front side of card"></textarea>
        <label>Back</label>
        <br />
        <textarea 
        name="back"
        value={newCard.back}
        onChange={onChange} 
        className="w-100" 
        placeholder="Back side of card"></textarea>
        <button className="btn btn-secondary"><Link to={`/decks/${deck.id}`}>Done</Link></button>
        <button type="submit" className="btn btn-primary ml-2">Save</button>
      </form>
    </div>
  );
}
