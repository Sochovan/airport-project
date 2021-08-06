import React from "react";
import Search from "./components/search/Search.jsx";
import InfoButtons from "./components/info/InfoButtons.jsx";
import { BrowserRouter, Route } from "react-router-dom";
// import { Provider } from "react-redux";
// import store from "./store.js";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Route>
          <Search />
        </Route>
        <Route component={InfoButtons} />
      </BrowserRouter>
    </>
  );
};
export default App;
