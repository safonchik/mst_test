import React, { useEffect, useState } from "react";
import "./styles.css";
import { types } from "mobx-state-tree";

const User = types.model("User", {
  id: types.identifier,
  email: types.string
});

const Todo = types.model("Todo", {
  id: 1,
  name: types.string,
  responsible: types.reference(User)
});

const RootStore = types.model("RootStore", {
  todos: types.model("Todos", {
    map: types.map(Todo)
  }),
  dictionaries: types.model("Dictionaries", {
    users: types.map(User)
  })
});

export default function App() {
  useEffect(() => {}, []);

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}
