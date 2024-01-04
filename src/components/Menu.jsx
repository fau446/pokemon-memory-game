import styles from "../styles/Menu.module.css";

function Menu({ changeNumOfCards, closeMenu }) {
  function handleNumOfCardsChange(e) {
    changeNumOfCards(e.target.value);
  }

  return (
    <div className={styles.box}>
      <div>
        <label className={styles.label} htmlFor="numOfCards">
          Choose the number of cards:{" "}
        </label>
        <select
          className={styles.select}
          id="numOfCards"
          name="numOfCards"
          onChange={handleNumOfCardsChange}
          value={"0"}
        >
          <option value="0" disabled hidden>
            -
          </option>
          <option value="5">5</option>
          <option value="10">10</option>
          <option value="15">15</option>
        </select>
      </div>
      <button className={styles.button} onClick={closeMenu}>
        Close Menu
      </button>
    </div>
  );
}

export default Menu;
