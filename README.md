# Study-Tool-Application built with javascript react and styled with bootstrap
[Deployed, currently requires local server to test](https://knfdevflashcard-go5n21h0j-knfdev.vercel.app/)
Plan on implementing a deployed back end at a future date

landing page "/" route uses a GET request to get a list of decks
![alt text](https://i.imgur.com/euK8Swp.png "/ route")

/decks/new route is a create deck page uses POST request to update the decklist state then routes to /decks/:id and renders a single deck component
![alt text](https://i.imgur.com/57d53A6.png "/decks/new route")
![alt text](https://i.imgur.com/Goq903I.png "/ route")

Clicking home takes you back to the landing page which renders a decklist component with updated decks

![alt text](https://i.imgur.com/sDQpO1F.png "/ route")

Clicking View will make another GET request take you to /decks/:id and into a specific deck that renders the cardlist component
![alt text](https://i.imgur.com/wv57hTx.png "/ route")

Trash button will make a DESTROY request simply upon confirm removes the card from the deck in local db
![alt text](https://i.imgur.com/2ohnNAR.png "/ route")
![alt text](https://i.imgur.com/BHR4oOL.png "/ route")

Same functionality with Decklist component
![alt text](https://i.imgur.com/UKAb1ej.png "/ route")
![alt text](https://i.imgur.com/WEZV1gF.png "/ route")

Study button takes you to the front side of a card with a button to flip the card
![alt text](https://i.imgur.com/kRk0j1s.png "/ route")
Backside of card has the next option and at the end of the cards array next button promps to reset deck which starts back at index 0 or cancel takes to landing
![alt text](https://i.imgur.com/kL8lLyW.png "/ route")
![alt text](https://i.imgur.com/C7sADcy.png "/ route")

Finally both Deck and Card have an edit option, the add/edit buttons both use the same respective form component
![alt text](https://i.imgur.com/lFi0b3s.png "/ route")
![alt text](https://i.imgur.com/1cpztxP.png "/ route")
![alt text](https://i.imgur.com/jYjDEUd.png "/ route")


Thanks for checking out my project!
If you have any questions please reach out to me!
