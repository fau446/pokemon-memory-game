import { useState } from "react";
import Menu from "./components/Menu";
import "./App.css";

function App() {
  const [initialRender, setInitialRender] = useState(false);

  const [allPokemonList, setAllPokemonList] = useState([]);
  const [numOfCards, setNumOfCards] = useState(10);
  const [renderMenu, setRenderMenu] = useState(true);
  let chosenPokemonList = [];

  function fetchAllPokemon() {
    if (!initialRender) {
      fetch("https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0")
        .then((response) => response.json())
        .then((json) => {
          setAllPokemonList(json.results);
        });
      setInitialRender(true);
    }
  }

  function fetchSpriteURL() {
    for (let i = 0; i < chosenPokemonList.length; i++) {
      let spriteURL = "";
      fetch(chosenPokemonList[i].url)
        .then((response) => response.json())
        .then((json) => {
          spriteURL = json.sprites.front_default;
          chosenPokemonList[i].spriteURL = spriteURL;
        });
    }
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

  fetchAllPokemon();
  chosenPokemonList = randomizeList(allPokemonList, numOfCards);
  fetchSpriteURL();

  console.log(chosenPokemonList);
  return (
    <div>
      {renderMenu && (
        <Menu changeNumOfCards={changeNumOfCards} closeMenu={closeMenu} />
      )}
      {chosenPokemonList.map((item) => (
        <p>{item.name}</p>
      ))}
    </div>
  );
}

export default App;
