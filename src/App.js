import React, { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Characters from "./components/Characters";
import Pagination from "./components/Pagination";

function App() {
  const [character, setCharacter] = useState([]);
  const [info, setInfo] = useState({});
  const initialUrl = "https://rickandmortyapi.com/api/character";

  const fetchCharacters = (initialUrl) => {
    fetch(initialUrl)
      .then((response) => response.json())
      .then((data) => {
        setCharacter(data.results);
        setInfo(data.info);
      })
      .catch((error) => console.log(error));
  };

  const onPrevius = () => {
    fetchCharacters(info.prev);
  };

  const onNext = () => {
    fetchCharacters(info.next);
  };

  useEffect(() => {
    fetchCharacters(initialUrl);
  }, []);

  return (
    <>
      <Navbar />
      <div className="container mt-5">
        <Pagination
          prev={info.prev}
          next={info.next}
          onPrevius={onPrevius}
          onNext={onNext}
        />
        <Characters characters={character} />
      </div>
    </>
  );
}

export default App;
