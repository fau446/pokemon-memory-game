function Card({ name, spriteURL, handleClick, uniqueId }) {
  return (
    <div onClick={handleClick} data-uniqueid={uniqueId}>
      <p data-uniqueid={uniqueId}>{name}</p>
      <img data-uniqueid={uniqueId} src={spriteURL} alt={name} />
    </div>
  );
}

export default Card;
