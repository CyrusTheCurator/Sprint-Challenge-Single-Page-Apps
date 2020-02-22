import React, { useState, useEffect } from "react";

export default function SearchForm(props) {
  const [localSearchTerm, setLocalSearchTerm] = useState("");
  const testArr = [];

  useEffect(() => {
    console.log("Search ressults changed and now we're gonna do a thing");

    const results = props.searchResults.filter(character => {
      return character.name
        .toLowerCase()
        .includes(localSearchTerm.toLowerCase());
    });

    return props.setCharactersToDisplay(results);
  }, [localSearchTerm]);

  const handleChange = event => {
    setLocalSearchTerm(event.target.value);
    console.log(localSearchTerm);
  };
  return (
    <section className="search-form">
      <form>
        <label htmlFor="searchTerm">Search:</label>
        <input
          id="searchTerm"
          type="text"
          name="textfield"
          placeholder="Search"
          value={localSearchTerm}
          onChange={handleChange}
        />
        {/* <input type="submit" value="Search" onSubmit={newAPICall} /> */}
      </form>
    </section>
  );
}
