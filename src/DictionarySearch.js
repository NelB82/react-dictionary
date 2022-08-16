import React, { useState } from "react";
import "./DictionarySearch.css";
import axios from "axios";
import Results from "./Results";

//Documentation: https://dictionaryapi.dev/

export default function Dictionary(props) {
  let [keyword, setKeyword] = useState(props.defaultKeyword);
  let [result, setResult] = useState(null);
  let [loaded, setLoaded] = useState(false);

  function handleResponse(response) {
    setResult(response.data[0]);
  }
  function Search() {
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    Search();
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }
  function load() {
    setLoaded(true);
    Search();
  }

  if (loaded) {
    return (
      <div className="Dictionary">
        <h1>Look up a word</h1>
        <form className="searchForm text-center " onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Search Term"
            onChange={handleKeywordChange}
          ></input>
          <button className="searchButton">Search</button>
        </form>

        <Results results={result} />
      </div>
    );
  } else {
    load();
    return "Loading";
  }
}
