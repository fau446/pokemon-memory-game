import { useState, useEffect } from "react";
import Menu from "./components/Menu";
import "./App.css";

function App() {
  const [pokemonList, setPokemonList] = useState([]);
  const [numOfCards, setNumOfCards] = useState(10);
  const [renderMenu, setRenderMenu] = useState(true);

  function fetchSpriteURL(list) {
    const fetchPromises = list.map((pokemon) => {
      return fetch(pokemon.url)
        .then((response) => response.json())
        .then((json) => {
          pokemon.spriteURL = json.sprites.front_default;
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

  function closeMenu() {
    setRenderMenu(false);
  }

  function randomizeList(list, numberOfElements) {
    const shuffledList = list.slice().sort(() => Math.random() - 0.5);

    return shuffledList.slice(0, numberOfElements);
  }

  useEffect(() => {
    console.log("Fetching");
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
      {renderMenu && (
        <Menu changeNumOfCards={changeNumOfCards} closeMenu={closeMenu} />
      )}
    </div>
  );
}

export default App;
