import React from "react";
import "./result.css";

function Result({ isDarkMode, result, searchGif, search, searched }) {
  return (
    <div>
      {result.length > 0 && (
        <h4 className={isDarkMode ? "result-title-light" : "result-title-dark"}>
          Resultados de la búsqueda
        </h4>
      )}
      {searchGif === true && <img src="./images/loading.svg" alt="loading" />}
      {result.length === 0 && searched === true && (
        <div>
          <img
            className="not-found"
            src="./images/not-found.png"
            alt="sin resultados"
          />
          <h4
            className={isDarkMode ? "result-title-light" : "result-title-dark"}
          >
            <strong>No hubo resultados</strong>
          </h4>
          <h4
            className={isDarkMode ? "result-title-light" : "result-title-dark"}
          >
            ¿querés buscar otra cosa?
          </h4>
        </div>
      )}
      {result.length > 1 && (
        <div className={isDarkMode ? "image-gallery" : "image-gallery-dark"}>
          {result.map((gif) => (
            <a href={gif.url} key={gif.id}>
              <img
                className="img-results"
                src={gif.images.original.url}
                alt={gif.title}
              />
            </a>
          ))}
        </div>
      )}
    </div>
  );
}

export default Result;
