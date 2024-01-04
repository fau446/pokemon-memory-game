import { useState } from "react";
import Card from "./Card";
import Results from "./Results";

function Game({
  pokemonList,
  randomizeList,
  changePokemonList,
  updateBestScore,
  currentScore,
  updateCurrentScore,
  openMenu,
  changeNumOfCards,
}) {
  const [selectedCards, setSelectedCards] = useState([]);
  const [gameResult, setGameResult] = useState("");

  function handleClick(e) {
    // if card already selected
    for (let i = 0; i < selectedCards.length; i++) {
      if (e.target.dataset.uniqueid === selectedCards[i]) {
        updateBestScore(currentScore);
        setGameResult("Lose");
        return;
      }
    }

    // check if the user has won
    if (currentScore + 1 === pokemonList.length) {
      updateBestScore(currentScore + 1);
      updateCurrentScore(currentScore + 1);
      setGameResult("Win");
      return;
    }

    let tempList = [...selectedCards, e.target.dataset.uniqueid];
    setSelectedCards(tempList);

    pokemonList = randomizeList(pokemonList, pokemonList.length);
    changePokemonList(pokemonList);
    updateCurrentScore(currentScore + 1);
  }

  function resetGame() {
    updateCurrentScore(0);
    setSelectedCards([]);
    setGameResult("");
    changeNumOfCards(0);
  }

  if (gameResult != "") {
    return (
      <Results
        gameResult={gameResult}
        currentScore={currentScore}
        resetGame={resetGame}
        openMenu={openMenu}
      />
    );
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
