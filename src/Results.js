import React from "react";
import Meaning from "./Meaning";

export default function Result(props) {
  if (props.results) {
    return (
      <div className="Result">
        <h3>{props.results.word}</h3>
        {props.results.meanings.map(function (meaning, index) {
          return (
            <div key={index}>
              <Meaning meaning={meaning} />
            </div>
          );

          //meaning.definitions[0].definition;
        })}
      </div>
    );
  } else {
    return null;
  }
}
