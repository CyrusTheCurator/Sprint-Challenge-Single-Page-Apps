import React, { useState, useEffect } from "react";
import { Route, Link } from "react-router-dom";
import WelcomePage from "./components/WelcomePage";
import SearchForm from "./components/SearchForm";
import CharacterList from "./components/CharacterList";
import Header from "./components/Header.js";
import axios from "axios";

export default function App() {
  const [searchResults, setSearchResults] = useState([]);
  const [charactersToDisplay, setCharactersToDisplay] = useState(searchResults);
  return (
    <main>
      <Header />

      <Route
        exact
        path="/"
        render={props => {
          return <WelcomePage {...props} />;
        }}
      />
      <Route
        path="/"
        render={props => {
          return (
            <CharacterList
              {...props}
              searchResults={searchResults}
              setSearchResults={setSearchResults}
              charactersToDisplay={charactersToDisplay}
              setCharactersToDisplay={setCharactersToDisplay}
            />
          );
        }}
      />
    </main>
  );
}
