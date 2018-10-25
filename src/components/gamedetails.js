import React from "react";
import styles from "./gamedetails.module.css"

const GameDetails = props => {
  const { game } = props;
  if (!game.box) {
    return(
      <h5>Loading...</h5>
    )
  }
  console.log(game.popularity.toLocaleString())
  return (
    <div className={styles.detailLayout}>
      <h3>{game.name}</h3>
      <img className={styles.image} src={game.box.large} alt="game-logo" />
      <h5>{game.popularity.toLocaleString()} viewers</h5>
    </div>
  )
}

export default GameDetails;

