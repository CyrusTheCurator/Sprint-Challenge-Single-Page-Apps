import React from "react";

export default function CharacterCard(props) {
  const paramItemId = props.match.params.id;
  const item = props.searchResults.find(result => {
    console.log(result.name);
    debugger;

    return result === paramItemId;
  });
  console.log(item);
  return <div>HEY GUYS IT DOESN'T WORK{item}</div>;
}
