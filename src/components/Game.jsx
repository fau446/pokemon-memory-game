import Card from "./Card";

function Game({ pokemonList }) {
  return (
    <div>
      {pokemonList.map((item) => (
        <Card name={item.name} spriteURL={item.spriteURL} />
      ))}
    </div>
  );
}

export default Game;
