import { useState } from "react";
import Card from "./Card";

function Game({
  pokemonList,
  randomizeList,
  changePokemonList,
  updateBestScore,
}) {
  const [currentScore, setCurrentScore] = useState(0);
  const [selectedCards, setSelectedCards] = useState([]);

  function handleClick(e) {
    // if card already selected
    for (let i = 0; i < selectedCards.length; i++) {
      if (e.target.dataset.uniqueid === selectedCards[i]) {
        updateBestScore(currentScore);
        setCurrentScore(0);
        setSelectedCards([]);
        // display GameOver screen
        return;
      }
    }

    // check if the user has won
    if (currentScore + 1 === pokemonList.length) {
      updateBestScore(currentScore + 1);
      setCurrentScore(0);
      setSelectedCards([]);
      return;
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
