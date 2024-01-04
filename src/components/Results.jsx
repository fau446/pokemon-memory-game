import styles from "../styles/Menu.module.css";

function Results({ gameResult, currentScore, resetGame, openMenu }) {
  function handleClick() {
    resetGame();
    openMenu();
  }

  return (
    <div className={styles.box}>
      <p className={styles.label}>
        You {gameResult}! Your score was: {currentScore}
      </p>
      <button className={styles.button} onClick={handleClick}>
        Menu
      </button>
    </div>
  );
}

export default Results;
