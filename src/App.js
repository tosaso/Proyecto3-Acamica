import React, { useEffect, useState } from "react";
import Header from "./header";
import Search from "./search";
import Result from "./result";
import "./styles.css";

export default function App() {
  let [isDarkMode, setDarkMode] = useState(true);
  /* Terminos de busqueda*/
  const [search, setSearch] = useState("");
  /* Flag si se realizó una busqueda */
  const [searchGif, setSearchGif] = useState(false);
  /* Array de result de API */
  const [result, setResult] = useState([]);
  /* Si existió una búsqueda */
  const [searched, setSearched] = useState(false);
  /* Autocomplete */
  const [newtags, setNewtags] = useState("");

  useEffect(() => {
    if (searchGif === true) {
      let api = fetch(
        `https://api.giphy.com/v1/gifs/search?api_key=zUqJUBhQc8ayRD9ekQbf4JuaKPdkSvU8&q=${search}&limit=12&offset=0&rating=g&lang=es`
      );
      api
        .then((response) => {
          return response.json();
        })
        .then((results) => {
          setResult(results.data);
          setSearchGif(false);
          setSearch("");
          setSearched(true);
        });
    }
  }, [searchGif]);

  useEffect(() => {
    let autocomplete = fetch(
      `https://api.giphy.com/v1/gifs/search/tags?api_key=zUqJUBhQc8ayRD9ekQbf4JuaKPdkSvU8&q=${search}&limit=4&offset=0&rating=g&lang=es`
    );
    autocomplete
      .then((response) => {
        return response.json();
      })
      .then((results) => {
        setNewtags(results.data);
      });
  }, [search]);

  return (
    <div className={isDarkMode ? "app" : "app-dark"}>
      <Header click={DarkClick} isDarkMode={isDarkMode} />
      <Search
        isDarkMode={isDarkMode}
        search={search}
        setSearch={setSearch}
        setSearchGif={setSearchGif}
        newtags={newtags}
      />
      <Result
        click={DarkClick}
        isDarkMode={isDarkMode}
        searchGif={searchGif}
        result={result}
        search={search}
        searched={searched}
      />
    </div>
  );

  function DarkClick(value) {
    setDarkMode(value);
  }
}
