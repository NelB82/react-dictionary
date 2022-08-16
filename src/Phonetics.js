import React from "react";
import "./Phonetics.css";

export default function Phonetics(props) {
  console.log(props);
  return (
    <div className="Phonetic">
      <div className="phoneticText">{props.phonetic.text} </div>

      <a className="phoneticAudio" href={props.phonetic.audio} target="#">
        Audio
      </a>
    </div>
  );
}
