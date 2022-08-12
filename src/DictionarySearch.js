import React, { useState } from "react";
import "./DictionarySearch.css";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");
  function Search(event) {
    event.preventDefault();
    alert("Searching");
  }

  function handleKeywordChange(event) {
    console.log(event);
  }
  return (
    <div className="Dictionary">
      <form onSubmit={Search}>
        <input
          type="text"
          placeholder="Search Term"
          onChange={handleKeywordChange}
        ></input>
      </form>
    </div>
  );
}
