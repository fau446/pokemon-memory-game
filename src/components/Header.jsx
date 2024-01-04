import logo from "../assets/pokemon_logo.png";
import styles from "../styles/Header.module.css";

function Header({ currentScore, bestScore }) {
  return (
    <div className={styles.header}>
      <img className={styles.logo} src={logo} alt="Pokemon Logo" />
      <div className={styles.box}>
        <p>Current Score: {currentScore}</p>
        <p>Best Score: {bestScore}</p>
      </div>
    </div>
  );
}

export default Header;
