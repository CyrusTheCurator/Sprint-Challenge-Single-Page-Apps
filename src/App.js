import React from "react";
import { Route } from "react-router-dom";
import WelcomePage from "./components/WelcomePage";
import SearchForm from "./components/SearchForm";
import Header from "./components/Header.js";

export default function App() {
  return (
    <main>
      <Header />
      <Route
        path="/"
        render={props => {
          return <SearchForm {...props} />;
        }}
      />
      <Route
        exact
        path="/"
        render={props => {
          return <WelcomePage {...props} />;
        }}
      />
    </main>
  );
}
