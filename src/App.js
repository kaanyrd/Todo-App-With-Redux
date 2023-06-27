import React from "react";
import Header from "./components/Header/Header";
import Form from "./components/Form/Form";
import List from "./components/List/List";
import { ThemeContextProvider } from "./components/context/ThemeContext";
import ThemeWrapper from "./components/context/ThemeWrapper";

function App() {
  return (
    <div className="main-app">
      <ThemeContextProvider>
        <ThemeWrapper>
          <Header />
          <Form />
          <List />
        </ThemeWrapper>
      </ThemeContextProvider>
    </div>
  );
}

export default App;
