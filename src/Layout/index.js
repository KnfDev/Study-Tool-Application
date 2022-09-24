import React, { useState } from "react";
import Header from "./Header";
import NotFound from "./NotFound";
import Home from "../Components/Home";
import { Route, Switch } from "react-router-dom";
import Study from "../Components/Study";
import AddCard from "../Components/AddCard";
import Deck from "../Components/Deck";
import CreateDeck from "../Components/CreateDeck";
import EditCard from "../Components/EditCard";
import EditDeck from "../Components/EditDeck";
function Layout() {
  const [errors,setErrors] = useState(null)
  return (
    <div>
      
      <Header />
      <div className="container">
        {/* TODO: Implement the screen starting here */}
        <Switch>
          <Route exact path="/">
            <Home
            errors={errors}
            setErrors={setErrors}
            />
          </Route>
          <Route path="/decks/:deckId/study">
            <Study />
          </Route>
          <Route path="/decks/new">
            <CreateDeck />
          </Route>
          <Route path="/decks/:deckId/edit">
            <EditDeck />
          </Route>
          <Route path="/decks/:deckId/cards/:cardId/edit">
            <EditCard />
          </Route>
          <Route path="/decks/:deckId/cards/new">
            <AddCard />
          </Route>
          <Route path="/decks/:deckId">
            <Deck />
          </Route>
          <Route>
            <NotFound />
          </Route>
        </Switch>
      </div>
    </div>
    
  );
}

export default Layout;
