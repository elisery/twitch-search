import React, { Component } from "react"
import styles from "./gamelist.module.css"

const GameList = props => {
  const { games = [] } = props;
  return (
    <ul className={styles.ul}>
      {games.map((game, i) => (
        <li className={styles.li} key={i}>{game.name}</li>
      ))}
    </ul>
  )
}

export default GameList;