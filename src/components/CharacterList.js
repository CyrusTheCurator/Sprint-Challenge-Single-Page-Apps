import React, { useEffect, useState } from "react";
import axios from "axios";
import { Route, Link } from "react-router-dom";
import SearchForm from "./SearchForm";
import CharacterCard from "./CharacterCard";

export default function CharacterList(props) {
  // TODO: Add useState to track data from useEffect
  const searchResults = props.searchResults;

  useEffect(() => {
    const getCharacters = () => {
      console.log(
        `our initial vals are defaulted to ${props.charactersToDisplay.map(
          element => {
            return element.name;
          }
        )}`
      );
      axios
        .get("https://rickandmortyapi.com/api/character/")
        .then(response => {
          props.setSearchResults(response.data.results);
          console.log(`current vals should now be  ${response.data}`);

          console.log(`current vals are now ${props.searchResults}`);
        })
        .catch(error => {
          console.error("Server Error", error);
        });
    };

    getCharacters();
  }, []);

  useEffect(() => {
    props.setCharactersToDisplay(props.searchResults);
  }, [props.searchResults]);

  return (
    <section className="character-list">
      <SearchForm
        searchResults={props.searchResults}
        setSearchResults={props.setSearchResults}
        setCharactersToDisplay={props.setCharactersToDisplay}
      />

      {props.charactersToDisplay.map(element => {
        const cardLink = `character/${element.id}`;
        return (
          <div>
            <Route
              exact
              path="/"
              render={props => {
                return (
                  <Link to={cardLink}>
                    <div>
                      <h1>{element.name}</h1> <img src={element.image} />
                    </div>
                  </Link>
                );
              }}
            />
          </div>
        );
      })}
      <Route
        path="/character/:id"
        render={props => {
          return (
            <CharacterCard searchResults={searchResults} match={props.match} />
          );
        }}
      />
    </section>
  );
}
