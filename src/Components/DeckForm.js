export default function DeckForm({
  route,
  newDeck,
  setNewDeck,
  submitHandler,
}) {

  function onChange(event) {
    const { target } = event;
    const value = target.value;
    setNewDeck({ ...newDeck, [target.name]: value });
  }

  return (
    <div>
      <h1>{route}</h1>
      <form onSubmit={submitHandler}>
        <label>Name</label>
        <br />
        <input
          name="name"
          onChange={onChange}
          value={newDeck.name}
          className="w-100"
          placeholder="Deck Name"
          type="text"
        />
        <br />
        <label className="my-2">Description</label>
        <br />
        <textarea
          name="description"
          onChange={onChange}
          rows="5"
          className="w-100"
          value={newDeck.description}
          placeholder="Brief description of the deck"
        />
        <div className="mt-2">
          <button className="btn btn-secondary">Cancel</button>
          <button type="submit" className="btn btn-primary ml-2">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
