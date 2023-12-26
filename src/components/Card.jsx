function Card({ name, spriteURL }) {
  return (
    <div>
      <p>{name}</p>
      <img src={spriteURL} alt={name} />
    </div>
  );
}

export default Card;
