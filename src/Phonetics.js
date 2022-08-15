import React from "react";

export default function Phonetics(props) {
  console.log(props);
  return (
    <div className="Phonetic">
      {props.phonetic.text}{" "}
      <a href={props.phonetic.audio} target="#">
        Audio
      </a>
    </div>
  );
}
