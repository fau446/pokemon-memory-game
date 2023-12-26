import { useState } from "react";
import Card from "./Card";

function Game({ pokemonList, randomizeList, changePokemonList }) {
  const [currentScore, setCurrentScore] = useState(0);
  const [selectedCards, setSelectedCards] = useState([]);

  function handleClick(e) {
    for (let i = 0; i < selectedCards.length; i++) {
      if (e.target.dataset.uniqueid === selectedCards[i]) {
        // display GameOver screen
        return;
      }
    }

    let tempList = [...selectedCards, e.target.dataset.uniqueid];
    setSelectedCards(tempList);

    pokemonList = randomizeList(pokemonList, pokemonList.length);
    changePokemonList(pokemonList);
    setCurrentScore(currentScore + 1);
  }

  return (
    <div>
      <p>Current Score: {currentScore}</p>
      {pokemonList.map((item) => (
        <Card
          key={item.key}
          name={item.name}
          spriteURL={item.spriteURL}
          handleClick={handleClick}
          uniqueId={item.key}
        />
      ))}
    </div>
  );
}

export default Game;
