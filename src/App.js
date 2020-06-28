import React, { useEffect } from "react";
import "./styles.css";
import store from "./store";

export default function App() {
  useEffect(() => {
    const data = store.load();
    data.then(res => console.log(res));
  }, []);

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}
