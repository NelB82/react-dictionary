import React, { useState } from "react";
import "./DictionarySearch.css";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");
  function Search(event) {
    event.preventDefault();
    alert(`Searching for ${keyword}`);
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }
  return (
    <div className="Dictionary">
      <form className="searchForm text-center" onSubmit={Search}>
        <input
          type="text"
          placeholder="Search Term"
          onChange={handleKeywordChange}
        ></input>
      </form>
    </div>
  );
}
