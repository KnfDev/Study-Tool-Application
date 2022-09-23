import React from "react";
import Header from "./Header";
import NotFound from "./NotFound";
import Home from "../Components/Home";
import { Route, Switch } from "react-router-dom";
import Study from "../Components/Study";
import AddCard from "../Components/AddCard";
import Deck from "../Components/Deck";
function Layout() {
  return (
    <>
      <Header />
      <div className="container">
        {/* TODO: Implement the screen starting here */}
        <Switch>
        <Route exact path="/">
        <Home/>
        </Route>
        <Route path="/decks/:deckId/study">
          <Study/>
        </Route>
        <Route path="/decks/:deckId/cards/new">
          <AddCard/>
        </Route>
        <Route path="/decks/:deckId">
          <Deck/>
        </Route>
        <Route>
        <NotFound />
        </Route>
        </Switch>
      </div>
    </>
  );
}

export default Layout;
