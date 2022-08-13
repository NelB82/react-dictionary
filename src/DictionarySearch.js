import React, { useState } from "react";
import "./DictionarySearch.css";
import axios from "axios";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");

  function handleResponse(response) {
    console.log(response.data[0]);
  }

  function Search(event) {
    event.preventDefault();
    alert(`Searching for ${keyword}`);
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }
  return (
    <div className="Dictionary">
      <form className="searchForm text-center primary " onSubmit={Search}>
        <input
          type="text"
          placeholder="Search Term"
          onChange={handleKeywordChange}
        ></input>
      </form>
    </div>
  );
}
