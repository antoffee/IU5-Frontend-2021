import React, { useState } from "react";
import { Switch, Route, withRouter } from "react-router-dom";
import "./App.css";
import SearchForm from "./components/SearchForm";
import SearchResult from "./components/SearchResult";

function App() {
  const [user, setUser] = useState("");
  return (
    <div className="App">
      <Switch>
        <Route
          exact
          path={process.env.REACT_APP_DEV === "true" ? "/" : "/lab10/build"}
        >
          <SearchForm onSearch={(username) => setUser(username)} />
        </Route>
        <Route
          path={
            process.env.REACT_APP_DEV === "true" ? "/result" : "/lab10/build"
          }
        >
          <SearchResult username={user} />
        </Route>
      </Switch>
    </div>
  );
}

export default withRouter(App);
