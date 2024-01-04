import { useState, useEffect } from "react";
import Header from "./components/Header";
import Menu from "./components/Menu";
import Game from "./components/Game";
import "./App.css";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [pokemonList, setPokemonList] = useState([]);
  const [numOfCards, setNumOfCards] = useState(0);
  const [renderMenu, setRenderMenu] = useState(true);
  const [bestScore, setBestScore] = useState(0);
  const [currentScore, setCurrentScore] = useState(0);

  function fetchSpriteURL(list) {
    const fetchPromises = list.map((pokemon) => {
      return fetch(pokemon.url)
        .then((response) => response.json())
        .then((json) => {
          pokemon.spriteURL = json.sprites.front_default;
          pokemon.key = uuidv4();
          return pokemon;
        });
    });

    Promise.all(fetchPromises).then((updatedList) => {
      setPokemonList(updatedList);
    });
  }

  function changeNumOfCards(value) {
    setNumOfCards(value);
  }

  function changePokemonList(list) {
    setPokemonList(list);
  }

  function updateBestScore(value) {
    if (value > bestScore) {
      setBestScore(value);
    }
  }

  function updateCurrentScore(value) {
    setCurrentScore(value);
  }

  function closeMenu() {
    if (numOfCards === 0) return;
    setRenderMenu(false);
  }

  function openMenu() {
    setRenderMenu(true);
  }

  function randomizeList(list, numberOfElements) {
    const shuffledList = list.slice().sort(() => Math.random() - 0.5);

    return shuffledList.slice(0, numberOfElements);
  }

  useEffect(() => {
    let tempList = [];
    fetch("https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0")
      .then((response) => response.json())
      .then((json) => {
        tempList = randomizeList(json.results, numOfCards);
        fetchSpriteURL(tempList);
      });
  }, [numOfCards]);

  return (
    <div>
      <Header currentScore={currentScore} bestScore={bestScore} />
      {renderMenu && (
        <Menu
          changeNumOfCards={changeNumOfCards}
          closeMenu={closeMenu}
          bestScore={bestScore}
        />
      )}
      {!renderMenu && (
        <Game
          pokemonList={pokemonList}
          randomizeList={randomizeList}
          changePokemonList={changePokemonList}
          updateBestScore={updateBestScore}
          currentScore={currentScore}
          updateCurrentScore={updateCurrentScore}
          openMenu={openMenu}
          changeNumOfCards={changeNumOfCards}
        />
      )}
    </div>
  );
}

export default App;
