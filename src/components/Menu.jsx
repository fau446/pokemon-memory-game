function Menu({ changeNumOfCards, closeMenu }) {
  function handleNumOfCardsChange(e) {
    changeNumOfCards(e.target.value);
  }

  return (
    <div>
      <label htmlFor="numOfCards">Choose the number of cards: </label>
      <select
        id="numOfCards"
        name="numOfCards"
        onChange={handleNumOfCardsChange}
      >
        <option value="5">5</option>
        <option value="10">10</option>
        <option value="15">15</option>
      </select>
      <button onClick={closeMenu}>Close Menu</button>
    </div>
  );
}

export default Menu;
