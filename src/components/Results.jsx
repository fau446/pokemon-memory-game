import styles from "../styles/Menu.module.css";

function Results({ gameResult, currentScore, resetGame }) {
  return (
    <div className={styles.box}>
      <p className={styles.label}>
        You {gameResult}! Your score was: {currentScore}
      </p>
      <button className={styles.button} onClick={resetGame}>
        Menu
      </button>
    </div>
  );
}

export default Results;
