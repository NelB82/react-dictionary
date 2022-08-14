import React, { useState } from "react";
import "./DictionarySearch.css";
import axios from "axios";
import Results from "./Results";

//Documentation: https://dictionaryapi.dev/

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");
  let [result, setResult] = useState(null);

  function handleResponse(response) {
    console.log(response.data[0]);
    setResult(response.data[0]);
  }

  function Search(event) {
    event.preventDefault();
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
      <Results results={result} />
    </div>
  );
}
