import { useState, useEffect } from "react";
import Header from "./components/Header";
import Menu from "./components/Menu";
import Game from "./components/Game";
import { v4 as uuidv4 } from "uuid";
import styles from "./styles/App.module.css";

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

  function resetGame() {
    updateCurrentScore(0);
    changeNumOfCards(0);
    openMenu();
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
    <div className={styles.app}>
      <Header
        currentScore={currentScore}
        bestScore={bestScore}
        resetGame={resetGame}
      />
      {renderMenu && (
        <Menu
          numOfCards={numOfCards}
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
          resetGame={resetGame}
        />
      )}
    </div>
  );
}

export default App;
