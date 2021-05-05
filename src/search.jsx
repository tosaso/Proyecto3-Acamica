import React from "react";
import "./search.css";

function Search({ isDarkMode, search, setSearch, newtags, setSearchGif }) {
  function fantasma(input) {
    setSearch(input);
  }

  return (
    <div className="search">
      <h1 className={isDarkMode ? "titulo-light" : "titulo-dark"}>
        ¡Inspirate y busca los mejores <strong>GIFS!</strong>
      </h1>
      <img src="./images/ilustracion-search.svg" alt="Ilustración search" />
      <div className="search-div">
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className={isDarkMode ? "input-light" : "input-dark"}
          type="text"
          placeholder="Busca gifs"
        />
        <button
          id="btnSearch"
          onClick={() => {
            setSearchGif(true);
          }}
        >
          <img src="./images/search-icon.svg" alt="Buscar" />
        </button>
      </div>
      <div>
        {newtags.map((data) => (
          <p
            onClick={() => fantasma(data.name)}
            onChange={() => {
              setSearchGif(true);
            }}
          >
            {data.name}
          </p>
        ))}
      </div>
    </div>
  );
}

export default Search;
