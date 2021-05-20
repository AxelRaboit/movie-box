import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { HomePage } from "./components/HomePage.js";
import { HomeMovie } from "./components/Movie/HomeMovie.js";

export function App() {
  return (
    <main>
      <BrowserRouter>
        <Switch>
          <Route path="/" component={HomePage} exact />
          <Route path="/movieproject" component={HomeMovie} exact/>
        </Switch>
      </BrowserRouter>
    </main>
  );
}

export default App;