function Menu({ changeNumOfCards, closeMenu, bestScore }) {
  function handleNumOfCardsChange(e) {
    changeNumOfCards(e.target.value);
  }

  return (
    <div>
      <p>Best Score: {bestScore}</p>
      <label htmlFor="numOfCards">Choose the number of cards: </label>
      <select
        id="numOfCards"
        name="numOfCards"
        onChange={handleNumOfCardsChange}
      >
        <option value="0" selected disabled hidden>
          -
        </option>
        <option value="5">5</option>
        <option value="10">10</option>
        <option value="15">15</option>
      </select>
      <button onClick={closeMenu}>Close Menu</button>
    </div>
  );
}

export default Menu;
