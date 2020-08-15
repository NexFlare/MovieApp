import React, { useState } from "react";

function SearchComponent({ searchMovie }) {
  const [name, setName] = useState("");
  const [year, setYear] = useState("");
  const [type, setType] = useState("");
  const handleSearch = () => {
    searchMovie({ name, year, type });
  };
  return (
    <div className="search-component">
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={e => setName(e.target.value)}
      ></input>
      <input
        type="text"
        placeholder="Type"
        value={type}
        onChange={e => setType(e.target.value)}
      ></input>
      <input
        type="text"
        placeholder="Year"
        value={year}
        onChange={e => setYear(e.target.value)}
      ></input>
      <button onClick={handleSearch}>Search</button>
    </div>
  );
}

export default SearchComponent;
