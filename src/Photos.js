import React from "react";
import "./Photos.css";

export default function Photos(props) {
  console.log(props.photos);

  if (props.photos) {
    return (
      <section className="Photo">
        <div className="row">
          {props.photos.map(function (photo, index) {
            return (
              <div className="col-4" key={index}>
                <a
                  href={photo.src.original}
                  target="_blank"
                  rel={"nonreferrer"}
                >
                  <img
                    src={photo.src.landscape}
                    alt="PexelImages"
                    className="img-fluid"
                  />
                </a>
              </div>
            );
          })}
        </div>
      </section>
    );
  } else {
    return null;
  }
}
