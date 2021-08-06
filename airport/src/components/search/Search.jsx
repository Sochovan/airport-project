import React from "react";
import "./search.scss";

class Search extends React.Component {
  state = {
    value: "",
  };

  handleChange = (event) => {
    this.setState({
      value: event.target.value,
    });
  };

  render() {
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
              value={this.state.value}
              onChange={this.handleChange}
            />
            <button className="search-info__button" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default Search;
