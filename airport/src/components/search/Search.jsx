import React, { useState } from "react";
import "./search.scss";
import qs from "qs";
import { Link, useLocation } from "react-router-dom";

const Search = () => {
  const { search } = useLocation();
  const querySearch = qs.parse(search, { ignoreQueryPrefix: true }).search;

  const queryParams = querySearch ? querySearch : "";

  const [value, setDataSearch] = useState(queryParams);

  const handleChange = (event) => {
    event.preventDefault();
    setDataSearch(event.target.value);
  };

  const { pathname } = useLocation();

  let path =
    pathname === "/departures"
      ? `/departures?search=${value}`
      : `/arrivals?search=${value}`;

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
            value={value.value}
            onChange={handleChange}
          />
          <Link to={path}>
            <button className="search-info__button" type="submit">
              Search
            </button>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Search;
