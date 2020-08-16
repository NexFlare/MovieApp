import React, { useState } from "react";
import "../../stylesheet/search.css";
import TextField from "@material-ui/core/TextField";
import { types } from "../constants/index";
import { MenuItem, Button } from "@material-ui/core";

function SearchComponent({ searchMovie }) {
  const [name, setName] = useState("");
  const [year, setYear] = useState("");
  const [type, setType] = useState("");
  const handleSearch = () => {
    searchMovie({ name, year, type });
  };
  return (
    <div className="search-component">
      <TextField
        value={name}
        onChange={e => setName(e.target.value)}
        type="search"
        variant="outlined"
        label="Search field"
        className="search-element-high search-element"
      />
      <TextField
        id="standard-select-currency"
        select
        label="Type"
        value={type}
        variant="outlined"
        onChange={e => setType(e.target.value)}
        className="search-element"
      >
        {types.map(type => (
          <MenuItem key={type.value} value={type.value}>
            {type.label}
          </MenuItem>
        ))}
      </TextField>
      <TextField
        value={year}
        label="Year"
        variant="outlined"
        onChange={e => setYear(e.target.value)}
        className="search-element"
      />
      <Button
        variant="contained"
        color="primary"
        onClick={handleSearch}
        className="search-element"
      >
        Search
      </Button>
    </div>
  );
}

export default SearchComponent;
