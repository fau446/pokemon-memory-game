import styles from "../styles/Card.module.css";

function Card({ name, spriteURL, handleClick, uniqueId }) {
  return (
    <div className={styles.card} onClick={handleClick} data-uniqueid={uniqueId}>
      <p data-uniqueid={uniqueId}>{name}</p>
      <img data-uniqueid={uniqueId} src={spriteURL} alt={name} />
    </div>
  );
}

export default Card;
