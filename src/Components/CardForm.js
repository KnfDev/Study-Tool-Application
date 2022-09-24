import { Link } from "react-router-dom";
export default function CardForm({ deck, newCard, setNewCard, submitHandler }) {

  
  function onChange(event){
    const {target} = event
    const value = target.value
    setNewCard({...newCard, [target.name]: value})
  }
  console.log('test', newCard)

  return (
    <div>
      <h2>{deck.name}: Add Card</h2>
      <form onSubmit={submitHandler}>
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
        <Link to={`/decks/${deck.id}`}><button className="btn btn-secondary">Done</button></Link>
        <button type="submit" className="btn btn-primary ml-2">Save</button>
      </form>
    </div>
  );
}
