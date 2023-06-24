import React from "react";
import Header from "./components/Header/Header";
import Form from "./components/Form/Form";
import List from "./components/List/List";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Header />
      {/* <hr /> */}
      <Form />
      {/* <hr /> */}
      <List />
    </div>
  );
}

export default App;
