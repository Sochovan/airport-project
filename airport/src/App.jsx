import React from "react";
import Search from "./components/search/Search.jsx";
import InfoButtons from "./components/info/InfoButtons.jsx";
import { BrowserRouter, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store.js";

const App = () => {
  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <Route component={Search} />
          <Route component={InfoButtons} />
        </BrowserRouter>
      </Provider>
    </>
  );
};
export default App;
