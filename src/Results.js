import React from "react";
import Meaning from "./Meaning";
import Phonetics from "./Phonetics";
import "./Results.css";

export default function Result(props) {
  if (props.results) {
    return (
      <div className="Result">
        <section className="Word">
          <h2>{props.results.word}</h2>
          <div className="Phonetics">
            {props.results.phonetics.map(function (phonetic, index) {
              return (
                <div key={index}>
                  <Phonetics phonetic={phonetic} />
                </div>
              );
            })}
          </div>
        </section>
        {props.results.meanings.map(function (meaning, index) {
          return (
            <section className="Meanings" key={index}>
              <Meaning meaning={meaning} />
            </section>
          );

          //meaning.definitions[0].definition;
        })}
      </div>
    );
  } else {
    return null;
  }
}
