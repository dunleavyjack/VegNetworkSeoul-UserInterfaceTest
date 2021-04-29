import React from "react";

const SearchBar = () => {
  return (
    <>
      <form class="d-flex">
        <input
          class="form-control me-2"
          type="search"
          placeholder="See what we've found"
          aria-label="Search"
        />
        <button class="btn btn-dark" type="submit">
          Search
        </button>
      </form>
    </>
  );
};

export default SearchBar;

// <div className="input-group">
//   <div className="form-outline">
//     <input type="search" id="form1" className="form-control" />
//     <label className="form-label" htmlFor="form1">
//       Search
//     </label>
//   </div>
//   <button type="button" className="btn btn-dark">
//     <i className="fas fa-search"></i>
//   </button>
// </div>
