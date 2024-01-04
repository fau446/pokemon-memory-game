function Header({ currentScore, bestScore }) {
  return (
    <div>
      <p>Pokemon Logo Here</p>
      <div>
        <p>Current Score: {currentScore}</p>
        <p>Best Score: {bestScore}</p>
      </div>
    </div>
  );
}

export default Header;
