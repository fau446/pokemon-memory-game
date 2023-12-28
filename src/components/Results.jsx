function Results({ gameResult, currentScore, resetGame, openMenu }) {
  function handleClick() {
    resetGame();
    openMenu();
  }

  return (
    <div>
      <p>
        You {gameResult}! Your score was: {currentScore}
      </p>
      <button onClick={handleClick}>Menu</button>
    </div>
  );
}

export default Results;
