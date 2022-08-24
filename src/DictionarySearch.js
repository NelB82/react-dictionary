import React, { useState } from "react";
import "./DictionarySearch.css";
import axios from "axios";
import Results from "./Results";
import Photos from "./Photos.js";

//563492ad6f91700001000001d622400a4ff2413eb3345c6010a271bf

//Documentation: https://dictionaryapi.dev/

export default function Dictionary(props) {
  let [keyword, setKeyword] = useState(props.defaultKeyword);
  let [result, setResult] = useState(null);
  let [loaded, setLoaded] = useState(false);
  let [photos, setPhotos] = useState(null);

  function handleDictionaryResponse(response) {
    setResult(response.data[0]);
  }

  function handlePexelsResponse(response) {
    setPhotos(response.data.photos);
  }

  function search() {
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleDictionaryResponse);

    let pexelsApiKey =
      "563492ad6f91700001000001d622400a4ff2413eb3345c6010a271bf";
    let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=3`;
    let headers = { Authorization: `Bearer ${pexelsApiKey}` };

    axios.get(pexelsApiUrl, { headers: headers }).then(handlePexelsResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }
  function load() {
    setLoaded(true);
    search();
  }

  if (loaded) {
    return (
      <div className="Dictionary">
        <h1 className="text-center">Look up a word</h1>
        <form className="searchForm text-center mt-4 " onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Search Term"
            onChange={handleKeywordChange}
          />
          <button className="searchButton">Search</button>
        </form>

        <Results results={result} />
        <Photos photos={photos} />
      </div>
    );
  } else {
    load();
    return "Loading";
  }
}
