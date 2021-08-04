import React from "react";
import "./search.scss";

const Search = () => {
  return (
    <div className="search-container">
      <h2 className="search-container__title">SEARCH FLIGHT</h2>
      <div className="search__info">
        <i className="fas fa-search search-info__icon"></i>
        <form className="search-info__form">
          <input
            type="text"
            placeholder="Airline, destination or flight #"
            className="search-info__input"
          />
          <button className="search-info__button" type="submit">
            Search
          </button>
        </form>
      </div>
    </div>
  );
};

export default Search;
