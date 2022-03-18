import React, { useRef } from "react";

function Search({ term, searchKeyword }) {
  const inputEl = useRef("")

  const getSearchTerm = () => {
    searchKeyword(inputEl.current.value)
  }

  return (
    <form className="d-flex w-50 mt-2">
      <input
        className="form-control me-2"
        aria-label="Search"
        type="search"
        ref={inputEl}
        value={term}
        placeholder="Product Search"
        onChange={getSearchTerm}
      />
    </form>
  );
}

export default Search;