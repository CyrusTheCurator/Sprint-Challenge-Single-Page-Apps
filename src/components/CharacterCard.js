import React from "react";
import { Route, Link } from "react-router-dom";
import styled from "styled-components";

export default function CharacterCard(props) {
  const paramItemId = props.match.params.id;
  const item = props.searchResults.find(result => {
    console.log(result.name);
    return result.id === Number(paramItemId);
  });
  console.log(item);
  const StyledDiv = styled.div`
    margin: auto;
    border: 3px solid green;
    padding: 10px;
    display: flex;
  `;

  return item ? (
    <>
      <Link to="/">Home</Link>
      <StyledDiv>
        <img src={item.image} />
        <div>{item.name}</div>
        <p>Status: </p>

        <p>Status: </p>
        <p>Home Planet: </p>
      </StyledDiv>
    </>
  ) : (
    <div>404 sorry</div>
  );
}
