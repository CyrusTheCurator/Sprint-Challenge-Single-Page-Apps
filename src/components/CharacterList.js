import React, { useEffect, useState } from "react";
import axios from "axios";
import { Route } from "react-router-dom";
import SearchForm from "./SearchForm";

export default function CharacterList(props) {
  // TODO: Add useState to track data from useEffect

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
          console.log(`current vals should now be  ${response.data.results}`);

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
        return (
          const cardLink = `/${}`
          <Link to=`/home/${}`/>
          <div>
            <h1>{element.name}</h1> <img src={element.image} />
          </div>
        );
      })}
    </section>
  );
}
