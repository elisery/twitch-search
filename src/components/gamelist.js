import React, { Component } from "react"
import styles from "./gamelist.module.css"

const GameList = props => {
  const { games = [] } = props;
  const { onGameClick = () => {} } = props;
  return (
    <div className={styles.scroll}>
      <ul className={styles.ul}>
        {games.map((game, i) => (
          <li className={styles.li} key={i} onClick={() => onGameClick(game._id)}>{game.name}</li>
        ))}
      </ul>
    </div>
  )
}

export default GameList;
