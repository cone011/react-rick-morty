import { useState } from "react";
import "./SearchBar.css";

const SearchBar = ({ onSearchHandler }) => {
  const [searchData, setSearchData] = useState("");

  const onInputSearchHandler = (event) => {
    setSearchData(event.target.value);
  };

  const onSubmitFormHandler = (event) => {
    event.preventDefault();

    if (!searchData) {
      return;
    }

    onSearchHandler(searchData);
  };

  return (
    <section className="section-search">
      <div className="container">
        <div className="search">
          <div className="search-text-box">
            <h2 className="heading-secondary center-text">
              Search your favorite caracter!
            </h2>
            <form
              className="search-form"
              name="search"
              onSubmit={onSubmitFormHandler}
            >
              <div className="search-form-container">
                <input
                  id="full-name"
                  type="text"
                  placeholder="Jerry Smith"
                  name="full-name"
                  required
                  value={searchData}
                  onChange={onInputSearchHandler}
                />
              </div>
              <button className="btn btn--form">Search</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SearchBar;
